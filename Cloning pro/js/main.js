$("#yandereds").click(function(){
	$("#yansub").toggleClass("show")
})

$("#tsundereds").click(function(){
	$("#tsunsub").toggleClass("show")
})

$("#lolids").click(function(){
	$("#lolisub").toggleClass("show")
})

$("#empty").hover(function(){
	$(".sgb").css("display","block")
})

$(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
});

$("#rias").click(function(){$(".bag").css("display","none");
	$("#riasd").css("display","block")
})

$("#rem").click(function(){$(".bag").css("display","none");
	$("#remd").css("display","block")
})

$("#shiro").click(function(){$(".bag").css("display","none");
	$("#shirod").css("display","block")
})

$("#mirai").click(function(){$(".bag").css("display","none");
	$("#miraid").css("display","block")
})

$("#rei").click(function(){$(".bag").css("display","none");
	$("#reid").css("display","block")
})

$("#rikka").click(function(){$(".bag").css("display","none");
	$("#rikkad").css("display","block")
})

$("#megumin").click(function(){$(".bag").css("display","none");
	$("#megumind").css("display","block")
})




$(".waifu").click(function(){$(".bag").css("display","none");
})

  

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA14YYvEKnMAKO2lFpwJKMVWOTgC9xXHio",
    authDomain: "fir-1-954bb.firebaseapp.com",
    databaseURL: "https://fir-1-954bb.firebaseio.com",
    projectId: "fir-1-954bb",
    storageBucket: "fir-1-954bb.appspot.com",
    messagingSenderId: "308979562909"
  };
  firebase.initializeApp(config);


//References messages collection

var messagesRef = firebase.database().ref("messages");

//Listen for form submit

document.getElementById("contactForm").addEventListener("submit", submitForm);

//Submit Form
function submitForm(e){
    e.preventDefault();
var name = getInputVal("name");
var company = getInputVal("company");
var email = getInputVal("email");
var phone = getInputVal("phone");
var message = getInputVal("message");
console.log(name,company);

saveMessage(name, company, email, phone, message);
document.getElementById('contactForm').reset();
}
//Get values
//Fonction to get Form values

function getInputVal(id){
    return document.getElementById(id).value;
}


// Save message

//show alert
document.querySelector('.alert').style.display = "none";

//Hide alert after 3 sec




//save message to firebase

function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
    name : name,
    company : company,
    email : email,
    phone : phone,
    message : message

    });
    setTimeout(function(){
      document.querySelector('.alert').style.display = "block";
  }, 3000);
  
}
