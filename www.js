#!/usr/bin/env node
var app = require('./index');

app.set('port', 9000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});