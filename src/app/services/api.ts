const isBrowser = typeof window !== "undefined";

export const API_BASE = isBrowser
    ? process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080"
    : "http://localhost:8080";

export const getHeaders = () => ({
    "Content-Type": "application/json",
    "x-api-key": "123456",
});
