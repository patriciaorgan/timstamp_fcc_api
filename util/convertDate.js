'use strict'
var strftime = require("strftime");

function convertDate(input){
    var obj = { UNIX: null, Natural: null }
    
    var d = new Date(isNaN(Number(input)) ? input : Number(input));
    var isNatural = strftime('%B %d, %Y', d); // => April 28, 2011
    
    if (isNatural !== "Invalid Date" && !isNaN(d) ? true : false) {
        obj.UNIX = d.getTime();
        obj.Natural = isNatural;
    }
  
     return obj;
}

module.exports = convertDate;