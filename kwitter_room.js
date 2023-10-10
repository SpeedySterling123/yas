
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqLO6USnL8uHczp6NnZ1BabCswFEQxNdQ",
  authDomain: "kwitter-4f53f.firebaseapp.com",
  databaseURL: "https://kwitter-4f53f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kwitter-4f53f",
  storageBucket: "kwitter-4f53f.appspot.com",
  messagingSenderId: "634397420433",
  appId: "1:634397420433:web:ce76d332f9b78fa5ce4830"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-" + Room_names);
row="<div class='room_name' id="+Room_names+" onclick=redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
  room_name=document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
    });

    localStorage.setItem("room_name",room_name);

    window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}