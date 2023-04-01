function receivesAFunction(callback){
    return callback();
}

function spy(){
    return "miammm"
}
receivesAFunction(spy);

function returnsANamedFunction(){
    return function fn(){
        
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        
    }
}
