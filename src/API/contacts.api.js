import axios from 'axios';

axios.defaults.baseURL = 'https://654d5877cbc3253557418050.mockapi.io/';

export async function fetchContacts() {
  const { data } = await axios.get(`contacts`);
  return data;
}

export async function addContact(contactData) {
  const { data } = await axios.post(`contacts`, contactData);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
}
