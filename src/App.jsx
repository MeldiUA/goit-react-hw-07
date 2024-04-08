import { useDispatch } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from './redux/contactsSlice';
import Error from './components/error/Error';
import Loader from './components/loader/Loader';

export default function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      {error && <Error />}
      {loading && <Loader />}
      {!error && !loading && (
        <div>
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      )}
    </div>
  );
}
