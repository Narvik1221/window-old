const orders = [
  {
    width: 1300,
    height: 1460,
    color: "",
    type: "",
    one: "",
    two: "",
    three: "",
    four: "",
    windowType: "",
  },
];

let countWindow = 1;
let doc = document.querySelector(".calc__inner");
let order = orders[+doc.id.substring(1) - 1];
let closeSection
const newWindow = () => {
  countWindow = countWindow + 1;
  let windows = document.querySelector(".windows");
  let inner = document.querySelector(".calc__inner");
  if (inner) {
    const clone = inner.cloneNode(true);
    clone.id = "w" + countWindow;
    doc = clone;
    windows.appendChild(clone);
    orders.push(JSON.parse(JSON.stringify(order)));
  }
  console.log(orders);
  let allClose = document.querySelectorAll(".calc__bottom");
  allClose.forEach((i) => {
    i.classList.remove("ac");
  });
  start();
};
let newWindowEl=document.querySelector('.new-window')
newWindowEl.addEventListener('click',newWindow)
const start = () => {
  order = orders[+doc.id.substring(1) - 1];
  let start = doc.querySelector(".start-btn");
  console.log(start);


  let Allinner = document.querySelectorAll(".calc__inner");
  console.log(Allinner.length);
  let handleInner = (event) => {
    doc = event.currentTarget;
    console.log(doc);
  };
  console.log(doc.id.substring(1));
  Allinner.forEach((i) => i.removeEventListener("click", handleInner));
  Allinner.forEach((i) => i.addEventListener("click", handleInner));

  let bottomNum = doc.querySelector(".bottom-number");
  let rightNum = doc.querySelector(".right-number");
  let smallImages = doc.querySelector(".small-images");
  let smallTitle = doc.querySelector(".small-title");
  let smallWidth = doc.querySelector(".small-width");
  let smallHeight = doc.querySelector(".small-height");
  smallWidth.textContent = order.width;
  smallHeight.textContent = order.height;
  bottomNum.textContent = order.width;
  rightNum.textContent = order.height;
  const changeWindow = (event) => {
    smallImages = doc.querySelector(".small-images");
    bottomNum = doc.querySelector(".bottom-number");
    rightNum = doc.querySelector(".right-number");
    smallImages = doc.querySelector(".small-images");
    smallTitle = doc.querySelector(".small-title");
    smallWidth = doc.querySelector(".small-width");
    smallHeight = doc.querySelector(".small-height");
    console.log(doc);
    console.log(smallImages);
    Array.from(smallImages.children).forEach((s) => {
      console.log(event.target.name);
      if (s.classList.contains(event.target.name)) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });
    smallWidth.textContent = order.width;
    smallHeight.textContent = order.height;
    const customTitle = event.target.getAttribute("data-title");
    console.log(customTitle);
    order.type = customTitle;
    smallTitle.textContent = `№ ${Allinner.length} ${customTitle} `;
    let selecList = doc.querySelector(".st__list");
    let calcImg = doc.querySelector(".big-images");
    Array.from(selecList.children).forEach((s) => s.classList.remove("active"));
    console.log(event.target.name);
    let selects = selecList.querySelectorAll("." + event.target.name);
    console.log(selects);
    order.one = "";
    order.two = "";
    order.three = "";
    order.four = "";
    selects.forEach((s) => {
      console.log(s);
      s.classList.add("active");
      console.log(s.lastElementChild.value);
      order[s.lastElementChild.id] = s.lastElementChild.value;
    });
    console.log(calcImg);
    Array.from( calcImg.children).forEach(i=>{
      if(event.target.id==i.id){
        i.classList.add('active')
      }else{
        i.classList.remove('active')
      }

    })
    calcImg.src = `/calc_imgages/${event.target.id}.png`;
  };
  let changeWindowEl=doc.querySelectorAll('.calc__item')
  changeWindowEl.forEach(i=>{
    i.addEventListener('click',changeWindow)
  })
  try {
    console.log(start)
    start.click();
  } catch (e) {
    console.log(e);
  }
  let calcImg = doc.querySelector(".calc__img");
  const selects = doc.querySelectorAll(".calc-select");
  console.log(selects);
  // Добавляем обработчик события change к каждому элементу <select>
  selects.forEach((select) => {
    if (select.id == "color" || select.id == "windowType")
      order[select.id] = select.value;
  });
  selects.forEach((select) => {
    select.addEventListener("change", (event) => {
      console.log(event.target.name);
      if (
        event.target.name == "d" ||
        event.target.name == "d2" ||
        event.target.name == "d3"
      ) {
        calcImg.src = "/calc_imgages/" + event.target.name + ".png";

        if (event.target.name == "d3" && event.target.value == "Нет") {
          calcImg.src = "/calc_imgages/d2.png";
        }
        if (event.target.name == "d2" && event.target.value == "Нет") {
          calcImg.src = "/calc_imgages/d.png";
        }
      }

      console.log;
      const elementName = event.target.value;
      console.log(elementName);

      order[event.target.id] = event.target.value;
    });
  });

  const inputs = doc.querySelectorAll(".calc-input");
  console.log(inputs);
  // Добавляем обработчик события change к каждому элементу <select>
  inputs.forEach((input) => {
    input.addEventListener("input", (event) => {
      if (event.target.name == "width") {
        order.width = event.target.value;
        smallWidth.textContent = order.width;
        bottomNum.textContent = order.width;
      } else if (event.target.name == "height") {
        order.height = event.target.value;
        smallHeight.textContent = order.height;
        console.log(smallHeight);

        rightNum.textContent = order.height;
      }
      // if (event.target.value > event.target.max) {
      //   event.target.value = event.target.max;
      // }
      // if (event.target.value < event.target.min) {
      //   event.target.value = event.target.min;
      // }
    });
  });

  closeSection = (event) => {
    doc = event.currentTarget.parentNode;
    console.log(event.currentTarget.parentNode);
    let calcBottom = doc.querySelector(".calc__bottom");
    let allCaclcBottom = document.querySelectorAll(".calc__bottom");
    allCaclcBottom.forEach((i) => {
      if (i != calcBottom) i.classList.remove("ac");
    });
    calcBottom.classList.toggle("ac");
  };
  let closeSectionEl=doc.querySelector('#closeSection');
  closeSectionEl.addEventListener('click',closeSection)
  const form = doc.querySelector("#myForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let stvorki = 0;
    let windowType = 1;
    console.log(order);
    if (order.one !== "" && order.one !== "Нет") {
      stvorki += 1;
    }
    if (order.two !== "" && order.two !== "Нет") {
      stvorki += 1;
    }
    if (order.three !== "" && order.three !== "Нет") {
      stvorki += 1;
    }
    if (order.four !== "" && order.four !== "Нет") {
      stvorki += 1;
    }
    console.log(order.windowType != "Однокамерный");
    if (order.windowType != "Однокамерный") {
      windowType = 1.25;
    }
    let sizeCoef = (order.width / 1000) * (order.height / 1000);
    let stCoef = 1 + stvorki / 10;
    console.log(sizeCoef);
    console.log(stCoef);
    let stCount =
      Math.round(9000 * stCoef * windowType) + Math.round(3000 * sizeCoef);
    alert("Примерная стоимость: " + stCount + " рублей");
    console.log(order);
  });
  try {
    start.click();
  } catch (e) {
    console.log(e);
  }
};

document.addEventListener("DOMContentLoaded", () => {

  start();
});
