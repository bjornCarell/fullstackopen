import React, { useState } from 'react'
import {Anecdote} from './Anecdote';
import {Button} from './Button';
import {Header} from './Header';
import {Paragraph} from './Paragraph';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];
  
  const fillArr = Array(anecdotes.length).fill(0);
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([...fillArr]);

  const addVote = votes => votes.map((vote, index) => index === selected ? vote + 1 : vote);
  const indexOfHighestVote = votes => votes.indexOf(Math.max(...points));
  const areVotes = votes => votes.filter(vote => vote > 0);


  return (
    <div>
      <div>
        <Header text="Anecdotes of the day"/>
        <Anecdote anecdote={anecdotes[selected]}/>
        <Paragraph text={`has ${points[selected]} votes`}/>
        <Button 
          text="next anecdote"
          onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}
        />
        <Button 
          text="vote"
          onClick={() => setPoints(addVote(points))}
        / >
      </div>
      <div>
        <Header text="Anecdote with most votes"/>
        {
          areVotes(points).length === 0
            ? 'No anecdote has been voted for yet'
            : <Anecdote anecdote={anecdotes[indexOfHighestVote(points)]}/>
        }
      </div>
    </div>
  );
}

export default App
