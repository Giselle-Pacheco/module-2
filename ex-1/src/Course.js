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

  var totalAmount=props.parts.reduce(function(sum,partof){
    return sum+partof.exercises
  },0)


  return(
    <div>
      <p>
        <b>total of {totalAmount} exercises</b>
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

