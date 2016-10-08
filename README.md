# Load Gulp Aliases

Create gulp tasks & sequences from aliases

## Installation

```
npm i load-gulp-aliases --save-dev
```

## Example Usage

Inside your `gulpfile.js`:

```js
const gulp = require('gulp');

const aliases = {
	default: [ 'task1' ],
	task1: [ 'task:sync-a', 'task:sync-b', 'task:sync-c']
}

require('load-gulp-aliases')(gulp, aliases);
```

You can also map parallel & synchronous tasks together using objects & arrays:

```
  parallel: [
  	[ 'task:parallel-a', 'task:parallel-b' ]
  ],
  mixture: [
  	'task:sync-a',
     [
     	'task:parallel-a',
     	'task:parallel-b'
     ],
     'task:sync-b',
     'task:sync-c'
    ]
```
