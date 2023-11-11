import FormRegistration from 'Forms/Registration/Registration';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { registrationThunk } from 'Redux/auth/thunks';

const Registration = () => {
  const dispatch = useDispatch();

  const registration = body => {
    dispatch(registrationThunk(body))
      .unwrap()
      .catch(
        toast.error(
          'Please check, maybe profile with this email address already exists'
        )
      );
  };

  return <FormRegistration registration={registration} />;
};

export default Registration;
