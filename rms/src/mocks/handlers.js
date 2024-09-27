import { http, HttpResponse, delay } from 'msw';
import { v4 } from 'uuid';
import { vacancies } from './data/vacancies';
import { Statuses, vacanciesOnCandidates } from './data/vacanciesOnCancidates';
import { candidates } from './data/candidates';

const API_PREFIX = 'api';
const getApiUrl = url => `/${API_PREFIX}${url}`;

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
            return vacancy.id === parseInt(id);
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
    http.post(
        getApiUrl('/vacancies/:vacancyId/candidates/:candidateId'),
        async ({ params }) => {
            const { vacancyId, candidateId } = params;
            const date = new Date().toISOString();
            const newRelation = {
                id: v4(),
                vacancyId,
                candidateId,
                status: Statuses.PENDING,
                createdAt: date,
                updatedAt: date,
            };
            vacanciesOnCandidates.push(newRelation);
            return HttpResponse.json(newRelation);
        }
    ),
];
