let whatsapp;
let whatsappContainer = document.querySelector(".whatsapp");
let doc = document.querySelector(".map-widget-content-view__frame");
getW = () => {
  whatsapp = document.querySelector(".dg__social-widget");
  if (whatsapp == null) {
    setTimeout(getW, 10);
  } else {
    whatsapp.style.display = "none";
    let popupWhatsapp = whatsapp.querySelector(".dg__social-widget__popup");
    whatsappContainer.appendChild(popupWhatsapp);
    popupWhatsapp.style.display = "block";
  }
};

getW();

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

// document.getElementById('openTelegram').addEventListener('click', function() {
//   // Telegram username or bot
//   const telegramUsername = '@evrookna_germes_bot';

//   // Try to open in Telegram app
//   const appLink = `tg://resolve?domain=${telegramUsername}`;

//   // Fallback to open in browser
//   const webLink = `https://web.telegram.org/a/#7063673396`;

//   // Create an invisible iframe to try opening the app
//   const iframe = document.createElement('iframe');
//   iframe.style.display = 'none';
//   iframe.src = appLink;
//   document.body.appendChild(iframe);

//   // Set a timeout to check if the app was opened
//   setTimeout(() => {
//       // Remove the iframe after timeout
//       document.body.removeChild(iframe);
//       // Open in browser if app not opened
//       window.open(webLink, '_blank');
//   }, 2500);
// });
document.getElementById("openWhatsApp").addEventListener("click", function () {
  const phoneNumber = "+79622842222"; // Замените на необходимый номер
  const appLink = `whatsapp://send?phone=${phoneNumber}`;
  const webLink = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
  const timeout = 1500;
  const start = Date.now();

  // Try to open WhatsApp
  window.location = appLink;

  // If WhatsApp is not opened in the given time, redirect to the web version
  setTimeout(function () {
    if (Date.now() - start < timeout + 100) {
      window.open(webLink, "_blank");
    }
  }, timeout);
});

// document.getElementById('openWhatsApp').addEventListener('click', function() {
//   // Телефонный номер или текст для открытия в WhatsApp
//   const phoneNumber = '+79622842222';  // Замените на необходимый номер
//   const appLink = `whatsapp://send?phone=${phoneNumber}`;

//   // Создаем невидимый iframe для попытки открыть приложение
//   const iframe = document.createElement('iframe');
//   iframe.style.display = 'none';
//   iframe.src = appLink;
//   document.body.appendChild(iframe);

//   // Устанавливаем таймаут для проверки, открылось ли приложение

// });
