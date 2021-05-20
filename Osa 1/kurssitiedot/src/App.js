import React from 'react'
const Header = (props) => {
return (
  <div>
    <h1>
      {props.course}
    </h1>  
  </div>
)
}

const Content = ( {content} ) => {
  
  return (
<div>
  <p>
    {content.name} {content.exercises}
  </p>
</div>
  )
}

const Total = (props) => {
  
  return (
<div>
  <p>
    Number of exercises {props.total}
  </p>
</div>
  )
}

const App = () => {
  const course = { name: 'Half Stack application development',
  parts :[
     { name: 'Fundamentals of React',
                  exercises: 10 },

     { name: 'Using props to pass data',
                  exercises:  7 },

     { name: 'State of a component',
                  exercises: 14}
  ]

}

  return (
    <div>
      <Header course={course}/>
      <Content content={part1}/>
      <Content content={part2}/>
      <Content content={part3}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
  </div>
  )
}

export default App
