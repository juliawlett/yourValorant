import axios from 'axios';

const apiUrl = (pageEndpoint) => {
    const URL = "https://valorant-api.com/v1/";
    const languageAPI = "?language=pt-BR";
    
    return URL + pageEndpoint + languageAPI;
};

export const fetchAgents = async () => {
    try {
        const response = await axios.get(apiUrl('agents'));
        return response.data.data;  
    } catch (error) {
        console.error('Erro ao buscar agentes:', error);
        throw error; 
    }
};