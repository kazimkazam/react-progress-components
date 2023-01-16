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
      <ProgressBarComponent type={ 'topBar' } method={ 'manual' } progress={ progress } height={ '1.5rem' } />

      <div className='content'>
        <div className='card'>
          <p>Card 1</p>
          <ProgressBarComponent type={ 'circle' } method={ 'manual' } trackColor={ '#ddd' } progressColor={ '#00FFD1' } textFont={ 'Arial' } size={ 200 } progress={ progress } />
        </div>

        <div className='card'>
          <p>Card 2</p>
          <ProgressBarComponent type={ 'line' } method={ 'manual' } trackColor={ '#ddd' } shape={ 'round' } progressColor={ 'red' } textFont={ 'Arial' } textColor={ 'white' } size={ 500 } progress={ progress } />
        </div>
      </div>
    </div>
  );

};

export default App;
