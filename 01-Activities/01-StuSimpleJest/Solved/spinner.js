function spinner(array = ["red", "green", "blue"]){
    return array[Math.floor(Math.random()*array.length)]
}

module.exports= spinner;