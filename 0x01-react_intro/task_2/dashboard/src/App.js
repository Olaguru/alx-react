import logo from './logo.jpeg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className='App'>
    <header className='App-header'>
      <img src={logo} alt='holberton-logo'></img>
      <h1>School dashboard</h1>
    </header>

    <hr className='Horizontal-line'></hr>
    <body className='App-body'>
      <p>Login to access the full dashboard</p>
    </body>
    
    <hr className='Horizontal-line'></hr>
    
    <footer className='App-footer'>
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </footer>
    </div>
   
  );
}

export default App;
