
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCAt80XJKdP4g83uR_joW1YHqvSIoPfLcw",
      authDomain: "project-94-52d0f.firebaseapp.com",
      databaseURL: "https://project-94-52d0f-default-rtdb.firebaseio.com",
      projectId: "project-94-52d0f",
      storageBucket: "project-94-52d0f.appspot.com",
      messagingSenderId: "749281386795",
      appId: "1:749281386795:web:9d2272de710b20454d656e"
    };

    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("username");
     document.getElementById("welcome_user_name").innerHTML = "welcome" + user_name ;
      
     function addRoom()
     {
      Room_names = document.getElementById("room_name").value;
      localStorage.setItem("room_name",Room_names);
      window.location = "kwitter_page.html";
      firebase.database().ref("/").child(Room_names).update({
            purpose : "Kwitter"
     });

     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
