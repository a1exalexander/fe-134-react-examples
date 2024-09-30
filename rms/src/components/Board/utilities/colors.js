import { CandidateStatus } from '../../../constants';

export const colors = {
    [CandidateStatus.REJECTED]: 'rgba(255, 99, 132, 0.3)', // pastel red
    [CandidateStatus.PENDING]: 'rgba(201, 203, 207, 0.3)', // pastel grey
    [CandidateStatus.INTERVIEW]: 'rgba(255, 205, 86, 0.3)', // pastel yellow
    [CandidateStatus.TASK]: 'rgba(54, 162, 235, 0.3)', // pastel blue
    [CandidateStatus.FINAL_INTERVIEW]: 'rgba(153, 102, 255, 0.3)', // pastel violet
    [CandidateStatus.OFFER]: 'rgba(75, 192, 192, 0.3)', // pastel green
};
