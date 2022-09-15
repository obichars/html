function filterList(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (typeof element == "number"){
            newArr.push(element)
        }

    }
    return newArr
 }

 module.exports = filterList