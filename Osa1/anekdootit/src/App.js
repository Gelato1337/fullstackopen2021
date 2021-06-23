import React, { useState } from 'react'



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  
 
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0})
  const [mostVotes, setMostVotes] = useState(0)
  
  
  const handleNextAnecdote = () => {
    
    setSelected(Math.floor(Math.random() * anecdotes.length))
    console.log(selected)
    
        
  }
  

  const handleVoteAnecdote = () => {
    

    
    let points = {...votes}

    points[selected] +=1
    setVotes(points);

    if (points[selected] > points[mostVotes]) {
      setMostVotes(selected)
    }
    console.log(mostVotes)
    console.log(votes)

  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      
      {anecdotes[selected]}
     <p></p>
     has {votes[selected]} votes
     <p></p>
      <Button handleClick={handleNextAnecdote} text='Next anecdote'/>
      <Button handleClick={handleVoteAnecdote} text='Vote'  />
      <p></p>
      <h1>Anecdote with the most votes</h1>
      {anecdotes[mostVotes]}
      
      <p></p>
      has {votes[mostVotes]} votes
      <p></p>
      
    </div>
  )
}








const Button = ({ handleClick, text }) => 
(  <button onClick={handleClick}>    
  {text}  
</button>)
export default App