import { useState } from 'react';
import LightToggle from './components/LightToggle';
import LottoNumbers from './components/LottoNumbers';
import ClickCounter from './components/ClickCounter';
import './App.css';

const App = () => {
  const [isLightsOn, setIsLightsOn] = useState<boolean>(true);
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle setIsLightsOn={setIsLightsOn} />
      <div
        style={{
          backgroundColor: isLightsOn ? 'white' : 'black',
          color: isLightsOn ? 'black' : 'white',
          padding: '20px',
          marginTop: '10px',
        }}
      >
        Lights are {isLightsOn ? 'On' : 'Off'}
      </div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers setLottoNumbers={setLottoNumbers} />
      <div className="output">{lottoNumbers.join(', ')}</div>

      <h2>Click Counter</h2>
      <ClickCounter setCount={setCount} />
      <div className="output">{count}</div>
    </div>
  );
};

export default App;
