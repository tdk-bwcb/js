// Function to generate a random hex color code
const generateHexCode = function () {
    let color = '#';
    const hexCharacters = '0123456789ABCDEF';
  
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * 16); // Fixed range (0 to 15)
      color += hexCharacters[randomIndex];
    }
  
    return color;
  };
  
  // Global variable to hold the interval ID
  let intervalId;
  
  // Reference to the "start" button
  const startButton = document.getElementById('start');
  
  // Function to start changing the background color
  const startColorChange = function () {
    // Function to update the background color
    const updateBackgroundColor = function () {
      document.body.style.backgroundColor = generateHexCode();
    };
  
    // Only start the interval if it's not already running
    if (!intervalId) {
      intervalId = setInterval(updateBackgroundColor, 300);
    }
  };
  
  // Attach click event listener to the "start" button
  startButton.addEventListener('click', startColorChange);
  
  // Reference to the "stop" button
  const stopButton = document.getElementById('stop');
  
  // Function to stop changing the background color
  const stopColorChange = function () {
    clearInterval(intervalId); // Clear the interval
    intervalId = null; // Reset the interval ID
    // document.body.style.backgroundColor = "black"
    // sets black background
  };
  
  // Attach click event listener to the "stop" button
  stopButton.addEventListener('click', stopColorChange);
  