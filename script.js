


function sayHello (firstName, hour) { // Déclaration fonction et du 2ème paramètre
    let message = 'Bonjour '// Décla' variable message
    message += firstName; // ajout du paramètre firstName à message

    // Ajout de la condition 
    if (hour >= 18) {
        console.log('Bonsoir ' + firstName + '!');         
    } else { 
        console.log(message + '!'); // // Sinon, afficher 'Bonjour Beyonce !'
    }

}

sayHello("Beyonce", 19); // Appel de la fonction et définition du paramètre FirstName