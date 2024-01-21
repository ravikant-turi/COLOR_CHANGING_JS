 const getColor=()=>{
      let randomNumber=Math.floor(Math.random()*16777215);
      randomCode="#"+randomNumber.toString(16);
      // console.log(randomNumber);
      document.body.style.backgroundColor=randomCode;

    //   document.getElementById("para").innerHTML=randomCode;
      document.getElementsByClassName(".pp").innerHTML=randomCode;
      document.querySelector(".pp").innerHTML=randomCode;
    
 }
 let btn=document.querySelector("#btn");
 btn.addEventListener("click",getColor)
//  console.log(btn);
 getColor();
