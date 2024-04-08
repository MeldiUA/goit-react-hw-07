import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import {
  selectError,
  selectLoading,
  selectVisibleContacts,
} from '../../redux/contactsSlice';
import Loader from '../loader/Loader';
import Error from '../error/Error';

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}
      {!loading && !error && contacts.length > 0 ? (
        <ul className={css.contactsList}>
          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact}></Contact>
          ))}
        </ul>
      ) : (
        !loading && !error && <span>Contacts not found</span>
      )}
    </div>
  );
}
