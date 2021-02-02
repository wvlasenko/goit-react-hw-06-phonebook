import { connect } from 'react-redux';
import ContactForm from './componnents/ContactForm/ContactForm';
import ContactsList from './componnents/ContactList/ContactList';
import Filter from './componnents/Filter/Filter';
import AppStl from './App.module.css';

function App({ contacts }) {
  return (
    <div className={AppStl.container}>
      <h2 className={AppStl.heading}>PhoneBook</h2>

      <ContactForm />

      <h2 className={AppStl.heading}>Contacts</h2>

      {contacts.length > 1 && <Filter />}

      {contacts.length > 0 && <ContactsList />}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
  };
};

export default connect(mapStateToProps, null)(App);
