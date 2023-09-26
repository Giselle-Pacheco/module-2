import React from 'react'
import ReactDOM from 'react-dom'
import Course from './Course'

const App = ({ course }) => {
  return (
    <div>
      <Course course={course}/>
      
    </div>
  )
}

export default App