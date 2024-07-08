


function sentMail(){
    var params ={
        to_name : document.getElementById("to_name").value,
        
        from_name :document.getElementById("from_name").value,
        message :document.getElementById("message").value ,
        
    }

   if( params.to_name != "" && params.from_name != "" && params.message != ""){
             //ser-key                  temp-key
  emailjs.send("service_nd4a7ok","template_fpam1d8",params ).then(function(res){
    alert("Thank for the message")
  })}else{
    alert("Fill the form")
  }
   document.getElementById("to_name").value=''
        
  document.getElementById("from_name").value=''
  document.getElementById("message").value =''
  }






  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('mobile-menu-btn').addEventListener('click', function () {
  var mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});


var mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
mobileMenuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
      var mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.add('hidden');
  });
});

