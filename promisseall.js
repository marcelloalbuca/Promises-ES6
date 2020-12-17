var promise = Promise.resolve(3)
var promise2 = Promise.resolve(4)
var promise3 = Promise.resolve(4)

Promise.all([
    promise,
    promise2,
    promise3
]).then(function (value) {
    
})