# RedDetector
Simple Loop Manager

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/project-simple-red-looper.png)](https://npmjs.org/package/project-simple-red-looper)

github - [here](https://github.com/project-simple/RedDetector)

# Install 
#### npm 
```npm
npm install project-simple-red-looper --save-dev
```
#### browser
```html
<script src="https://project-simple.github.io/RedDetector/src/RedDetector.js"></script>
<script>
   RedDetector.addMainLoop('testMainLoop1',function(){ console.log('testMainLoop1')});
   RedDetector.addMainLoop('testMainLoop1',function(){ console.log('testMainLoop1')});
   // The registered loop is executed every frame.
</script>
```

# Run Cycle
```
per frame
|--> run beforeLoops
|----> run mainLoops
|------> run afterLoops

```

# API

#### RedDetector.addMainLoop(key:String, handler:Function)
* Usage is the same for addBeforeLoop and addAfterLoop.
```javascript
RedDetector.addMainLoop( 'test', function(){ console.log('test1' ) });
```
* "key" do not allow duplicates in individual loop lists.
```javascript
RedDetector.addMainLoop( 'testKey', function(){ }); // ok
RedDetector.addMainLoop( 'testKey', function(){ }); // fail - already defined key!!
// individual loop area
RedDetector.addBeforeLoop( 'key_test', function(){ }); // ok
RedDetector.addMainLoop( 'key_test', function(){ }); // ok
RedDetector.addAfterLoop( 'key_test', function(){ }); // ok
RedDetector.addBeforeLoop( 'key_test', function(){ }); // fail
RedDetector.addMainLoop( 'key_test', function(){ }); // fail
RedDetector.addAfterLoop( 'key_test', function(){ }); // fail
```

#### RedDetector.getMainLoop(key)
* Usage is the same for getBeforeLoop and getAfterLoop.
```javascript
var getTest = function(){};
RedDetector.addMainLoop( 'getTest', getTest);
console.log( RedDetector.getMainLoop( 'getTest') == getTest); // true
```

#### RedDetector.getMainLoopList()
* Usage is the same for getBeforeLoopList and getAfterLoopList.
```javascript
var getTest1 = function(){};
console.log( RedDetector.getMainLoopList()); // []
console.log( RedDetector.getMainLoopList().length); // 0
RedDetector.addMainLoop( 'getTest1', getTest1);
console.log( RedDetector.getMainLoopList()); // [getTest1]
console.log( RedDetector.getMainLoopList().length); // 1 
```

#### RedDetector.hasMainLoop(key)
* Usage is the same for hasBeforeLoop and hasAfterLoop.
```javascript
RedDetector.addMainLoop( 'hasTest', function(){});
console.log( RedDetector.hasMainLoop( 'hasTest')); // true
console.log( RedDetector.hasMainLoop( 'noHasTest')); // false
```

#### RedDetector.delMainLoop(key)
* Usage is the same for delBeforeLoop and delAfterLoop.
```javascript
RedDetector.addMainLoop( 'delTest', function(){});
console.log( RedDetector.hasMainLoop( 'delTest')); // true
RedDetector.delMainLoop( 'delTest');
console.log( RedDetector.hasMainLoop( 'delTest')); // false
```
#### RedDetector.delAll()
```javascript
RedDetector.addBeforeLoop( 'delBeforeTest', function(){});
RedDetector.addMainLoop( 'delMainTest', function(){});
RedDetector.addAfterLoop( 'delAfterTest', function(){});
console.log( RedDetector.hasBeforeLoop( 'delBeforeTest')); // true
console.log( RedDetector.hasMainLoop( 'delMainTest')); // true
console.log( RedDetector.hasAfterLoop( 'delAfterTest')); // true
RedDetector.delAll();
console.log( RedDetector.hasBeforeLoop( 'delBeforeTest')); // false
console.log( RedDetector.hasMainLoop( 'delMainTest')); // false
console.log( RedDetector.hasAfterLoop( 'delAfterTest')); // false
```
