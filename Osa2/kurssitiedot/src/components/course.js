
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
        <h2>
          {course.name}
        </h2>  
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
    
    const Total = ({course}) => {

      const Redux = course.parts.reduce( (s, p) => {
        console.log('what is happening', s, p)
        console.log(s, p)
        return s+p.exercises
        },0)
      
      return (
    <div>
      
        <h3>Total of {Redux} exercises</h3>

      
    </div>
      )
    }


    export default Course