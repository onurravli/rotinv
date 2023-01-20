## rotinv

Republic of Turkey identity number validator.

### Usage

#### Validate ID Number

```js
const rotinv = require('rotinv');
rotinv.ValidateId(11111111111); // returns false
```

#### Validate Name

```js
const rotinv = require('rotinv');
rotinv.ValidateName('Onur Ravli'); // returns true
rotinv.ValidateName('On2ur Ravli@'); // returns false
```

### License

MIT License. For more details, look [license.md](./license.md) file.
