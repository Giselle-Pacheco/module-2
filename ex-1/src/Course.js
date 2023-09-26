import React from 'react'

const Header=(props)=>{
  return(
    <div>
        <h1>{props.header}</h1> 
    </div>
  )
}

const Content = ( {parts} ) => {
  return (
    <div>
    <p><Part part={parts[0]}/></p>
    <p> <Part part={parts[1]}/></p>
    <p> <Part part={parts[2]}/></p>
    <p><Part part={parts[3]}/></p>
    </div>
  )
}

const Total=(props)=>{

  const result=props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises+props.parts[3].exercises
  // console.log(result)
  return(
    <div>
      <p>
        <b>total of {result} exercises</b>
      </p>
    </div>

  )
}


const Part = (props) => {
  console.log(props.part.name)
  return(
  <div>
    {props.part.name} {props.part.exercises}
  </div>
  )
}


const Course = ({ course }) => {
  return (
    <div>
      <Header header={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />

    </div>
  );
};

export default Course;

