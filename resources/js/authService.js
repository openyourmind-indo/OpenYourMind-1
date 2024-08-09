const API_URL = 'http://localhost:8000/api/';

export const register = async (user) => {
    const response = await fetch(API_URL + 'register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const data = await response.json();
    if (data.token) {
        localStorage.setItem('user', JSON.stringify({
            token: data.token,
            role: data.role
        }));
    }
    return data;
};

export const login = async (user) => {
    const response = await fetch(API_URL + 'login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const data = await response.json();
    if (data.token) {
        localStorage.setItem('user', JSON.stringify({
            token: data.token,
            role: data.role
        }));
    }
    return data;
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};
