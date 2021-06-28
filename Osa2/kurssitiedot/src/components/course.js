import { part } from 'file-loader'
import React from 'react'

const Course = ({course}) => {
    return (
        <div>
        <Header course={course}/>
        <Content course={course}/>
        <Total course={course}/>
    </div>
    )
}

const Header = ({course}) => {
    return (
      <div>
        <h1>
          {course.name}
        </h1>  
      </div>
    )
    }
    
    const Content = ({course}) => {
        const parts = course.parts
        console.log(course.parts)

    
      return (
        <div>
          <p>
             {parts.map(part => 
                <li key={part.id}>
                 {part.name} {part.exercises}   
                </li>)}
                        
          </p>
        </div>
          ) 
    }
    
    const Total = (props) => {
      
      return (
    <div>
      <p>
        Number of exercises {props.course.parts[0].exercises +props.course.parts[1].exercises +props.course.parts[2].exercises} 
      </p>
    </div>
      )
    }


    export default Course