const currentLocation = window.location.pathname; 
const navlinks = document.querySelectorAll('nav a').
forEach(links => {
  if(links.href.includes(`${currentLocation}`)){
    links.classList.add('active')
  }
})

//======   FUNCTIONALITY    ==========

let btn = document.querySelector(".generate_button");
let qr_code = document.querySelector(".qr_code");


btn.addEventListener("click", ()=>{
  let email_input = document.querySelector("#emailInput");
  let email_subject = document.querySelector("#emailSubject");
  let message_field = document.querySelector("#messageField");


  if(email_input.value && email_subject.value && message_field.value !=  "" ){ // checks if any of the inputs is empty 
    
      if(qr_code.childElementCount == 0) {
         // check if a qr-code already exists
        generate(email_input,email_subject,message_field);
      } else {
        qr_code.innerHTML = "";// if a qr-code exists set it to empty
      }

  }else{
    document.querySelector(".error").style="";
    setTimeout(() =>{
      document.querySelector(".error").innerHTML = "Invalid Input"
    },1000)
    
  }
  
})

const generate = (email_input, email_subject, message_field) => {
    document.querySelector(".error").style ='display: none;' 

    let qrCode = new QRCode(qr_code, {
      text:`${email_input}`,
      text: `${email_subject}`,
      text: `${message_field}`,
      width: 120,
      height: 120,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H

    });   

    let download = document.querySelector(".jpg");
    // qr_code.appendChild(download);

    let download_link = document.querySelector(".jpg");
    download_link.setAttribute("download", "qr_code.png");
    // download_link.innerHTML =`Download`;

    // download.appendChild(download_link);

    let qr_code_img = document.querySelector(".qr_code img")
    let qr_code_canvas = document.querySelector("canvas")

    if(qr_code_img.getAttribute("src") == null){
      setTimeout(()=>{
        download_link.setAttribute("href", `${qr_code_canvas.toDataURL()}`)
      }, 300)
    }else{
      setTimeout(() => {
        download_link.setAttribute("href", `${qr_code_img.getAttribute("src")}`)
      },300)
    }
     
    
}
 