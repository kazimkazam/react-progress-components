import React from 'react'

import { ProgressBarComponent } from 'react-progress-components'
import 'react-progress-components/dist/index.css'

const App = () => {
  // return(
  //   <div className='App'>
  //     <ProgressBarComponent type={ 'circle' } method={ 'auto' } trackColor={ '#ddd' } progressColor={ '#00FFD1' } textFont={ 'Arial' } size={ 200 } progress={ 5 } />
  //   </div>
  // );
  // return <ProgressBarComponent type={ 'line' } method={ 'auto' } trackColor={ '#ddd' } shape={ 'round' } progressColor={ 'red' } textFont={ 'Arial' } textColor={ 'white' } size={ 500 } progress={ 5 } />
  return <ProgressBarComponent type={ 'topBar' } method={ 'auto' } progress={ 5 } colors={ ['blue', 'yellow', 'red'] } height={ '2rem' } />
  // return <ProgressBarComponent type={ 'bottomBar' } method={ 'auto' } progress={ 5 } colors={ ['blue', 'yellow', 'red'] } height={ 20 } />
}

export default App
