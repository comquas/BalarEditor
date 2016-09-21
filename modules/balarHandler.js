exports.loadFile = function(filepath) {
  
  var fs = require('fs');
  var cheerio = require('cheerio');
  var html = fs.readFileSync(filepath,'utf8');
  var $ = cheerio.load(html);
  var markdown = $("#content").text()
  return markdown;
  
}

exports.savefile = function (filepath,markdown) {
  var fs = require('fs');
  var cheerio = require('cheerio');
  var html = fs.readFileSync(filepath,'utf8');
  var $ = cheerio.load(html);
  $("#content").html("{{REPLACE_TEXT}}");
  var newData = $.html();
  newData = newData.replace("{{REPLACE_TEXT}}",markdown);
  fs.writeFileSync(filepath,newData);
}