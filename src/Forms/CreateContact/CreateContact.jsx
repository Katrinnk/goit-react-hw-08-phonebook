import { Notify } from 'notiflix';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorContacts } from 'Redux/contacts/selectors';
import { addNewContact } from 'Redux/contacts/thunks';

export const CreateContact = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');
  const contacts = useSelector(selectorContacts);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'number') {
      setNumber(value);
    } else {
      setName(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isAlreadyExist = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (isAlreadyExist) return Notify.failure(`${name} is already in contacts`);
    dispatch(addNewContact({ name, phone }));
    setName('');
    setNumber('');
  };

  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <div className="mb-3 ms-3 me-3 mt-3">
        <label htmlFor="nameInput" className="form-label">
          Contact Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          className="form-control"
          id="nameInput"
          value={name}
        />
      </div>
      <div className="mb-3 ms-3 me-3">
        <label htmlFor="exampleInputTodoDescription" className="form-label">
          Contact Number
        </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          className="form-control"
          id="exampleInputTodoDescription"
          value={phone}
        />
      </div>
      <button type="submit" className="btn btn-primary ms-3">
        Add contact
      </button>
    </form>
  );
};
