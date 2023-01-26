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

There is a total of 2 types of progress bars available: 

- Circle;
- Line.

In case a prop is not provided to the component, the Circle progress bar will be returned by default.

#### The possible values for each prop are the following:

- type: String - 'circle'and 'line'. Default: 'circle'
- method: String - 'auto', 'manual'. Default: 'auto'
- trackColor: String with the color. Default: '#ddd'
- progressColor: String with the color. Default: 'blue'
- size: Number. Circle and Line progress bars have a minimum size. Circle minimum size = 50px, and Line minimum size = 200px
- textFont: String with the font. Default: 'Arial'
- textColor: String with the color. Only valid for type Line. You can use 'transparent' if you do not want the text to appear. Default: 'white'. When using progress bar type Line, if its size is less than 400px, the text color will be by default transparent.
- shape: String with the format, either 'round' or 'square'. Only valid for type Line. Default: 'round'
- progress: Number ranging 0-100. Default: 5

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
    );
  } else {
    return(
      <ProgressBarComponent type={ 'topBar' } method={ 'auto' } progress={ 100 } colors={ ['blue', 'yellow', 'red'] } height={ '2rem' } />
    );
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
    if (progress >= 0 && progress < 100) {
      setTimeout(() => {
        setProgress(progress + 5);
      }, 250);
    };
  });

  return(
    <ProgressBarComponent type={ 'topBar' } method={ 'manual' } progress={ progress } colors={ ['blue', 'yellow', 'red'] } height={ '2rem' } />
  );
};
```

## Author

[@kazimkazam](https://github.com/kazimkazam)

## Repository

[@Github](https://github.com/kazimkazam/react-progress-components)

[@npm](https://www.npmjs.com/package/react-progress-components)

## License

MIT © [kazimkazam](https://github.com/kazimkazam)
