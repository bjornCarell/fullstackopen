import { Header } from './components/Header';
import { Content } from './components/Content';
import { Total } from './components/Totatl';

const App = ()  => {
  const course = 'Half Stack application development';

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    }, {
      name: 'Using props to pass data',
      exercises: 7
    }, {
      name: 'State of a component',
      exercises: 14
    }
  ];

  const totalExercises = parts.reduce((acc, {exercises}) => acc + exercises, 0);

  return (
    <div>
      <Header text={course}/>
      {
        parts.map(({name, exercises}) => (
          <Content name={name} exercises={exercises} />
        ))
      }
      <Total number={totalExercises}/>
    </div>
  );
}

export default App;
