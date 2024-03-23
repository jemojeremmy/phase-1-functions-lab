// Code your solution in this file!
// helpers.js

// Function to calculate distance in blocks from the headquarters
function distanceFromHqInBlocks(street) {
    return Math.abs(street - 42);
  }
  
  // Function to calculate distance in feet from the headquarters
  function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264; // Assuming 1 block = 264 feet
  }
  
  // Function to calculate distance travelled in feet
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264; // Assuming 1 block = 264 feet
  }
  
  // Function to calculate fare price
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // $25 for distances over 2000 feet
    } else {
      return 'cannot travel that far'; // Limit exceeded
    }
  }
  
 
  