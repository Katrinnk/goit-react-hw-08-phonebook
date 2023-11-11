import { BallTriangle } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectorAppIsLoading } from 'Redux/appState/selectors';

export const Loader = () => {
  const isLoading = useSelector(selectorAppIsLoading);

  return (
    isLoading && (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    )
  );
};
