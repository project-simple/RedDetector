# RedDetector
Simple Loop Manager

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/project-simple-red-detector.png)](https://npmjs.org/package/project-simple-red-detector)

github - [here](https://github.com/project-simple/RedDetector)

# Install 
#### npm 
```npm
npm install project-simple-red-detector --save-dev
```
#### browser
```html
<script src="https://project-simple.github.io/RedDetector/RedDetector.js"></script>
<script>
    console.log(RedDetector.device) // 'pc' or 'mobile' or 'tablet' 
</script>
```


# API

#### RedDetector.device
-return ```pc``` or ```mobile``` or ```tablet```
```javascript
console.log(RedDetector.device);
```

#### RedDetector.isMobile
- return ```true``` or ```false```
```javascript
console.log(RedDetector.isMobile);
```

#### RedDetector.browser
- return ```ie```, ```edge```, ```firefox```, ```chrome```, ```safari```, ```opera```, ```naver```, ```whale```
```javascript
console.log(RedDetector.browser);
```

#### RedDetector.browserVer
- return current browser version number
```javascript
console.log(RedDetector.browserVer);
```

#### RedDetector.os
- return ```win```, ```mac```, ```unix```, ```linux```, ```android```, ```iphone``` ,```ipad```
```javascript
console.log(RedDetector.os);
```

#### RedDetector.osVer
- return current os version number
```javascript
console.log(RedDetector.osVer);
```


#### RedDetector.down
- desktop : return ```mousedown```
- mobile : return ```touchstart```
```javascript
console.log(RedDetector.down);
```

#### RedDetector.move
- desktop : return ```mousemove```
- mobile : return ```touchmove```
```javascript
console.log(RedDetector.move);
```

#### RedDetector.up
- desktop : return ```mouseup```
- mobile : return ```touchend```
```javascript
console.log(RedDetector.up);
```


#### RedDetector.over
- desktop, mobile : return ```mouseover```
```javascript
console.log(RedDetector.over);
```

#### RedDetector.out
- desktop, mobile : return ```mouseout```
```javascript
console.log(RedDetector.up);
```