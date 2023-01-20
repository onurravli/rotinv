## tr-id

Republic of Turkey identity number validator.

### Usage

#### Validate ID Number

```js
const trid = require('tr-id');
trid.ValidateId(11111111111); // returns false
```

#### Validate Name

```js
const trid = require('tr-id');
trid.ValidateName('Onur Ravli'); // returns true
trid.ValidateName('On2ur Ravli@'); // returns false
```

### License

MIT License. For more details, look [license.md](./license.md) file.
