function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

// 
function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    
    
    let body = "Name :" + name + "</br> E-mail :" + email + "</br> Subject :" + subject + "</br> Message :"+ message

    Email.send({
        SecureToken :"ce895eed-26fd-4fd3-a7b3-20036bf7197f",
        Password : "482AE971BE4C9D61FEC11A563AA97A75326F",
        To : 'prathameshma1@gmail.com',
        From : "prathameshma1@gmail.com",
        Subject : "Message From Contact From",
        Body : body
    }).then(
      message => alert(message)
    );
  }