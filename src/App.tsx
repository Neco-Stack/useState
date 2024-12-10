import Form from './components/form/form';
import './App.css'
import Counter from './components/counter/counter';
import FAQ from './components/faq/faq';
import DayNightToggle from './components/daynight/daynight';


function App() {

  return (
  <div className='App'>
    <h1>Meine React-Anwendungen</h1>
    <Form />
    <Counter />
    <FAQ />
    < DayNightToggle/>

  </div>
  )
}

export default App
