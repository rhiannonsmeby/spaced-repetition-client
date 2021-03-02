import config from '../config'
import TokenService from './token-service'

const LanguageService = {
    getAllWords: async function () {
        try {
            const response = await fetch(`${config.API_ENDPOINT}/language`, {
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${TokenService.getAuthToken()}`,
                },
            });
            if (!response.ok) {
                return response.json().then((event) => Promise.reject(event));
            } else {
                return response.json();
            }
        } catch(e) {
            console.error(e);
        }
    },
    getHead: async function () {
        try {
            const response = await fetch(`${config.API_ENDPOINT}/language/head`, {
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${TokenService.getAuthToken()}`,
                },
            });
            if (!response.ok) {
                return response.json().then((event) => Promise.reject(event));
            } else {
                return response.json()
            }
        } catch (e) {
            console.error(e);
        }
    },
    submitGuess: async function(guess) {
        try {
            const response = await fetch(`${config.API_ENDPOINT}/language/guess`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${TokenService.getAuthToken()}`
                },
                body: JSON.stringify({guess: guess})
            })
            if (!response.ok) {
                return response.json().then((event) => Promise.reject(event.error))
            } else { 
                return response.json()
            }
        } catch (e) {
            console.error(e);
        }
    }
};

export default LanguageService;