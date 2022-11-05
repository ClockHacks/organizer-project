import React from 'react';
import Clock from './components/Clock.jsx';
import clockImage from './clock.png';

function App() {
  return (
    <body className="h-screen pt-3 bg-gradient-to-b from-green-200 to-green-500">
      <div className="text-center">
        <h1 className='text-5xl' style={{ color: '#8fa35f', font: "Poppins", paddingBottom: '15px' }} > BETTER - CLOCK</h1>
        <h2 className='text-3xl'>the better, base-10 time system</h2>
        <div className='relative'>
          <img src={clockImage} alt="clock" className='relative' width='30%'></img>
        </div>
        <Clock />
        <h2 class='text-2xl mt-5'>most things in our lives from temperature to measurement are base-10. why not time?</h2>
      </div>
    </body >
  );
}

export default App;
