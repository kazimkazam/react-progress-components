import React from 'react';

import { ProgressBarComponent } from 'react-progress-components';
import 'react-progress-components/dist/index.css';

const App = () => {
  return <ProgressBarComponent type={ 'topBar' } method={ 'auto' } progress={ 5 } colors={ ['blue', 'yellow', 'red'] } height={ '2rem' } />
};

export default App;
