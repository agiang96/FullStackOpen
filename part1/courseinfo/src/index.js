import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  
  return (
    <div>
      <Header course={course} />
      <Content part={parts}/>
      <Total exercises={parts}/>
    </div>
  )
}

const Header = (props) => {
    return (
      <>
        <h1>{props.course}</h1>
      </>
    )
  }

// part.map( for each value of part, put the part component in partArr array)
const Content = (props) => {
  const partArr = props.part.map( value => <Part part={value} /> )
    return (
      <>
        {partArr}
      </>
    )
}

//props.exercises.map( for each value of props.exercise => get the value of exercises)
const Total = (props) => {
  let sumOfEx = 0;
  const exercises = props.exercises.map(value => {
    sumOfEx += value.exercises; // to ge the Total
    return 0; //must return something because it's a function 
  })
  console.log(exercises)
  return (
    <>
      <p>Number of exercises {sumOfEx}</p>
    </>
  )
}

const Part = (props) => {
  return (
    
      <p> {props.part.name} {props.part.exercises}</p>
      )
}

ReactDOM.render(<App />, document.getElementById('root'))