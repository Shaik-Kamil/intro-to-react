//import packages
//import Components
//import
import Main from './Main';
import './App.css';

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
      <h1 style={{ color: 'blue', backgroundColor: 'yellow' }}>
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

export default App;
