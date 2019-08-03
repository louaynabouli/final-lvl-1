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

//   let database = firebase.database()

//   let ref = database.ref("food-recipes")
let database = firebase.database()

let ref = database.ref("products")

ref.on("value" , getData , wrongData)

function getData(data){
    data=data.val()
    let keys = Object.keys(data)
    console.log(keys)

    keys.map(key =>{
        console.log('here',key)
        document.querySelector("#html").innerHTML += readhtml1(data[key])
        
    })
}

function readhtml1(name){
    return `
    <div class="user">
        <div class="user-data-block">
            <div class="data">
                ${name.First_Name}
            </div>
        </div>
        <div class="user-data-block">
            <div class="data">
                ${name.Second_Name}
            </div>
        </div>
        <div class="user-data-block">
            <div class="data">
                ${name.Opinion}
            </div>
        </div>
    </div>
    `
}



function wrongData(wrong){
    console.log(wrong)
}


