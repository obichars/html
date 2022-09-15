function fizzBuzz(input){
        let fizz = input % 3 == 0;
        let buzz = input % 5 == 0;
        let fizzbuzz = fizz && buzz;
        if(fizzbuzz){
            return "fizzBuzz"
        }
        else if (fizz){
            return "fizz"
        }
        else if(buzz){
            return 'buzz'
        }

        else if(!fizzbuzz){
            return input
        }
}


module.exports = fizzBuzz