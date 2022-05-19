import axios from 'axios';

let baseURL = 'https://themealdb.com/api/json/v1/1/';

const httpClient = axios.create({ baseURL });

// Add a request interceptor
httpClient.interceptors.request.use(
    function(successReq) { 
      console.log('Inside request interceptor..', successReq)  
      return successReq;
    }, 
    function(error) {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
httpClient.interceptors.response.use(
    function(successRes) { 
      console.log('Inside response interceptor..', successRes)  
      return successRes;
    }, 
    function(error) {
      return Promise.reject(error);
    }
  );

export default httpClient;
