import { useEffect, useMemo } from 'react';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/contacts-operations';
import { selectContacts, selectFilter, selectIsLoading } from 'redux/selector';
import { RevolvingDot } from 'react-loader-spinner';
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
      <RevolvingDot
        height="100"
        width="100"
        radius="6"
        color="#4fa94d"
        secondaryColor=""
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
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
        {filteredContacts.map(({ name, number, id }) => {
          return <ContactsItem key={id} name={name} number={number} id={id} />;
        })}
      </ul>
    </div>
  );
};
