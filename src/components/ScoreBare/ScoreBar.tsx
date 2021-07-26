import React from 'react';
import styles from '../ScoreBar.module.css';

interface IScoreBar {
  name: {
    firstPlayer: string;
    secondPlayer: string;
  };
  score: {
    firstScore: number;
    secondScore: number;
  };
}

const ScoreBar = ({ name, score }: IScoreBar) => {
  const { firstScore, secondScore } = score;
  const { firstPlayer, secondPlayer } = name;
  return (
    <div className={styles.scoreBar__wrapper}>
      <h2 className={styles.scoreBar__title}>Score</h2>
      <h2 className={styles.scoreBar__title}>
        {firstPlayer} : {firstScore}
      </h2>
      <h2 className={styles.scoreBar__title}>
        {secondPlayer} : {secondScore}
      </h2>
    </div>
  );
};

export default ScoreBar;
