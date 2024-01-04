import Nav from './Components/Nav';
import Title from './Components/Title';
import Line from './Components/Line';
import InfoCard from './Components/InfoCard';

import './App.css';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Title title={'Good Morning'} underText={'tag line'}/>
        <Line/>
        <Title title={'About Me'}/>
        <InfoCard title={'Tagging Specialist'}/>
        <InfoCard title={'Front End Developer'}/>
        <InfoCard title={'Data Analyst'}/>
    </div>
  );
}

export default App;
