import { FaUser } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  return (
    <li className={css.contactItem}>
      <div>
        <FaUser className={css.contactIcon}></FaUser>
        <span>{name}</span>
      </div>
      <div>
        <BsTelephoneFill className={css.contactIcon} />
        <span>{number}</span>
      </div>
      <button
        className={css.deleteContactBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
}
