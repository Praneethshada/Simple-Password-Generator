function generatePassword() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;

    // Generate password with specified format
    const password = generateFormattedPassword(firstName, lastName, dob);

    // Redirect to password display page
    window.location.href = `password.html?password=${encodeURIComponent(password)}`;
}

function generateFormattedPassword(firstName, lastName, dob) {
    const nameSubstring = randomSubstring(firstName + lastName, 5);

    const specialCharacters = '!@#$%^&*()_+';
    const randomSpecialCharacter = randomCharacter(specialCharacters);

    const dobDigits = randomDigits(extractDigits(dob), 2);

    const password = nameSubstring + randomSpecialCharacter + dobDigits;

    return password.slice(0, 8);
}

function extractDigits(text) {
    // Extract digits from the given text
    return text.replace(/\D/g, '');
}

function randomSubstring(text, length) {
    const startIndex = Math.floor(Math.random() * (text.length - length + 1));
    return text.substr(startIndex, length);
}

function randomCharacter(text) {
    const randomIndex = Math.floor(Math.random() * text.length);
    return text.charAt(randomIndex);
}

function randomDigits(text, count) {
    const digits = text.replace(/\D/g, '');
    const selectedDigits = randomSubstring(digits, count);
    return selectedDigits.padEnd(count, '0');
}