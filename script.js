function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


function sendMessage() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("subject").value; // Changed ID to match HTML
  let message = document.getElementById("message").value;

  // Properly formatted HTML for the body of the email
  let body = "<p><strong>Name:</strong> " + name + "</p>" +
             "<p><strong>Email:</strong> " + email + "</p>" +
             "<p><strong>Phone:</strong> " + phone + "</p>" +
             "<p><strong>Message:</strong> " + message + "</p>";

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