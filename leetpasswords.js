function generatePasswords(){
    var hint = document.getElementsByName('hint')[0].value;
    var passwds = leetPasswords(hint,10);
    alert("Password is " + passwds);
}

function leetPasswords(hint, size){
    var results = [];
    for(var i = 0; i < size; ++i){
        results.push(leetPassword(hint));
    }
    return results;
}

function leetPassword(hint){
    var mappings = new Array();
    mappings['A'] = new Array("4","/-\\","@","^","/\\","//-\\\\","/=\\");
    mappings['E'] = new Array("3","ii","(=");
    var results = [];
    var upped = hint.toUpperCase();
    for(var i = 0; i < upped.length; ++i){
        var c = upped.charAt(i);
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
