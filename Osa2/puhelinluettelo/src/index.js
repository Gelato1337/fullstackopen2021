import ReactDOM from 'react-dom'
import App from './App'

const persons = [
  { 
    id: 1,
    name: 'Arto Hellas'
  },
  {
    id:2,
    name: 'Martti XD'
  }
]


ReactDOM.render(
  <App persons={persons} />, 
  document.getElementById('root')
)