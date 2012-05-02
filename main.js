var express = require('express'),
    fs      = require('fs');


var main_server = express.createServer(),
    domain = process.argv[2];

if (!domain) { console.log("need to pass in the domain \"node <domain>\""); return }


var getvhost = function(dirname) {
  return dirname + "." + domain;
}

fs.readdir(__dirname + '/vhosts', function(err, files) {
  if (err) { return err; }
  for (var i in files) {
    console.log("adding "+getvhost(files[i]));
    main_server.use(
      express.vhost(
        getvhost(files[i]), require(__dirname + "/vhosts/" + files[i] ).app
    ));
  }
  main_server.listen(80);
});
  
