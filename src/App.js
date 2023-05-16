import React, {useState} from 'react';
import './App.css';
import Input from './components/Inputs.js'
import Outputs from './components/Outputs';

function App() {
  const [monthlyPayment, setMonthlyPayment] = useState('');

  return (
    <div>
      <h1>Loan Calculator</h1>
      <Input setMonthlyPayment={setMonthlyPayment}/>
      <br/>
      <Outputs monthlyPayment={monthlyPayment}/>
    </div>
  );
}

export default App;
