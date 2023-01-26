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

#### The possible values for each prop are the following:

- type: String - 'circle'and 'line'. Default: 'circle'
- trackColor: String with the color. Default: '#ddd'
- progressColor: String with the color. Default: 'blue'
- size: Number. Circle and Line progress bars have a minimum size. Circle minimum size = 50px, and Line minimum size = 200px
- textFont: String with the font. Default: 'Arial'
- textColor: String with the color. Only valid for type Line. You can use 'transparent' if you do not want the text to appear. Default: 'white'. When using progress bar type Line, if its size is less than 400px, the text color will be by default transparent.
- shape: String with the format, either 'round' or 'square'. Only valid for type Line. Default: 'round'
- progress: Number ranging 0-100. Default: 5

Default values will be used in case the respective prop is not provided to the component.

## Examples

### Circle

```jsx
import React from 'react';

import { ProgressBarComponent } from 'react-progress-components';

const Example = () => {
  const [progress, setProgress] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      setProgress(progress + 5);
    }, 250);
  });

  return(
    <ProgressBarComponent type={ 'circle' } trackColor={ '#ddd' } progressColor={ '#00FFD1' } textFont={ 'Arial' } size={ 200 } progress={ progress } />
  );
};
```

### Line

```jsx
import React from 'react';

import { ProgressBarComponent } from 'react-progress-components';

const Example = () => {
  const [progress, setProgress] = useState(5);

  useEffect(() => {
    useEffect(() => {
      setTimeout(() => {
        setProgress(progress + 5);
      }, 250);
    });
  });

  return(
    <ProgressBarComponent type={ 'line' } trackColor={ '#ddd' } shape={ 'round' } progressColor={ 'red' } textFont={ 'Arial' } textColor={ 'white' } size={ 500 } progress={ progress } />
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
