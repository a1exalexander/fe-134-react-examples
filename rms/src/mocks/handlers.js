import { http, HttpResponse, delay } from 'msw';
import { v4 } from 'uuid';
import { vacancies } from './data/vacancies';
import { vacanciesOnCandidates } from './data/vacanciesOnCancidates';
import { candidates } from './data/candidates';
import { CandidateStatus } from '../constants';

const API_PREFIX = 'api';
const getApiUrl = url => `/${API_PREFIX}${url}`;
const getToken = email => `fake-token-${email}`;
const getAuthCookie = token => `authToken=${token}`;
const parseEmailFromToken = token => token.replace('fake-token-', '');
const getUser = email => {
    return {
        firstName: 'John',
        lastName: 'Wick',
        email,
    };
};
const getHeaders = headers => {
    const headersData = new Headers();
    headersData.append('Content-Type', 'application/json');
    if (headers) {
        for (const [key, value] of Object.entries(headers)) {
            headersData.append(key, value);
        }
    }
    return headersData;
};

export const handlers = [
    http.all(getApiUrl('/*'), async () => {
        await delay(1000);
    }),
    http.get(getApiUrl('/vacancies'), () => {
        const vacanciesWithCandidates = vacancies.map(vacancy => {
            const candidates = vacanciesOnCandidates
                .filter(({ vacancyId }) => {
                    return vacancyId === vacancy.id;
                })
                .map(({ candidateId }) => {
                    return candidateId;
                });
            return {
                ...vacancy,
                candidates,
            };
        });
        return HttpResponse.json(vacanciesWithCandidates);
    }),
    http.get(getApiUrl('/vacancies/:id'), ({ params }) => {
        const { id } = params;
        const vacancy = vacancies.find(vacancy => {
            return vacancy.id === id;
        });
        const candidatesWithDetails = vacanciesOnCandidates
            .filter(({ vacancyId }) => {
                return vacancyId === vacancy.id;
            })
            .map(details => {
                const candidate = candidates.find(
                    candidate => candidate.id === details.candidateId
                );
                return {
                    ...candidate,
                    status: details.status,
                };
            })
            .filter(candidate => candidate !== undefined);
        return HttpResponse.json({
            ...vacancy,
            candidates: candidatesWithDetails,
        });
    }),
    http.patch(getApiUrl('/vacancies/:id'), async ({ params, request }) => {
        const { id } = params;
        const newVacancy = await request.json();
        const vacancyIndex = vacancies.findIndex(vacancy => {
            return vacancy.id === parseInt(id);
        });
        if (vacancyIndex === -1) {
            return new HttpResponse(null, { status: 404 });
        }
        vacancies.splice(vacancyIndex, 1, {
            ...vacancies[vacancyIndex],
            ...newVacancy,
        });
    }),
    http.get(getApiUrl('/candidates'), () => {
        const candidatesWithVacancies = candidates.map(candidate => {
            const vacancies = vacanciesOnCandidates
                .filter(({ candidateId }) => {
                    return candidateId === candidate.id;
                })
                .map(({ vacancyId }) => {
                    return vacancyId;
                });
            return {
                ...candidate,
                vacancies,
            };
        });
        return HttpResponse.json(candidatesWithVacancies);
    }),
    http.get(getApiUrl('/candidates/:id'), ({ params }) => {
        const { id } = params;
        const candidate = candidates.find(candidate => {
            return candidate.id === parseInt(id);
        });
        const vacanciesWithDetails = vacanciesOnCandidates
            .filter(({ candidateId }) => {
                return candidateId === candidate.id;
            })
            .map(details => {
                const vacancy = vacancies.find(
                    vacancy => vacancy.id === details.vacancyId
                );
                return {
                    ...vacancy,
                    status: details.status,
                };
            })
            .filter(vacancy => vacancy !== undefined);
        return HttpResponse.json({
            ...candidate,
            vacancies: vacanciesWithDetails,
        });
    }),
    http.post(getApiUrl('/vacancies'), async ({ request }) => {
        const newVacancy = await request.json();
        vacancies.push(newVacancy);
        return HttpResponse.json(newVacancy, { status: 201 });
    }),
    http.post('/candidates', async ({ request }) => {
        const body = await request.json();
        const date = new Date().toISOString();
        const newCandidate = {
            id: v4(),
            ...body,
            createdAt: date,
            updatedAt: date,
        };
        candidates.push(newCandidate);
        return HttpResponse.json(newCandidate, { status: 201 });
    }),
    http.post(getApiUrl('/connection'), async ({ request }) => {
        const { vacancyId, candidateId } = await request.json();
        const date = new Date().toISOString();
        const newRelation = {
            id: v4(),
            vacancyId,
            candidateId,
            status: CandidateStatus.PENDING,
            createdAt: date,
            updatedAt: date,
        };
        vacanciesOnCandidates.push(newRelation);
        return HttpResponse.json(newRelation);
    }),
    http.patch(getApiUrl('/connection/:id'), async ({ params, request }) => {
        const { id } = params;
        const { status } = await request.json();
        const relationIndex = vacanciesOnCandidates.findIndex(
            relation => relation.id === id
        );
        if (relationIndex === -1) {
            return new HttpResponse(null, { status: 404 });
        }
        vacanciesOnCandidates.splice(relationIndex, 1, {
            ...vacanciesOnCandidates[relationIndex],
            status,
            updatedAt: new Date().toISOString(),
        });
        return HttpResponse.json(vacanciesOnCandidates[relationIndex]);
    }),
    http.get(getApiUrl('/user'), async ({ cookies }) => {
        if (!cookies.authToken) {
            return new HttpResponse(null, { status: 403 });
        }

        return HttpResponse.json(
            getUser(parseEmailFromToken(cookies.authToken))
        );
    }),
    http.post(getApiUrl('/sign-up'), async ({ request }) => {
        const { email, password } = await request.json();
        if (
            typeof email !== 'string' ||
            email.trim().length < 2 ||
            typeof password !== 'string' ||
            password.trim().length < 4
        ) {
            return new HttpResponse(null, { status: 400 });
        }
        return new HttpResponse(JSON.stringify(getUser(email)), {
            headers: getHeaders({
                'Set-Cookie': getAuthCookie(getToken(email)),
            }),
        });
    }),
    http.post(getApiUrl('/login'), async ({ request }) => {
        const { email, password } = await request.json();
        if (
            typeof email !== 'string' ||
            email.trim().length < 2 ||
            typeof password !== 'string' ||
            password.trim().length < 4
        ) {
            return new HttpResponse(null, { status: 400 });
        }
        return new HttpResponse(JSON.stringify(getUser(email)), {
            headers: getHeaders({
                'Set-Cookie': getAuthCookie(getToken(email)),
            }),
        });
    }),
];
