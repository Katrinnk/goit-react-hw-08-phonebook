import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from 'Redux/auth/selectors';

const Home = () => {
  const user = useSelector(userSelector);

  return (
    <div
      className="p-2 mt-5 d-flex mx-auto align-items-center"
      style={{ maxWidth: '1000px' }}
    >
      <div>
        <h2 className="card-title text-center">Welcome to Phonebook</h2>
        <p className="mt-2 fs-5">
          Never lose a contact again – your digital phonebook is just a click
          away! This site is here to simplify your life by helping you manage
          your contacts effortlessly..&nbsp;
          <br />
          {user ? (
            <>
              As you are already logged into the account, quickly go to the
              <Link to="/phonebook" className="p-1 fs-5">
                Phonebook.
              </Link>
            </>
          ) : (
            <>
              Just
              <Link to="/registration" className="p-1 fs-5">
                Register
              </Link>
              and start creating contacts, or
              <Link to="/login" className="p-1 fs-5">
                Login
              </Link>
              if you already have an account.
            </>
          )}
        </p>
      </div>
      <img
        src="https://i.pinimg.com/564x/7f/83/19/7f83190ad6bce22c65fc85dc0713844e.jpg"
        alt="welcome"
      />
    </div>
  );
};

export default Home;
