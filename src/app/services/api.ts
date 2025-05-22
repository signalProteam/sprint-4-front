export const API_BASE = process.env.NODE_ENV === 'production'
    ? 'https://ccr-alertas-api.up.railway.app'
    : 'http://localhost:8080';

export const getHeaders = () => ({
    "Content-Type": "application/json",
    "x-api-key": "123456",
});
