
const firebaseConfig = {
    apiKey: "AIzaSyAAZloaQ1oCb9ejsIt3-qc1xofwbreT1GA",
    authDomain: "lets-chat-c6ae8.firebaseapp.com",
    projectId: "lets-chat-c6ae8",
    storageBucket: "lets-chat-c6ae8.appspot.com",
    messagingSenderId: "112363670611",
    appId: "1:112363670611:web:d0846286ab4e448db74aa6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - "+ Room_names);
       row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = ".html";
}

function logout()  {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
      window.location = "index.html";
}