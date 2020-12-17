//function sincrona

function sumNumbers(){
    let result = 1 + 1

    if (result = 2){
        sucessCallback()
    } else {
        errorCallback()
    }
}

function sucessCallback(){
    console.log("Yeah! Number 2!")
}

function errorCallback(){
    console.log("Oops! Somenthing wrong.")
}

sumNumbers();