import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import s from './Loader.module.css';

const Load = () => {
  return (
    <Loader
      className={s.loader}
      type="Puff"
      color="#0ca0f5"
      height={100}
      width={100}
      timeout={300000}
    />
  );
};
export default Load;
