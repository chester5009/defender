var keys = {
    'W' : 87,
    'A' : 65,
    'S' : 83,
    'D' : 68
};

var keyDown = 0;

var setKey = function(keyCode){
    keyDown = keyCode;
};

var isKeyDown=function(keyName){
    return keyDown == keys[keyName];
};

window.onload=function(){
    
    window.onkeydown = function(e){
        console.log(e.keyCode);
    }
}
