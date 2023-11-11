import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isRefreshingSelector } from 'Redux/auth/selectors';
import { refreshThunk } from 'Redux/auth/thunks';
import Layout from 'Layout/Layout';
import PrivateRoute from 'guards/PrivateRoute/PrivateRoute';
import PublicRoute from 'guards/PublicRoute/PublicRoute';

const Home = lazy(() => import('pages/Home/Home'));
const Phonebook = lazy(() => import('pages/Phonebook/Phonebook'));
const Login = lazy(() => import('pages/LoginPage/LoginPage'));
const Registration = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(isRefreshingSelector);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="phonebook"
            element={
              <PrivateRoute>
                <Phonebook />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="registration"
            element={
              <PublicRoute>
                <Registration />
              </PublicRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    )
  );
};

export default App;
