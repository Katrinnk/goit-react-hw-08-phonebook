import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllContacts } from 'Redux/contacts/thunks';
import { CreateContact } from 'Forms/CreateContact/CreateContact';
import { Filter } from 'Forms/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <CreateContact />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Phonebook;
