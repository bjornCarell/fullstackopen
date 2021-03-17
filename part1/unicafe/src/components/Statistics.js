import React from 'react';
import { Statistic } from './Statistic';

export const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  const average = (good + neutral + bad) / 3;
  const positiveFeedback = good / (good + neutral + bad) * 100

  const stats = [
    {
      count: good,
      feedback: 'good',
    },{
      count: neutral, 
      feedback: 'neutral'
    },{
      count: bad,
      feedback: 'bad'
    }, {
      count: all,
      feedback: 'all'
    }, {
      count: average.toFixed(2),
      feedback: 'average'
    },{
      count: `${positiveFeedback.toFixed(2)}%`,
      feedback: 'positive'
    }
  ];

  return (
        (good || neutral || bad) 
          ? (
            <table>
              <tbody>
                {
                  stats.map(({count, feedback}) => (
                    <tr key={feedback}>
                      <Statistic feedback={feedback} count={count}/>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          )
          : ' No Feedback given'
  )
}