import React, {useState} from 'react'

export default function Inputs({setMonthlyPayment}) {

  const [principal, setPrincipal] = useState(1000);
  const [interestRate, setInterestRate] = useState(5);
  const [term, setTerm] = useState(10);

  const handlePrincipalChange = event => {
    setPrincipal(event.target.value);
  };

  const handleInterestRateChange = event => {
    setInterestRate(event.target.value);
  };

  const handleTermChange = event => {
    setTerm(event.target.value);
  };

  const calculatePayment = event => {
    event.preventDefault();
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = term * 12;
    const numerator = monthlyRate * (1 + monthlyRate) ** numPayments;
    const denominator = (1 + monthlyRate) ** numPayments - 1;
    const monthlyPayment = (principal * numerator) / denominator;
    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <form onSubmit={calculatePayment}>
    <div>
      <label htmlFor="principal">Loan amount:</label>
      <input
        id="principal"
        type="number"
        min="0"
        step="0"
        value={principal}
        onChange={handlePrincipalChange}
      />
    </div>
    <div>
      <label htmlFor="interestRate">Interest rate:</label>
      <input
        id="interestRate"
        type="number"
        min="0"
        max="100"
        step="0.01"
        value={interestRate}
        onChange={handleInterestRateChange}
      />
    </div>
    <div>
      <label htmlFor="term">Loan term (years):</label>
      <input
        id="term"
        type="number"
        min="1"
        max="30"
        value={term}
        onChange={handleTermChange}
      />
    </div>
    <button type="submit">Calculate</button>
  </form>
  )
}
