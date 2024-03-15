// HEADER COMPONENT
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

//PARTS COMPONENT
const Part = (props) => {
  return (
    <>
      <p>{props.name} {props.exercices}</p>
    </>
  )
}

// CONTENT COMPONENT
const Content = (props) => {
  return (
    <>
      <Part name={props.parts[0].name} exercices={props.parts[0].exercices} />
      <Part name={props.parts[1].name} exercices={props.parts[1].exercices} />
      <Part name={props.parts[2].name} exercices={props.parts[2].exercices} />

    </>
  )
}

// TOTAL COMPONENT
const Total = (props) => {
  return (
    <>
      <p>Number of exercises
        {props.parts[0].exercices
          + props.parts[1].exercices
          + props.parts[2].exercices}
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { name: 'Fundamentals of React', exercices: 10 },
    { name: 'Using props to pass data', exercices: 7 },
    { name: 'State of a component', exercices: 14 }
  ]


  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

export default App
