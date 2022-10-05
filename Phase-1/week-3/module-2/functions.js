let Javascript = "Javascript"
const python = "Python"

function learningHowToCode (language) {
   // python = "css";
    let python = "css";
    let python2 = python;
    console.log(python)
    language = "test";
    console.log('We are learning '+ language);
}
learningHowToCode(Javascript);
learningHowToCode(python);

function MovieConditions (isRainy, istheMovieReleased, money){
    if(!isRainy) {
        console.log('We are going to the movies')
    } else {
        console.log('We are going to the park')
    }
}

MovieConditions(false, true, 3.00);