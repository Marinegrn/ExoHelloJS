// Déclaration des 2 variables
let message = 'Bonjour ';
let firstName = 'Beyonce';

message += firstName + ' !'; // Concaténation de message et First Name
console.log(message);


function sayHello (firstName, hour) { // Déclaration fonction et du 2ème paramètre
    let message = 'Bonjour '// Décla' variable message
    message += firstName; // concaténation du paramètre firstName et message

    // Ajout de la condition 
    if (hour >= 18) {
        console.log('Bonsoir ' + firstName + '!');         
    } else { 
        console.log(message + '!'); // // Sinon, afficher 'Bonjour Beyonce !'
    }

}

sayHello("Beyonce", 19); // Appel de la fonction et définition du paramètre FirstName