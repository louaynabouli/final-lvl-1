document.querySelector("#product-form").addEventListener("submit" , function(e){
    e.preventDefault()
    submitProduct()
})
 var firebaseConfig = {
    apiKey: "AIzaSyAnFmOt5e--Y9PYHxdmQ9-fQ22uuyTFr1I",
    authDomain: "food-recipies-4c153.firebaseapp.com",
    databaseURL: "https://food-recipies-4c153.firebaseio.com",
    projectId: "food-recipies-4c153",
    storageBucket: "",
    messagingSenderId: "670461058638",
    appId: "1:670461058638:web:95536b1178b4c1e6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let database = firebase.database()

  let ref = database.ref("products")

  function submitProduct(){
      let data = {
          First_Name : document.querySelector("#First").value ,
          Second_Name : document.querySelector("#Second").value ,
          Opinion : document.querySelector("#Opinion").value
      }
      ref.push(data)
  }