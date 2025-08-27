import axios from 'axios';

const axiosHttp = axios.create({
    baseURL: 'http://localhost:4203',
    withCredentials: false,
});

// Interceptor for token authentication requests or custom response handling
// const AxiosInterceptor () => {
//     const interceptor = axiosHttp.interceptors.request.use();
//     return () => axiosHttp.interceptors.response.eject(interceptor);
// }

export default axiosHttp;