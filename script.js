// Update contributions here
let contributions = [50, 20, 4];

let goalAmount = 500;

function updateValues() {
	document.getElementById("amount-raised").innerHTML = sumContributions(contributions);
	document.getElementById("total-backers").innerHTML = contributions.length;
  updateProgressBar();
}

let donationAmount = 0;
function sumContributions(contributions){
  for (let i = 0; i < contributions.length; i++) {
    donationAmount += contributions[i];
    //console.log(donationAmount);
  } 
  return donationAmount;
}

// Update progress bar
function updateProgressBar(){
  const donationBarProgress = document.getElementById('donation-progress');
  let newPercentage = String((donationAmount / goalAmount) * 100);
  console.log(newPercentage);
  donationBarProgress.style.width = `${newPercentage}%`;
}




