import { useState, useEffect } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import initialContacts from './contacts.json';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    try {
      const savedContacts = localStorage.getItem('contacts');
      if (savedContacts !== null) {
        const parsedContacts = JSON.parse(savedContacts);
        if (Array.isArray(parsedContacts) && parsedContacts.length > 0) {
          return parsedContacts;
        }
      }
    } catch (error) {
      console.log(error);
    }
    return initialContacts;
  });

  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (error) {
      console.log(error);
    }
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [
        ...prevContacts,
        {
          ...newContact,
          id: nanoid(),
        },
      ];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filterText} onSearchBox={setFilterText} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
