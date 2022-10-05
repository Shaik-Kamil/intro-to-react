import Header from './Header';
import Footer from './Footer';
import './App.css';

//!   <></> is a fragment which we can use if we don't want to add an element to an tree,
//!   className or id can't be used in fragments <></>

const App = () => {
  return (
    <div style={{ border: '2px solid red' }}>
      <h1>App Component</h1>
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Footer />
    </div>
  );
};

export default App;
