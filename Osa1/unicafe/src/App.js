import React, { useState } from 'react'

const Statistics = (props) => {
  console.log(props)
  const clicks = props.allClicks
   var all = 0;
 
  for (var i = 0; i<props.allClicks.length; i++) {
    all = all + props.allClicks[i] 
  }
  console.log(all)

  if(all === 0 ) {
    return (
      <div>
        <p></p>
        No feedback given
      </div>
    )
  }

 

 for (var j = 0; j<clicks.length; j++) {
  var average = 0; 
   average = clicks[0] - clicks[1];
   average = average / all;
   }

  var positive = clicks[0] / all;

  return (
    <div>
    <h1>Statistics</h1>
    <table>
        <tbody>
    <StatisticsLine value={props.allClicks[0]} text='good'/>
    <StatisticsLine value={props.allClicks[1]} text='bad'/>
    <StatisticsLine value={props.allClicks[2]} text='neutral'/>
    <StatisticsLine value={all} text='all'/>
    <StatisticsLine value={average.toFixed(2)} text='average'/>
    <StatisticsLine value={positive.toFixed(2) + '%'} text='positive'/>
    </tbody>
       </table>
        </div>
  )
}
const StatisticsLine = ({value, text}) =>
 (<tr><td>{text + ' '}</td> 
      <td>{value}</td></tr>)
 


const Button = ({ handleClick, text }) => 
(  <button onClick={handleClick}>    
  {text}  
</button>)





const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handleGoodClick = () => {
    setGood(good + 1)
    
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    
  }
  
  
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleBadClick} text='bad' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Statistics allClicks={[good,bad,neutral]}/>
    </div>
  )
}

export default App