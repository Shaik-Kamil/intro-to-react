//! import packages
//! import Components use import ... from
//! import Css

//? helper functions import ... from
import Main from './Main';
import './OldApp.css';

const num1 = 3;
const num2 = 7;

// curly brackets signify Js inside JSX

function sum(x, y) {
  return x + y;
}

const name = {
  fName: 'Shaik',
  lName: 'Kamil',
};
function App() {
  return (
    <div className="App">
      <h1
        className="appHeader"
        style={{ color: 'blue', backgroundColor: 'yellow' }}
      >
        Pursuit App Template
      </h1>
      {name.fName} {name.lName}
      <p style={{ border: '1px solid black', height: '100px' }}>
        {num1 + num2}
      </p>
      <p> {sum(num1, num2)}</p>
      <Main />
    </div>
  );
}

export default OldApp;
