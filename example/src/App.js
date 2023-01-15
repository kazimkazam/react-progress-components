import React from 'react';

import { ProgressBarComponent } from 'react-progress-components';
import 'react-progress-components/dist/index.css';

const App = () => {
  return <ProgressBarComponent type={ 'line' } method={ 'auto' } trackColor={ '#ddd' } shape={ 'round' } progressColor={ 'red' } textFont={ 'Arial' } textColor={ 'white' } size={ 500 } progress={ 5 } />
};

export default App;
