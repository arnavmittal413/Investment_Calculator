import { useState } from 'react';
import Header from './components/Header'
import InvestmentForm from './components/InvestmentForm';
import ResultTable from './components/ResultTable'
function App() {
  
  const[inputHandler,setInputHandler]=useState(null);
 
  // const[results,setResults]=useState(null);
  const calculateHandler = (inputHandler) => {
    setInputHandler(inputHandler);
  };
  let yearlyData = []; 
  if(inputHandler){
    let currentSavings = inputHandler['current-savings']; 
    const yearlyContribution = inputHandler['yearly-contribution']; 
    const expectedReturn = inputHandler['expected-return'] / 100;
    const duration = inputHandler['duration'];
    
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  

  return (
    <div>
      <Header/>
    <InvestmentForm onCalculate={calculateHandler}/>  
    {!inputHandler && <p>NO DATA FOUND.</p>}
    {inputHandler && <ResultTable data={yearlyData} INITIAL_INVESTMENT={inputHandler['current-savings']}  /> }
    </div>
  );
}

export default App;
