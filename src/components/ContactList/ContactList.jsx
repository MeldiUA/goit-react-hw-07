import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const searchContacts = filter
    ? contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      })
    : contacts;

  return (
    <div>
      {contacts.length ? (
        <ul className={css.contactsList}>
          {searchContacts.map(contact => (
            <Contact key={contact.id} contact={contact}></Contact>
          ))}
        </ul>
      ) : (
        <span>Contacts not found</span>
      )}
    </div>
  );
}
