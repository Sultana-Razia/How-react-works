// import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device'
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App" style={{ border: '2px solid black', margin: '20px' }}>
      <Device name="iphone" price="130000"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
