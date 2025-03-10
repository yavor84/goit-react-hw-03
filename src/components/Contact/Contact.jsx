import { FcPhone } from 'react-icons/fc';
import { FcBusinessContact } from 'react-icons/fc';
import css from './Contact.module.css';

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <>
      <FcBusinessContact />
      <h3 className={css.name}>{name}</h3>
      <FcPhone />
      <p>{number}</p>
      <button className={css.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
