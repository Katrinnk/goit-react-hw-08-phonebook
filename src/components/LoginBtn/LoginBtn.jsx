import { useNavigate } from 'react-router-dom';
import { Btn } from './LoginBtn.styled';

const LoginBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('login');
  };

  return <Btn onClick={handleClick}>Login</Btn>;
};

export default LoginBtn;
