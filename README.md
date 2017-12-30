# SheetDB JavaScript Client

JavaScript Library for accessing google spreadsheet content via SheetDB. https://sheetdb.io

# Installation

The SheetDB JS Library is available through npm

```
npm install sheetdb-js --save
```

### Test spreadsheet

At any time you can play with our test API here: https://sheetdb.io/api/v1/58f61be4dda40

You can also go to Google Sheets and play with it: https://docs.google.com/spreadsheets/u/2/d/1mrsgBk4IAdSs8Ask5H1z3bWYDlPTKplDIU_FzyktrGk/edit **The spreadsheet resets every hour.**

### Basic usage

In order to instantiate SheetDB connection you need to give an api id. You can find it in [SheetDB Dashboard](https://sheetdb.io).

**ES6:**

```js
import SheetDB from 'sheetdb-js'

SheetDB.read('https://sheetdb.io/api/v1/58f61be4dda40', {}).then(function(result){
  console.log(result);
}, function(error){
  console.log(error);
});
```

**or require method**

```js
require('sheetdb-js');

SheetDB.read('https://sheetdb.io/api/v1/58f61be4dda40', {}).then(function(result){
  console.log(result);
}, function(error){
  console.log(error);
});
```

If you don't use any boundler you can import a script from our servers like so:

```html
<script src="//sheetdb.io/api/js"></script>
<script>
SheetDB.read('https://sheetdb.io/api/v1/58f61be4dda40', {}).then(function(result){
  console.log(result);
}, function(error){
  console.log(error);
});
</script>
```

There is also Pen you can play with: https://codepen.io/sheetdb/pen/qpmodo

### Search

```html
<script src="//sheetdb.io/api/js"></script>
<script>
SheetDB.read('https://sheetdb.io/api/v1/58f61be4dda40', { search: { age: 24 } }).then(function(result){
  console.log(result);
}, function(error){
  console.log(error);
});
</script>
```

### Multiple spreadsheets

```html
<script src="//sheetdb.io/api/js"></script>
<script>
SheetDB.read('https://sheetdb.io/api/v1/58f61be4dda40', { sheet: 'Sheet2', search: { score: 41 } }).then(function(result){
  console.log(result);
}, function(error){
  console.log(error);
});
</script>
```

### Create new rows

```html
<script src="//sheetdb.io/api/js"></script>
<script>
SheetDB.write('https://sheetdb.io/api/v1/58f61be4dda40', { sheet: 'Sheet2', data: {player: 'Test', score: 41} }).then(function(result){
  console.log(result);
}, function(error){
  console.log(error);
});
</script>
```
