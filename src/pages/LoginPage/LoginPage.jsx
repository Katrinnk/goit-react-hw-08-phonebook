import FormLogin from 'Forms/Login/Login';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'Redux/auth/thunks';

const Login = () => {
  const dispatch = useDispatch();

  const login = async body => {
    try {
      await dispatch(loginThunk(body)).unwrap();
      toast.success('Login successful', {
        duration: 2000,
        position: 'top-center',
      });
    } catch (error) {
      toast.error('Email or password error', {
        duration: 3000,
        position: 'top-center',
      });
    }
  };

  return <FormLogin login={login} />;
};

export default Login;
