const firebaseConfig = {
    apiKey: "AIzaSyAWVRLRpaW-wJud-pDTpcB0h90iM8HX9XI",
    authDomain: "letschat-9aec0.firebaseapp.com",
    databaseURL: "https://letschat-9aec0-default-rtdb.firebaseio.com",
    projectId: "letschat-9aec0",
    storageBucket: "letschat-9aec0.appspot.com",
    messagingSenderId: "289406138945",
    appId: "1:289406138945:web:42f2fa03eb14d79926e4c0"
  };

  firebase.initializeApp(firebaseConfig);

  var user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function addRoom()
    {
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "letschatpage.html";
    }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  localStorage.setItem("room_name", name);
  window.location="letschatpage.html";
}