import logo from './logo.svg';
import './App.css';
import Shop from './Components/Shop/Shop';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Shop></Shop>

      <div className='Defination'>
          <h2>How To Work React</h2>
      </div>
    </div>
  );
}

export default App;
