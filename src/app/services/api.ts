export const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8080';

export const getHeaders = () => ({
    "Content-Type": "application/json",
    "x-api-key": "123456",
});
