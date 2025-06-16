// Remove existing main element
const main = document.getElementById('main');
main.remove();

// Create new h1 element
const newHeader = document.createElement('h1');

// Set id to "victory"
newHeader.id = 'victory';

// Set content
newHeader.textContent = 'Danbradley is the champion';

// Append to body
document.body.append(newHeader);
