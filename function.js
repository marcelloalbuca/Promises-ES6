const betterDeveloper = 'vanessa'

function whoIsBetterCallback(callback, errorCallback){
    if(betterDeveloper != 'vanessa' && betterDeveloper != 'gabriel'){
        errorCallback({
            name: 'this is wrong',
            message: betterDeveloper + '? Really'
        })
    } else {
        callback({
            name: betterDeveloper,
            message: 'CDFs are the best!'
        })
    }
}

whoIsBetterCallback((result) => {
    console.log(result.name + '? Yeah! ' + result.message)
}, (error) =>{
    console.log(error.name + ' ' + error.message)
})
