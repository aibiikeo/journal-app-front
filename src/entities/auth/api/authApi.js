import { axiosInstance } from '@shared/api/axios';

const ENDPOINTS = {
    SIGNUP: '/trusted/auth/signup',
    LOGIN: '/trusted/auth/login',
};

export const authApi = {
    /**
     * Sign up a new user
     * @param {Object} signupData - The data for signing up a new user
     * @param {string} signupData.email - Email address of the new user
     * @param {string} signupData.password - Password of the new user
     * @returns {Promise<Object>} The created user data
     */
    async signup(signupData) {
        const { data } = await axiosInstance.post(ENDPOINTS.SIGNUP, signupData);
        return data;
    },

    /**
     * Log in an existing user
     * @param {Object} loginData - The data for logging in a user
     * @param {string} loginData.email - Email address of the user
     * @param {string} loginData.password - Password of the user
     * @returns {Promise<Object>} The authentication token
     */
    async login(loginData) {
        const { data } = await axiosInstance.post(ENDPOINTS.LOGIN, loginData);
        return data;
    },
};

