window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
  });
  
  //javascript for responsive navigation sidebar menu
  const menuBtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");
  const navigationItems = document.querySelectorAll(".navigation a")
  const email=document.querySelectorAll(".email")


  var c=0
  menuBtn.addEventListener("click", () => {

    c++
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
    if(c%2!=0){

      document.querySelector(".brand").innerHTML="~>"
    }
    else{
      document.querySelector(".brand").innerHTML="Md Noorish Nauman"
    }
   

  });
  
  navigationItems.forEach((navigationItem) => {
    
    navigationItem.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navigation.classList.remove("active");
      document.querySelector(".brand").innerHTML="Md Noorish Nauman"
      c++
    });
   
  });
  
  //javascript for scroll to top button
  const scrollBtn = document.querySelector(".scrollToTop-btn");
  
  window.addEventListener("scroll", function(){
    scrollBtn.classList.toggle("active", window.scrollY > 500);
  });
  
  //javascript for scroll back to top on click scroll-to-top button
  scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  
  //javascript for reveal website elements on scroll
  window.addEventListener("scroll", reveal);
  
  function reveal(){
    var reveals = document.querySelectorAll(".reveal");
  
    for(var i = 0; i < reveals.length; i++){
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 50;
  
      if(revealTop < windowHeight - revealPoint){
        reveals[i].classList.add("active");
      }
    }
  }

  function sendEmail(){
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "noorezhberg@gmail.com",
      Password : "F8865D977952C1506A887AE5DC30A37D2125",
      From :  'noorezhberg@gmail.com',//username from 
      //  To: 'mdnoorishnauman@gmail.com',//prefered email addresss.
      ReplyFrom : document.getElementById("email").value,
      To : 'mdnoorishnauman@gmail.com',
      // From : document.getElementById("email").value,
      Subject : "Portfolio Message",
      Body :"emailId:  "+document.getElementById("email").value+" \n "+"Name:  "+document.getElementById("n").value+" \n "+"text: "+document.getElementById("t").value,
       
  }).then(
    message => alert("Your details has been sent")
  );
  }