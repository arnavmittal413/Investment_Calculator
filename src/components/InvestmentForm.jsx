import { useState } from "react";
const InitialState = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};
function InvestmentForm(props) {
  // const[currentSaving,setCurrentSaving]=useState('');
  // const[yearlyContribution,setYearlyContribution]=useState('');
  // const[expectedReturn,setExpectedReturn]=useState('');
  // const[duration,setDuration]=useState('');
  const [inputHandler, setInputHandler] = useState(InitialState);
  function SubmitHandler(event) {
    event.preventDefault();
    props.onCalculate(inputHandler);
  }
  function ResetHandler() {
    setInputHandler(InitialState);
  }
  // function currentSaving(event){
  //     console.log(event.target.value);
  // }
  // function yearlyContribution(event){
  //     console.log(event.target.value);
  // }
  // function expectedReturn(event){
  //     console.log(event.target.value);
  // }
  // function duration(event){
  //     console.log(event.target.value);
  // }
  function inputChangeHandler(input, value) {
    setInputHandler((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
    // setInputHandler({ ...inputHandler, [input]: value }); second method best appoach
  }
  return (
    <div>
      <form onSubmit={SubmitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              onChange={(event) =>
                inputChangeHandler("current-savings", event.target.value)
              }
              value={inputHandler["current-savings"]}
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              onChange={(event) =>
                inputChangeHandler("yearly-contribution", event.target.value)
              }
              value={inputHandler["yearly-contribution"]}
              type="number"
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              onChange={(event) =>
                inputChangeHandler("expected-return", event.target.value)
              }
              value={inputHandler["expected-return"]}
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              onChange={(event) =>
                inputChangeHandler("duration", event.target.value)
              }
              value={inputHandler["duration"]}
              type="number"
              id="duration"
            />
          </p>
        </div>
        <p className="actions">
          <button onClick={ResetHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}
export default InvestmentForm;
