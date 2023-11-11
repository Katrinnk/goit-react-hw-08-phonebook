import { Btn } from 'components/LoginBtn/LoginBtn.styled';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from 'Redux/auth/selectors';
import { logoutThunk } from 'Redux/auth/thunks';
import { UserWrap } from './UserMenu.styled';

const UserMenu = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutThunk());
  };

  const userName = user ? user.name : 'Guest';

  return (
    <UserWrap className="d-flex flex-row align-items-center">
      <p>
        Welcome, <b>{userName}</b>
      </p>
      <Btn onClick={handleClick}>Logout</Btn>
    </UserWrap>
  );
};

export default UserMenu;
