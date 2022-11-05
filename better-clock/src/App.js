import React from 'react';
import Clock from './components/Clock.jsx';
import clockImage from './clock.png';
// import bgWave from './bgWave.png';

function App() {

  return (
    <div className="text-center">
      <h1 className='text-5xl' style={{ color: 'white', font: "Poppins", paddingBottom: '30px' }} > BETTER - CLOCK</h1>
      <h2 className='text-3xl' style={{ font: "Poppins" }}>The better, base-10 time system</h2>
      <div className='relative'>
        <img src={clockImage} alt="clock" className='mt-5 mb-5' width='30%'></img>
        <div className={`w-3 h-3 rounded-full bg-black absolute left-0 right-0 top-0 bottom-0 m-auto`}></div>
        <div id='hourhand' className={`w-[5%] h-[5px] rounded-full bg-black absolute top-[50%] left-[50%] origin-left`}></div>
        <div id='minutehand' className={`w-[10%] h-[5px] rounded-full bg-black absolute top-[50%] left-[50%] origin-left`}></div>
        <div id='secondhand' className={`w-[10%] h-[2px] rounded-full bg-black absolute top-[50%] left-[50%] origin-left`}></div>
      </div>
      <Clock />
      <h2 class='text-2xl mt-5' style={{ font: "Poppins" }}>most things in our lives from temperature to measurement are base-10. why not time?</h2>
      {/* <img src={bgWave} className='mt-5 mb-5' width='30%'></img> */}
    </div >
  );
}

export default App;
