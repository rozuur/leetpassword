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
    mappings['B'] = new Array('8', ']3', ']8', '|3', '|8', ']]3', '13');
    mappings['C'] = new Array('(', '{' , '[', '<', '€');
    mappings['D'] = new Array(')', '[}', '|)', '|}', '|>', '[>', ']]');
    mappings['E'] = new Array("3","ii","(=");
    mappings['F'] = new Array('|=', '(=', ']]=', 'ph');
    mappings['G'] = new Array('6', '9', '(_>', '[[6', '&');
    mappings['H'] = new Array('#', '|-|', '(-)', ')-(', '}{', '}-{', '{-}', '/-/', '\\-\\', '|~|', '[]-[]', ']]-[[', '+');
    mappings['I'] = new Array('1', '!', '|', '][', '[]');  
    mappings['J'] = new Array('_|', 'u|', ';_[]', ';_[[');
    mappings['K'] = new Array('|<', '|{', '][<', ']]<', '[]<');
    mappings['L'] = new Array('|', '1', '|_', '[]_', '][_', '\xa3');
    mappings['M'] = new Array('/\\/\\', '|\\/|', '[\\/]', '(\\/)', '/V\\', '[]V[]', '\\\\\\', '(T)', '^^', '.\\\\', '//.', '][\\\\//][', 'JVL');
    mappings['N'] = new Array('/\\/', '|\\|', '(\\)', '/|/', '[\\]', '{\\}', '][\\][', '[]\\[]', '~');
    mappings['O'] = new Array('0', '()', '[]', '<>', '*', '[[]]');
    mappings['P'] = new Array('|D', '|*', '|>', '[]D', '][D');
    mappings['Q'] = new Array('(,)' , '0,' , 'O,' , 'O\\', '[]\\');
    mappings['R'] = new Array('|2', '|?', '|-', ']]2 []2 ][2');
    mappings['S'] = new Array('5', '$', '\x9a');
    mappings['T'] = new Array('7', '+', "']'", '7`', '~|~', '-|-', "']['", '"|"', '\x86');
    mappings['U'] = new Array('(_)', '|_|', '\\_\\', '/_/', '\\_/', '[]_[]', ']_[', '\xb5');
    mappings['V'] = new Array('\\/', '\\\\//', 'v');
    mappings['W'] = new Array('\\/\\/', '|/\\|', '[/\\]', '(/\\)', 'VV', '///', '\\^/', '\\\\/\\//', '1/\\/', '\\/1/', '1/1/');
    mappings['X'] = new Array('><', '}{', ')(', '}[');
    mappings['Y'] = new Array("'/", '%', '`/', '\\j', '``//', '\xa5', 'j', '\\|/', '-/');
    mappings['Z'] = new Array('2', 'z', '7_', '`/_');  

    var results = [];
    var upped = hint.toUpperCase();
    var repeated = concatIfSmall(upped);
    for(var i = 0; i < repeated.length; ++i){
        var c = repeated.charAt(i);
        results.push(mappings[c].randElem());
    }
    return results.join(' ');
}

function concatIfSmall(value){
    var res = value;
    while(res.length < 5){
        res += value;
    }
    return res;
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
