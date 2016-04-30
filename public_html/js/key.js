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

var clearKey = function(){
    keyDown=0;
};

var isKeyDown=function(keyName){
    return keyDown == keys[keyName];
};

var gameEngine=function(){
    
    if(typeof engine=='function'){
        engine();
    }
    else
        console.log("Not found engine");
    console.log(typeof(engine));
    requestAnimationFrame(gameEngine);
};


window.onload=function(){
    
    window.onkeydown = function(e){
        setKey(e.keyCode);
    }
    
    window.onkeyup = function(e){
        clearKey();
    }
    
    gameEngine();
}
