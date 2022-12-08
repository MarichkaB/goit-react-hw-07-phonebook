import React from 'react';
import { Form } from './Form';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './Container';
import s from '../components/App.module.css';

export const App = () => {
  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
      <Form />
      <h2 className={s.contacts_title}>Contacts</h2>
      <Filter />
      <ContactsList />
      <ToastContainer />
    </Container>
  );
};
