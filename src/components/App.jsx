import { BsJournalBookmark } from 'react-icons/bs';
import { MdNotListedLocation } from 'react-icons/md';

import { PhoneBook } from './PhoneBook/PhoneBook';
import { MainTitle } from './PhoneBook/PhoneBook.styled';
import { ContactsList } from './ContactsList/ContactsList';
import {
  ContactsTitle,
  ContactsSection,
  ContactsNumbers,
  NoContactsSpan,
} from './ContactsList/ContactsList.styled';
import { Filter } from './Filter/Filter';
// import data from './data.json';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { FormSection, PhoneBookBody } from './PhoneBook/PhoneBook.styled';

export function App() {
  const contacts = useSelector(getContacts);
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? data;
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const contacts = window.localStorage.getItem('contacts');
  //   if (contacts) {
  //     setContacts(JSON.parse(contacts));
  //   } else setContacts(data);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = newContact => {
  //   if (
  //     contacts.some(
  //       contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  //     )
  //   ) {
  //     alert(newContact.name + ' Contact is already in contacts');
  //   } else {
  //     setContacts(prevContacts => [newContact, ...prevContacts]);
  //   }
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== contactId)
  //   );
  // };

  // const filterHandler = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // const showFilterList = (contacts, filter) => {
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <PhoneBookBody>
        <MainTitle>
          Phonebook
          <BsJournalBookmark />
        </MainTitle>

        <FormSection>
          <PhoneBook />
        </FormSection>
        <ContactsSection>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter />
          {contacts.contacts.length === 0 ? (
            <NoContactsSpan>
              <MdNotListedLocation />
              There're no contacts
            </NoContactsSpan>
          ) : (
            <ContactsList />
          )}
          <ContactsNumbers>
            {contacts.contacts.length}{' '}
            {contacts.contacts.length > 1 ? 'contacts' : 'contact'}
          </ContactsNumbers>
        </ContactsSection>
      </PhoneBookBody>
    </div>
  );
}
