// Your code here
function mapToNegativize(nums) {
    let array = []
    for (let i = 0; i < nums.length; i++){
        array.push(nums[i] * -1)
    }
    return array
}   

function mapToNoChange(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i])
    }
    return newArray
}

function mapToDouble(array){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i] * 2)
    }
    return newArray
}


function mapToSquare(array){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i] ** 2)
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i] 
    }
    return total
}
function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++){
        if (!src[i]) return false
    }
    return true
}

function reduceToAnyTrue(src){
    for (let i = 0; i < src.length; i++){
        if (src[i]) return true
    }
    return false
}