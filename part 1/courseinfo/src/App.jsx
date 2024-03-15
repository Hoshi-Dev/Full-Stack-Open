// HEADER COMPONENT
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

// CONTENT COMPONENT
const Content = (props) => {
  return (
    <>
      <p>
        {props.parts[0].part1} {props.exercices[0].exercices1}
      </p>
      <p>
        {props.parts[1].part2} {props.exercices[1].exercices2}
      </p>
      <p>
        {props.parts[2].part3} {props.exercices[2].exercices3}
      </p>
    </>
  )
}

// TOTAL COMPONENT
const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercices[0].exercices1
        + props.exercices[1].exercices2
        + props.exercices[2].exercices3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { part1: 'Fundamentals of React' },
    { part2: 'Using props to pass data' },
    { part3: 'State of a component' }
  ]
  const exercices = [
    { exercices1: 10 },
    { exercices2: 7 },
    { exercices3: 14 }
  ]

  return (
    <>
      <Header course={course} />
      <Content parts={parts} exercices={exercices} />
      <Total exercices={exercices} />
    </>
  )
}

export default App
