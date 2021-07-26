import { useEffect, useState } from 'react';

import style from './App.module.css';
import CreateUserModal from './components/CreateUserModal/CreateUserModal';
import ScoreBar from './components/ScoreBare/ScoreBar';
import PlayGround from './components/PlayGround/PlayGround';

function App() {
  const [isModal, setIsModal] = useState<true | false>(true);
  interface ISetName {
    firstPlayer: string;
    secondPlayer: string;
  }
  const [name, setName] = useState<ISetName>({
    firstPlayer: '',
    secondPlayer: '',
  });
  interface ISetScore {
    firstScore: number;
    secondScore: number;
  }
  const [score, setScore] = useState<ISetScore>({
    firstScore: 0,
    secondScore: 0,
  });

  const handleSubmit = (obj: ISetName): void => {
    setName(obj);
    setIsModal(prevState => !prevState);
  };

  return (
    <div className={style.appWrapper__container}>
      {isModal && <CreateUserModal handleSubmit={handleSubmit} />}
      {!isModal && (
        <>
          <PlayGround />
          <ScoreBar name={name} score={score} />
        </>
      )}
    </div>
  );
}

export default App;
