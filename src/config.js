function apiUrl(pageEndpoint) {
    const URL = "https://valorant-api.com/v1/";
    const languageAPI = "?language=pt-BR";
    
    const fullUrl = URL + pageEndpoint + languageAPI;
    return fullUrl;
}

export default apiUrl;