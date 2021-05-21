function openLogin() {
    document.getElementById("idlogin").style.left = 0;
    document.getElementById("getStarted-img-none").style.display= "none";

    // document.getElementById("grey-background").style.display = "block";
    // document.getElementById("grey-background").style.zIndex = 5;
  }
  
  function closeLogin() {
    document.getElementById("idlogin").style.left = "-50%";
    document.getElementById("getStarted-img-none").style.display = "block";

    // document.getElementById("grey-background").style.display = "none";
    // document.getElementById("grey-background").style.zIndex = 0;
  }

  function openPhoneLogin(){
    document.getElementById("idphoneLogin").style.left = 0;
  }

  function closePhoneLogin(){
    document.getElementById("idphoneLogin").style.left = "-50%";
  }