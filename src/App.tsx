import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import style from './App.module.css';
import GreetingModal from './components/GreetingModal/GreetingModal';
import MainPage from './components/MainPage/MainPage';
import RepoView from './components/RepoView/RepoView';
import Loader from './components/Loader/Loader';
import { getLoad } from './redux/loading/selectors';

function App() {
  const [isModal, setIsModal] = useState<true | false>(true);
  const isLoading = useSelector(getLoad);

  useEffect(() => {
    const timerModal = setTimeout(() => setIsModal(check => !check), 3000);
    return () => {
      clearTimeout(timerModal);
    };
  }, []);

  return (
    <Switch>
      <Route exact path={'/'}>
        <div className={style.appWrapper}>
          {isModal ? <GreetingModal /> : <MainPage />}
          {isLoading && <Loader />}
        </div>
      </Route>
      <Route exact path="/view/:id">
        <RepoView />
      </Route>
      <Loader />
    </Switch>
  );
}

export default App;
