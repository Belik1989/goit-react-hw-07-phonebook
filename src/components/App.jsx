import { BsJournalBookmark } from 'react-icons/bs';
// import { MdNotListedLocation } from 'react-icons/md';

import { PhoneBook } from './PhoneBook/PhoneBook';
import { MainTitle } from './PhoneBook/PhoneBook.styled';
import { ContactsList } from './ContactsList/ContactsList';
import {
  ContactsTitle,
  ContactsSection,
  ContactsNumbers,
  // NoContactsSpan,
} from './ContactsList/ContactsList.styled';
import { Filter } from './Filter/Filter';

// import { useGetContactsQuery } from 'redux/contactsSlice';
import { FormSection, PhoneBookBody } from './PhoneBook/PhoneBook.styled';

const App = () => {
  // const { data } = useGetContactsQuery();

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

          <ContactsList />

          <ContactsNumbers></ContactsNumbers>
        </ContactsSection>
      </PhoneBookBody>
    </div>
  );
};
export default App;
