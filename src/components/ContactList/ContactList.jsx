import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'Redux/contacts/thunks';
import { selectorFilteredContacts } from 'Redux/filter/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectorFilteredContacts);
  const dispatch = useDispatch();

  console.log('filteredContacts', filteredContacts);

  const handleDelete = id => {
    dispatch(removeContact(id));
  };

  return (
    <>
      <ul className="list-group">
        {filteredContacts.map(el => (
          <li className="list-group-item ms-3 me-3" key={el.id}>
            {el.name}: {el.phone}
            <button
              type="button"
              className="btn-close ms-5"
              aria-label="Close"
              onClick={() => handleDelete(el.id)}
            ></button>
          </li>
        ))}
      </ul>
    </>
  );
};
