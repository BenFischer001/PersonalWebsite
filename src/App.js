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
        <div className='infoCards'>
          <InfoCard title={'Tagging Specialist'} points={['point 1','point 2','point 3']}/>
          <InfoCard title={'Front End Developer'} points={['point 1','point 2','point 3']}/>
          <InfoCard title={'Data Analyst'} points={['point 1','point 2','point 3']}/>
        </div>
    </div>
  );
}

export default App;
