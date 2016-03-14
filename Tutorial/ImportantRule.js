function alwaysThrows(){
    throw new Error("OH NOES");
}

function interate(val){
    return val + 1;
}
new Promise(function(fulfill, reject){
    return Q.fcall(function(){
        return 10;
    })
}).then(console.log);