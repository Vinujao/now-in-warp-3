var firebaseConfig = {
      apiKey: "AIzaSyCuSuD8Pp4-UxgqPxNyqykwuobmnR266kQ",
      authDomain: "warp-1-36e0b.firebaseapp.com",
      databaseURL: "https://warp-1-36e0b-default-rtdb.firebaseio.com",
      projectId: "warp-1-36e0b",
      storageBucket: "warp-1-36e0b.appspot.com",
      messagingSenderId: "1021895001014",
      appId: "1:1021895001014:web:cf484ac91248c5804e3717"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
