import Nav from './Components/Nav';
import Title from './Components/Title';
import Line from './Components/Line';

import './App.css';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Title title={'Good Morning'} underText={'tag line'}/>
        <Line/>
        <Title title={'About Me'}/>
    </div>
  );
}

export default App;
