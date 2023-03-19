import PropTypes from 'prop-types';
import { List, ButtonDelete } from './ContactsList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { BsTelephone } from 'react-icons/bs';
import { IoIosContact } from 'react-icons/io';

export function ContactsList({ contact }) {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const { filter } = useSelector(getFilter);

  if (!contacts) {
    return null;
  }
  const visibleContacts = contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleDelete = () => dispatch(deleteContact());

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <ButtonDelete onClick={handleDelete} type="button">
            Delete
          </ButtonDelete>
          <span>
            <IoIosContact />
            {name}
          </span>
          <p>
            <BsTelephone />
            {number}
          </p>
        </li>
      ))}
    </List>
  );
}

ContactsList.propTypes = {
  contact: PropTypes.object,
  visibleContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
