import { useEffect, useMemo } from 'react';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/contacts-operations';
import { selectContacts, selectFilter, selectIsLoading } from 'redux/selector';
import { BallTriangle } from 'react-loader-spinner';
import s from './ContactsList.module.css';

export const ContactsList = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = useMemo(() => {
    const normalizedContacts = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedContacts)
    );
  }, [contacts, filter]);

  if (isLoading) {
    return (
      <BallTriangle
        width="100"
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    );
  }

  if (!contacts.length) {
    return <p>List is empty!</p>;
  }

  if (!filteredContacts.length) {
    return <p>User not found!</p>;
  }

  return (
    <div>
      <ul className={s.contacts_list}>
        {filteredContacts.map(({ name, phone, id }) => {
          return <ContactsItem key={id} name={name} phone={phone} id={id} />;
        })}
      </ul>
    </div>
  );
};
