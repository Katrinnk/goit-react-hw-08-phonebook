import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginBtn from 'components/LoginBtn/LoginBtn';
import UserMenu from 'components/UserMenu/UserMenu';
import { tokenSelector } from 'Redux/auth/selectors';
import { Nav } from './Header.styled';

const Header = () => {
  const isToken = useSelector(tokenSelector);

  return (
    <Nav className="navbar navbar-expand-lg bg-body-tertiary d-flex">
      <div>
        <NavLink to="/">Home</NavLink>
        {isToken && <NavLink to="phonebook">Phonebook</NavLink>}
      </div>
      {isToken ? <UserMenu /> : <LoginBtn />}
    </Nav>
  );
};

export default Header;
