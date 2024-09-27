import { API_BASE_URL } from '../constants';
import { HttpService } from './httpService';

export class ApiService extends HttpService {
    constructor(baseUrl) {
        super(baseUrl);
    }
    async getCandidates() {
        return this.get('/candidates');
    }
    async getVacancies() {
        return this.get('/vacancies');
    }
    async addCandidate(candidate) {
        return this.post('/candidates', candidate);
    }
    async addVacancy(vacancy) {
        return this.post('/vacancies', vacancy);
    }
    async connectCandidateAndVacancy(candidateId, vacancyId) {
        return this.post(`/vacancies/${vacancyId}/candidates/${candidateId}`);
    }
    async addCandidateWithVacancy(candidate, vacancyId) {
        const responses = await Promise.all([
            this.addCandidate(candidate),
            this.connectCandidateAndVacancy(candidate.id, vacancyId),
        ]);
        return responses;
    }
}

export const apiService = new ApiService(API_BASE_URL);
