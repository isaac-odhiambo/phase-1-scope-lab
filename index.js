// Declare customerName in the global scope and set it to 'bob'
var customerName = 'bob';

// Function to convert customerName to uppercase
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set bestCustomer to 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function to overwrite the value of bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant leastFavoriteCustomer
const leastFavoriteCustomer = 'some initial value';

// Function to try and change leastFavoriteCustomer (should throw an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; // This will throw an error because leastFavoriteCustomer is a const
}
