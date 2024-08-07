import apiClient from "../apiClient.js";

export const login = async ({ email, password }) => {
    try {
        const response = await apiClient.post('api/v1/users/signin', { email, password });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error logging in');
    }
};

export const register = async ({ email, password }) => {
    try {
        const response = await apiClient.post('api/v1/users/signup', { email, password });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error registering');
    }
};

export const getUserBookings = async (userId) => {
    try {
        const response = await apiClient.get(`api/v1/bookings/user/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error fetching bookings');
    }
};

export const createBooking = async (bookingData) => {
    try {
        const response = await apiClient.post('api/v1/bookings/', bookingData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error creating booking');
    }
};

export const updateBooking = async (bookingId, bookingData) => {
    try {
        const response = await apiClient.patch(`api/v1/bookings/${bookingId}`, bookingData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error updating booking');
    }
};
export const deleteBooking = async (bookingId) => {
    try {
        const response = await apiClient.delete(`api/v1/bookings/${bookingId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error deleting booking');
    }
};