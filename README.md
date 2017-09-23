# Oh My Lib

This is a library of Javascript functions created with the purpose of practicing my Javascript skills and putting into practice some less used techniques. Therefore, not all functions are done in a way that has the best possible performance because they may have been done by focusing on a specific approach for study purposes.

## Lists functions

### each

Called to execute some passed function over all elements of a passed list without return any result.

**Input**: (*list*, *callback function*)
**Output**: *undefined*

```javascript
each([1,2,3], (value) => { console.log(value) });
```
