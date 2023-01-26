import React, { useEffect, useState } from "react";

import { ProgressBarComponent } from 'react-progress-components';
import 'react-progress-components/dist/index.css';

const App = () => {
  const [ progress, setProgress ] = useState(5);

  useEffect(() => {
    if (progress >= 0 && progress < 100) {
      setTimeout(() => {
        setProgress(progress + 5);
      }, 250);
    };
  });

  return (
    <div className="App">
      <div className='content'>
        <div className='card'>
          <p>Card 1</p>
          <ProgressBarComponent type={ 'circle' } trackColor={ '#ddd' } progressColor={ '#00FFD1' } size={ 50 } textFont={ 'Arial' } progress={ progress } />
        </div>

        <div className='card'>
          <p>Card 2</p>
          <ProgressBarComponent type={ 'line' } trackColor={ '#ddd' } progressColor={ 'red' } size={ 400 } textFont={ 'Arial' } textColor={ 'white' } shape={ 'round' } progress={ progress } />
        </div>
      </div>
    </div>
  );

};

export default App;
