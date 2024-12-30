const firebaseConfig = {
    apiKey: "AIzaSyDC_SDJu8jCnigABsgLBR_JWd-Y7j8x2BI",
    authDomain: "qatargoldvalley.firebaseapp.com",
    databaseURL: "https://qatargoldvalley-default-rtdb.firebaseio.com",
    projectId: "qatargoldvalley",
    storageBucket: "qatargoldvalley.firebasestorage.app",
    messagingSenderId: "854867089811",
    appId: "1:854867089811:web:7c2ad25c8b99473dfa7066"
  };

  // initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var enquiryFormDB = firebase.database().ref("enquiryForm");

document.getElementById("enquiryForm").addEventListener("submit", enquiryForm);

function enquiryForm(e) {
    e.preventDefault();

    // Get form values
    var name = getElementVal("name");
    var number = getElementVal("number");
    var zone = getElementVal("zone");
    var streetandbuilding = getElementVal("streetandbuilding");

    // Save the form data
    saveQuery(name, number, zone, streetandbuilding);

    // Show the popup
    showPopup();

    // Reset the form
    document.getElementById("enquiryForm").reset();
}

const saveQuery = (name, number, zone, streetandbuilding) => {
    var newenquiryForm = enquiryFormDB.push();

    newenquiryForm.set({
        name: name,
        number: number,
        zone: zone,
        streetandbuilding: streetandbuilding,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};

// Function to show the popup
function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

// Function to close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function formatPhoneNumber(input) {
    // Get the current value of the input
    let value = input.value;
    
    // If it doesn't start with a '+' symbol, add it
    if (value.charAt(0) !== '+') {
        input.value = '+' + value.replace(/\D/g, '');
    } else {
        // Only allow numbers after the '+' symbol
        input.value = '+' + value.replace(/[^0-9]/g, '');
    }
}