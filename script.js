// Calculate Tip
calculateTip = () => {
  let billAmt = document.getElementById('billAmount').value;
  let serviceQuality = document.getElementById('serviceQuality').value;
  let numOfPeople = document.getElementById('peopleAmount').value;

  let total = (billAmt * serviceQuality) / numOfPeople;
  // Round to two decimal places
  total = Math.round(total * 100) / 100;
  // display two digits after the decimal point
  total = total.toFixed(2);
  
  // Display the tip
  document.getElementById('totalTip').style.display = 'block';
  document.getElementById('tip').innerHTML = total;
  
  // Validate input
  if (billAmt === '' || serviceQuality == 0) {
    alert('Please enter values');
    return;
  }
  
  // Check to see if this input is empty or less than or equal to 1
  if (numOfPeople === 1 || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById('each').style.display = 'none';
  } else {
    document.getElementById('each').style.display = 'block';
  }
}

// Click to call function
document.getElementById('calculate').onclick = () => {
  calculateTip();
}

// Hide the tip amount on load
document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display = 'none';


