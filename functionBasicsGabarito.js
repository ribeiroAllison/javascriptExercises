// EXERCÍCIO 1:

const colorMessage = (favoriteColor, shirtColor) => favoriteColor === shirtColor ? 'The shirt is your favorite color!' : 'That is a nice color.';

//EXERCÍCIO2 2:

const isEven = num => num % 2 === 0 ? true : false;

//EXERCÍCIO 3:

function numberDigits(x){
    if(x >= 0 && x <=9){
        return `One digit: ${x}`;
    } else if(x >=10 && x<=99){
        return `Two digits: ${x}`;
    } else{
        return `The number is: ${x}`;
    }
}