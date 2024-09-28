import { API_BASE_URL } from '../constants';
import { HttpService } from './httpService';

export class ApiService extends HttpService {
    constructor(baseUrl) {
        super(baseUrl);
    }
    async login({ email, password }) {
        return this.post('/login', { email, password });
    }
    async signUp({ email, password }) {
        return this.post('/sign-up', { email, password });
    }
    async getUser() {
        return this.get('/user');
    }
    async getCandidates() {
        return this.get('/candidates');
    }
    async getCandidate(id) {
        return this.get(`/candidates/${id}`);
    }
    async getVacancies() {
        return this.get('/vacancies');
    }
    async getVacancy(id) {        
        return this.get(`/vacancies/${id}`);
    }
    async addCandidate(candidate) {
        return this.post('/candidates', candidate);
    }
    async addVacancy(vacancy) {
        return this.post('/vacancies', vacancy);
    }
    async addCandidateWithVacancy(candidate, vacancyId) {
        const responses = await Promise.all([
            this.addCandidate(candidate),
            this.connectCandidateAndVacancy(candidate.id, vacancyId),
        ]);
        return responses;
    }
    async connectCandidateAndVacancy(candidateId, vacancyId) {
        return this.post(`/connection`, { candidateId, vacancyId });
    }
    async changeConnectionStatus(id, status) {
        return this.patch(`/connection/${id}`, { status });
    }
}

export const apiService = new ApiService(API_BASE_URL);
