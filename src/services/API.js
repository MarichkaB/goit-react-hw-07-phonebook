import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6391f4e3ac688bbe4c57eddf.mockapi.io/contacts',
  params: {},
});

const getContacts = async () => {
  const response = await instance.get('');
  return response.data;
};

const addContact = async data => {
  const response = await instance.post('', data);
  return response.data;
};

const deleteContact = async id => await instance.delete(`/${id}`);

export const API = {
  getContacts,
  addContact,
  deleteContact,
};
