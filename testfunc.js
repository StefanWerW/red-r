var parsePodcast = require('node-podcast-parser');
console.log("here");
parsePodcast('http://jovemnerd.com.br/categoria/nerdcast/feed/', function(err, data){
  if (err) {
    console.error(err);
    msg.error = err;
    return msg;
  }
  console.log(data);
  msg.payload = data;
  return msg;
});
