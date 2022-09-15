function sumMix(arr) {
    let newArr = []
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let newnum = parseInt(element)
        newArr.push(newnum)

    }
    for (let i = 0; i< newArr.length; i++) {
      sum += newArr[i];
       
    }
    return sum

}
module.exports = sumMix