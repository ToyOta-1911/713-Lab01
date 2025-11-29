let Word:string = "Hello, "
// Example usage:

function myRepeatingFunction(): void {
    Word += "world! "
  console.log(Word);
  // Add any other logic you want to execute here
}

// Start the interval
const intervalId: number = setInterval(myRepeatingFunction, 3000);

// To stop the interval later, you can use clearInterval()
// For example, to stop it after 10 seconds:
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped after 10 seconds.");
}, 10000);
