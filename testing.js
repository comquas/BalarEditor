var handler = require (__dirname + "/modules/balarHandler.js");
var data = handler.loadFile("/Users/htainlinshwe/Downloads/API_Doc/index.html");
handler.savefile("/Users/htainlinshwe/Downloads/API_Doc/index.html","## Sample \n Save It. **OK**")