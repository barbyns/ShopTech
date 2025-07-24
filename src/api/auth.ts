
import api from './axios';

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  nome: string;
  cognome: string;
  email: string;
  password: string;
}

export const loginUser = async (data: LoginData) => {
  const response = await api.post('/auth/login', data);
  return response.data; 
};

export const registerUser = async (data: RegisterData) => {
  const response = await api.post('/auth/register', data);
  return response.data; 
};
