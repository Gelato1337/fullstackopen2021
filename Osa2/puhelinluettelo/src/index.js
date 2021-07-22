import ReactDOM from 'react-dom'
import App from './App'

const persons = [
  { 
    name: 'Arto Hellas',
    number: '040 123 3453'
  },

  {
    name: 'Martti XD',
    number: '045 545 3546'
  }
]


ReactDOM.render(
  <App persons={persons} />, 
  document.getElementById('root')
)