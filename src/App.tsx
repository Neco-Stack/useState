import Form from './components/form/form';
import './App.css'
import Counter from './components/counter/counter';
import FAQ from './components/faq/faq';
import DayNightToggle from './components/daynight/daynight';
import { useState } from 'react';


function App() {
  const [isNightMode, setIsNightMode] = useState(false);
  const toggleMode = () => {
    setIsNightMode(!isNightMode);
  }

  return (
  <div className='App'>
    <h1>Meine React-Anwendungen</h1>
    <DayNightToggle toggleMode= {toggleMode}/>
    <Form />
    <Counter />
    <FAQ />
  </div>
  )
}

export default App
