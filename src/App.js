import { useState, useEffect } from 'react';
import { v4 as uuid4 } from 'uuid';
import ContactForm from './componnents/ContactForm/ContactForm';
import ContactsList from './componnents/ContactList/ContactList';
import Filter from './componnents/Filter/Filter';
import AppStl from './App.module.css';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? defaultContacts
    );
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(contacts => {
      const contact = {
        id: uuid4(),
        name,
        number,
      };
      return [...contacts, contact];
    });
  };

  const removeContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  const [filter, setFilter] = useState('');

  const onInputFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const getVisibleContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  };

  return (
    <div className={AppStl.container}>
      <h2 className={AppStl.heading}>PhoneBook</h2>

      <ContactForm onAddContact={addContact} />

      <h2 className={AppStl.heading}>Contacts</h2>

      {contacts.length > 1 && (
        <Filter filter={filter} onChangeFilter={onInputFilter} />
      )}

      {contacts.length > 0 && (
        <ContactsList
          visibleContacts={getVisibleContacts(contacts, filter)}
          onRemoveItem={removeContact}
        />
      )}
    </div>
  );
}
