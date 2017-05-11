<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>GETTING STARTED WITH BRACKETS</title>
    </head>
    <body>
    
    <label for="email">Email : </label>
    <input id="email" type="text"><br><br>
    <label for="email">Password : </label>
    <input id="pwd" type="text"><br><br>
    <input id="logIn" type="submit" value="Login">
    <input id="signUp" type="submit" value="Sign up">
    <input id="logOut" type="submit" value="Log out">
        
    <pre id="object"></pre>
        
    <ul id="list">
    </ul>
    
    <script src="https://www.gstatic.com/firebasejs/3.9.0/firebase.js"></script>
    <script>
      // Initialize Firebase
		var config = {
			apiKey: "AIzaSyBQ8f73QsDqkHsm3MiJsexJ69kh9kwx8eo",
			authDomain: "first-firebase-c138f.firebaseapp.com",
			databaseURL: "https://first-firebase-c138f.firebaseio.com",
			projectId: "first-firebase-c138f",
			storageBucket: "first-firebase-c138f.appspot.com",
			messagingSenderId: "861006904812"
		};
      firebase.initializeApp(config);
      const txtEmail = document.getElementById('email');
      const textPassword = document.getElementById('pwd');
      const btnLogin = document.getElementById('logIn');
      const btnSignUp = document.getElementById('signUp');
      const btnLogout = document.getElementById('logOut');
      const ulList = document.getElementById('list');
    
      btnLogin.addEventListener('click', a => {
          const email = txtEmail.value;
          const pass = textPassword.value;
          const auth = firebase.auth();
          
          const promise = auth.signInWithEmailAndPassword(email, pass);
          promise.catch(a => console.log(a.message));
      });
      
      btnSignUp.addEventListener('click', a => {
          const email = txtEmail.value;
          const pass = textPassword.value;
          const auth = firebase.auth();
          
          const promise = auth.createUserWithEmailAndPassword(email, pass);
          promise.catch(a => console.log(a.message));
      });
        
      btnLogout.addEventListener('click', a => {
         firebase.auth().signOut(); 
      });    
        
      firebase.auth().onAuthStateChanged(firebaseUser => {
          if(firebaseUser) {
              console.log(firebaseUser);
          } else {
              console.log('not logged in');
          }
      });
        
      const preObject = document.getElementById('object');    
      const dbRefObject = firebase.database().ref().child('object');
      const dbRefList = dbRefObject.child('child');
    
      dbRefObject.on('value', snap => {
          preObject.innerText = JSON.stringify(snap.val(), null, 3)
      });
        
      dbRefList.on('child_added', snap => {
          const li = document.createElement('li');
          li.innerText = snap.val();
          li.id = snap.key;
          ulList.appendChild(li);
      });    
        
      dbRefList.on('child_changed', snap => {
          const liChanged = document.getElementById(snap.key);
          liChanged.innerText = snap.val();
      });
        
      dbRefList.on('child_removed', snap => {
          const liToRemove = document.getElementById(snap.key);
          liToRemove.remove();
      });
        
      dbRefList.child('1').set({
         lastname: "Lee",
         firstname: "Kang"
      });
        
    </script>
    </body>
</html>