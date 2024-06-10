
let headerLeft = document.querySelector(".header__left");
let headerRight = document.querySelector(".header__right");
let headerInfo = document.querySelector(".header__info");
let btn = document.querySelector(".header__button");
btn.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  headerLeft.classList.toggle("active");
  headerRight.classList.toggle("active");
  headerInfo.classList.toggle("active");
});

window.addEventListener(
  "resize",
  function (event) {
    widthCur = document.body.clientWidth;
    console.log(widthCur);
    if (widthCur > 768) {
      btn.classList.remove("active");
      headerLeft.classList.remove("active");
      headerRight.classList.remove("active");
      headerInfo.classList.remove("active");
    }
  },
  true
);

document.querySelectorAll("#openTelegram").forEach((i) =>
  i.addEventListener("click", function (event) {
    const telegramUsername = "evrookna_germes_bot"; // Замените на необходимый username
    const appLink = `tg://resolve?domain=${telegramUsername}`;
    const webLink = `https://web.telegram.org/a/#7063673396`;

    const now = Date.now();
    const timeout = 2500;

    const openApp = () => {
      setTimeout(() => {
        window.location = appLink;
      }, 1000);

      setTimeout(() => {
        if (Date.now() - now < timeout + 100) {
          window.open(webLink, "_blank");
        }
      }, timeout);
    };
    event.preventDefault();
    openApp();
  })
);



document.addEventListener("DOMContentLoaded", () => {
  var modal = document.getElementById("myModal");
  var modal2 = document.getElementById("myModal2");
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };



  let openWorks=document.getElementById('open-works')
  openWorks.addEventListener('click',(event)=>{
    console.log(window.location.href)
    modal2.style.display = "block";
  })
  var span2 = document.getElementsByClassName("close2")[0];
  span2.onclick = function () {
    modal2.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  window.onclick = function (event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  };

  document
    .getElementById("my-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      modal.style.display = "block";

      const botToken = '7454845896:AAH7DGjZOslTXY-2nycbSVstzW72alLk9vk'; // Замените на ваш токен
      const chatId = '-4265072874'; // Замените на ID вашего чата или пользователя


      let city = event.target.querySelector("#city").value;
      let name = event.target.querySelector("#name").value;
      let phone ='8'+ event.target.querySelector("#phone").value;
      message="Город: "+city+"\nИмя: "+name+"\nТелефон: "+phone
      const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
      console.log(message)
      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              chat_id: chatId,
              text: message
          })
      })
      .then(response => response.json())
      .then(data => {
          if (data.ok) {
              alert('Message sent successfully!');
          } else {
              alert('Failed to send message: ' + data.description);
          }
      })
      .catch(error => {
          alert('Error: ' + error.message);
      });
 
  
    });
});
