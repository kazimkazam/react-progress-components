# react-progress-components

> Simple to use React progress bars

[![NPM](https://img.shields.io/npm/v/react-progress-components.svg)](https://www.npmjs.com/package/react-progress-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

You can check the available loading spinners on the link below:



## Install

```bash
npm install react-progress-components
```

or 

```bash
yarn add react-progress-components
```

## Usage

There is a total of 4 types of progress bars available: 

- TopBar; 
- BottomBar;
- Circle;
- Line.

TopBar and BottomBar will automatically fill the top and bottom of the div they are inserted on, respectively.

In case a prop is not provided to the component, a default value will be assumed.

#### The possible values for each prop are the following (check on the examples which props each Progress Bar type accepts):

- type: String - 'topBar', 'bottomBar', 'circle'and 'line'. Default: 'topBar'
- method: String - 'auto', 'manual'. Default: 'auto'
- progress: any number 0-100. Default: 5
- colors: array of 3 strings with the 3 colors to be used. Default: [ 'rgba(14,24,95,1)', 'rgba(0,255,209,1)', 'rgba(49,225,247,1)' ]
- size: number. Default: 100
- height: string with the desired height for the bar. The value can be given with any units, i.e., px, rem... Default: '20px'
- trackColor: string with the color. Default: '#ddd'
- progressColor: string with the color. Default: 'blue'
- shape: string with the format, either 'round' or 'square'. Default: 'round'
- textFont: string with the font. Default: 'Arial'
- textColor: string with the color. Default: 'white

### TopBar

```jsx
import React from 'react';

import { ProgressBarComponent } from 'react-progress-components';

const Example = () => {
  return(
    <ProgressBarComponent type={ 'topBar' } method={ 'auto' } progress={ 5 } colors={ ['blue', 'yellow', 'red'] } height={ '2rem' } />
  );
};
```

### BottomBar

```jsx
import React from 'react';

import { ProgressBarComponent } from 'react-progress-components';

const Example = () => {
  return(
    <ProgressBarComponent type={ 'bottomBar' } method={ 'auto' } progress={ 5 } colors={ ['blue', 'yellow', 'red'] } height={ '2rem' } />
  );
};
```

### Circle

```jsx
import React from 'react';

import { ProgressBarComponent } from 'react-progress-components';

const Example = () => {
  return(
    <ProgressBarComponent type={ 'circle' } method={ 'auto' } trackColor={ '#ddd' } progressColor={ '#00FFD1' } textFont={ 'Arial' } size={ 200 } progress={ 5 } />
  );
};
```

### Line

```jsx
import React from 'react';

import { ProgressBarComponent } from 'react-progress-components';

const Example = () => {
  return(
    <ProgressBarComponent type={ 'line' } method={ 'auto' } trackColor={ '#ddd' } shape={ 'round' } progressColor={ 'red' } textFont={ 'Arial' } textColor={ 'white' } size={ 500 } progress={ 5 } />
  );
};
```

### Difference between using props method 'auto' or 'manual'

When using method 'auto', the component will automatically update its progress until it is close to 100% and stop, e.g., 90 or 95%, and then the user can replace the component with a new one with the progress equal to 100% when a condition of their choice occurs.

Check the following examples for more clarification:


#### Using 'auto'

```jsx
import React from 'react';

import { ProgressBarComponent } from 'react-progress-components';

const Example = () => {
  if (!condition) {
    return(
      <ProgressBarComponent type={ 'topBar' } method={ 'auto' } progress={ 5 } colors={ ['blue', 'yellow', 'red'] } height={ '2rem' } />
    )
  } else {
    return(
      <ProgressBarComponent type={ 'topBar' } method={ 'auto' } progress={ 100 } colors={ ['blue', 'yellow', 'red'] } height={ '2rem' } />
    )
  };
};
```

#### Using 'manual'

```jsx
import React, { useEffect, useState } from 'react';

import { ProgressBarComponent } from 'react-progress-components';

const Example = () => {
  const [progress, setProgress] = useState(5);

  useEffect(() => {
    if (condition) {
      setProgress(newValueOfYourChoice)
    };
  })

  return(
    <ProgressBarComponent type={ 'topBar' } method={ 'auto' } progress={ progress } colors={ ['blue', 'yellow', 'red'] } height={ '2rem' } />
  )
};
```

## Author

[kazimkazam](https://github.com/kazimkazam)

## Repository

[@Github](https://github.com/kazimkazam/react-progress-components)

[@npm](https://www.npmjs.com/package/react-progress-components)

## License

MIT © [kazimkazam](https://github.com/kazimkazam)
