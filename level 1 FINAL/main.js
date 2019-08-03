$(document).ready(function(){
    $("#button").click(function(){
        $("#show").toggle()
    })
})
$(document).ready(function(){
    $("#button1").click(function(){
        $("#show1").toggle()
    })
})
// $(document).ready(function(){
//     $("button").click(function(){
//       $("#lol").fadeIn("slow");
//     });
//   });
//   $(document).ready(function(){
//     $("button").click(function(){
//       $("#div1").fadeOut("slow")
//     });
//   });
// $(document).ready(function(){
//     $("#try").click(function(){
//       $("#box1").animate({left: '250px'});
//     });
    //   });
function changeColor(){ 
    var color1 = document.getElementById('color1').value;
    var color2 = document.getElementById('color2').value;
    var deg = document.getElementById('deg').value;
    document.getElementById('body').style.background = "linear-gradient("+deg+"deg ,"+color1+","+color2+")"
    console.log(color1)
    console.log(color2) 
    console.log(deg)
  }
//   setTimeout(function(){
//       $(document).ready(function(){
//       document.getElementsByClassName("all")
//   },3000)
// })
// console.log(button)
$(document).ready(function(){
    $("#lool").click(function(){
        $("#gg").toggle()
    })
})