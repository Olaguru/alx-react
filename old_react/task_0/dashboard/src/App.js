import logo from './logo.jpeg';
import './App.css';

function App(){
  return (
    <div>
      <div className='App-header'>
          <img src={logo} alt='Holberton logo'/>
          <h1>School dashboard</h1>
      </div>
      <hr className='Horizontal-line'/>
      <div className='App-body'>
          <p>Login to access the full dashboard</p>
          
      </div>
      <div className='spacer'></div>
      <hr className='Horizontal-line'/>
      <div className='App-footer'>
          <p>Copyright 2020 - holberton School</p>
      </div>
    </div>
  )
}

export default App;