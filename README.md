# Oh My Lib

This is a library of Javascript functions created with the purpose of practicing my Javascript skills and putting into practice some less used techniques. Therefore, not all functions are done in a way that has the best possible performance because they may have been done by focusing on a specific approach for study purposes.

## Lists functions

### each

Called to execute some passed function over all elements of a passed list without return any result.

**Input**: (*list*, *function*)  
**Output**: *undefined*

```javascript
each([1,2,3], (value) => { console.log(value) });
```

### extractProperty

Called to get the value of a property with the given name of all elements of a passed list.

**Input**: (*list*, *string*)  
**Output**: *list*

```javascript
const list = [
  { a: 1, b: 2, c: 3 },
  { a: 4, b: 5, c: 6 },
  { a: 7, b: 8, c: 9 },
  { a: 10, b: 11, c: 12 },
  { a: 13, b: 14, c: 15 }
];
const result = lib.extractProperty(list, 'b');

//result == [2,5,8,11,14]
```

### max

Called to biggest between two passed values.

**Input**: (*number/string*, *number/string*)  
**Output**: *number/string*

```javascript
const result = max(5, 2);

//result == 5
```

### maxOfList

Called to get the biggest value between the values of a passed list.

**Input**: (*list*)  
**Output**: *number/string*

```javascript
const result = lib.maxOfList([5,10,2,9]);

//result == 10
```

### maxOfProperty

Called to get the biggest value of a passed property from a passed list of objects.

**Input**: (*list*, *string*)  
**Output**: *number/string*

```javascript
const result = maxOfProperty([
  { age: 20 },
  { age: 25 },
  { age: 10 },
  { age: 40 }
], 'age');

//result == 40
```
