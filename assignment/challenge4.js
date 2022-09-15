function calculateGrade(marks) {
     let totalStudent = marks.length
     let sum = 0
     for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
        
     }
     let averageScore = parseInt(sum / totalStudent)

     if (averageScore <= 49) {
        return 'F'
     }
     else if (averageScore > 49 && averageScore <=59){
         return 'E'
     }
     else if (averageScore > 59 && averageScore <=69){
        return 'D'
     }
     else if (averageScore > 69 && averageScore <=79){
        return 'C'
     }
     else if (averageScore > 79 && averageScore <=89){
        return 'B'
     }
     else if (averageScore > 89 && averageScore <= 100){
        return 'A'
     }

 }

 module.exports = calculateGrade 