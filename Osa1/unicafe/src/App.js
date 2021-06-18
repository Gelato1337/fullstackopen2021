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
        No feedback given
      </div>
    )
  }

 

 for (var i = 0; i<clicks.length; i++) {
  var average = 0; 
   average = clicks[0] - clicks[1];
   average = average / all;
   }

  var positive = clicks[0] / all;

  return (
    <div>
    <h1>Statistics</h1>
    <p>good {props.allClicks[0]}</p>
    <p>bad {props.allClicks[1]}</p>
    <p>neutral {props.allClicks[2]}</p>
    <p>all {all}</p>
    <p>average {average}</p>
    <p>positive {positive}%</p>
    
        </div>
  )
}

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
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleBadClick}>bad</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <Statistics allClicks={[good,bad,neutral]}/>
    </div>
  )
}

export default App