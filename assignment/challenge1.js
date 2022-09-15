function countTruthy(arr) {


    let truthy = (val) =>{
        if (!val == 0 || !val == false || !val == -0 || !val == 0n || !val == "" || !val ==null || !val == undefined || !val == NaN) {
            return arr.length
        }
    }

    var filtered = arr.filter(truthy)
    return filtered.length
}

module.exports = countTruthy