'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('src'));

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log('Server is listening on http://localhost:' + PORT);
});
