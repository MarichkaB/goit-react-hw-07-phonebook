import { deleteContactThunk } from 'redux/contacts-operations';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from './ContactsItem.module.css';

export const ContactsItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.contacts_item}>
      <span>{name}:</span>
      <span>{phone}</span>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(deleteContactThunk(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
