
function getGrade(mark) {
    if (isNaN(mark) || mark < 0 || mark > 100) {
        return;
    }
    let grade;
    if (mark>=79 && mark<=100) {
        return ("Grade A")
    }
    else if (mark >60 && mark >= 79) {
        return ('Grade B')
    }
    else if (mark >49 && mark >= 59) {
        return ('Grade C')
    }
    else if (mark >40 && mark >= 49) {
        return ('Grade D')
    }
    else if (mark >0 && mark >= 40) {
        return ('Grade E')
    }else{

        return"Invalid Score"
    }
    }
console.log(getGrade(50))