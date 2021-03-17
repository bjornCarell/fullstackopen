import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { FeedbackButton } from './FeedbackButton';
import { Statistics } from './Statistics'

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  useEffect(() => {
    const storage = JSON.parse(window.localStorage.getItem('feedbacks'));

    if(storage) {
      setGood(storage.good);
      setNeutral(storage.neutral);
      setBad(storage.bad);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('feedbacks', JSON.stringify({good, neutral, bad}));
  }, [good, neutral, bad]);


  return (
    <>
      <Header text="give feedback" />
        <FeedbackButton text="good" onClick={() => setGood(good + 1)}/>
        <FeedbackButton text="neutral" onClick={() => setNeutral(neutral + 1)}/>
        <FeedbackButton text="bad" onClick={() => setBad(bad + 1)}/>
      <Header text="statistics"/>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </>
  );
}

export default App;
