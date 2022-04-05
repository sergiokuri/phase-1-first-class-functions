function play(){
    console.log ("I'm the function being called back")
}

function receivesAFunction(play) {
    play();
}


function returnsANamedFunction (){
    
    return function namedfunction(){
        console.log("Im the named function")
    };

};

function returnsAnAnonymousFunction (){

   return function (){
        console.log("anonymous!")
    }
}