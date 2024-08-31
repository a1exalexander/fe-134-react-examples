import { githubUsernames } from "../data/githubUsernames";

const GITHUB_BASE_URL = 'https://api.github.com';

const enpoints = {
    users: '/users'
}

export const fetchGithubUser = async (username) => {
    try {
        const response =  await fetch(`${GITHUB_BASE_URL}${enpoints.users}/${username}`);
        if (!response.ok) {
            console.error(`Student ${username} not found`);
            return null
        }
        
        const data = await response.json();
        return {
            name: data.name,
            avatar: data.avatar_url,
            github: username,
        };
    } catch {
        console.error(`Student ${username} not found`);
        return null;
    }
}

export const fetchGithubUsers = async () => {
    const cachedData = localStorage.getItem('students');

    if (cachedData) {
        return JSON.parse(cachedData);
    }

    const data = await Promise.all(githubUsernames.map(async (username) => {
        return fetchGithubUser(username);
    }));

    const filteredData = data.filter(stundent => !!stundent);
    
    if (filteredData.length) {
        localStorage.setItem('students', JSON.stringify(filteredData));
    } else {
        localStorage.removeItem('students');
    }
   
    return filteredData;
}