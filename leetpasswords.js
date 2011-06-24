function generatePasswords(){
    var hint = document.getElementsByName('hint')[0].value;
    var passwds = leetPasswords(hint);
    alert(passwds);
}
                                                 

function leetPasswords(hint){
    var mappings = new Array();
    mappings['A'] = new Array("4","/-\\","@","^","/\\","//-\\\\","/=\\");
    mappings['E'] = new Array("3","ii","(=");
    var results = [];
    var upped = hint.toUpperCase();
    for(c in upped){
        results.push(mappings[c].randElem());
    }
    return results.join(' ');
}

Array.prototype.randElem = function(){
  return this[getRandomInt(0,this.length - 1)];  
};

// Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
