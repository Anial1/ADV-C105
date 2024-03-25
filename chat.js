
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



