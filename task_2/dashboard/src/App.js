import logo from './logo.jpeg';
import './App.css';
import { getFullYear, getFooterCopy} from './utils';

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
          <label for='email'>email</label>
          <input type='email' id='email' placeholder='Enter your email'/>
          <label for='password'>password</label>
          <input type='password' id='password' placeholder='Enter your password'/>
          <button type='button'>OK</button>
      </div>
      <div className='spacer'></div>
      <hr className='Horizontal-line'/>
      <div className='App-footer'>
          <p>{getFooterCopy(false)}</p>
          <p>Copyright {getFullYear()} - holberton School</p>
      </div>
    </div>
  )
}

export default App;
