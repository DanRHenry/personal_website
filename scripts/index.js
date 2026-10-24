const navBtns = document.getElementsByClassName("navBtns");
const navbar = document.getElementById("navbar");

const homeList = ["home", []];

import { gamesList } from "./gamelist.js";
import { appList } from "./applist.js";
import { createContactSection } from "./createContactSection.js";

const aboutList = ["about", []];
const contactList = ["contact", []];
// const navMenuItems = ["navbar", [appList, gamesList, aboutList, contactList]];

const navMenuItems = ["navbar", [appList, gamesList, contactList]];

populateMenu("categories", navMenuItems[0], navMenuItems[1]);

function populateMenu(parentNode, childNodeName, menuItemsContentArray) {
  for (let i = 0; i < menuItemsContentArray.length; i++) {
    const item = document.createElement("div");
    item.className = `${childNodeName}_items`;
    item.textContent = menuItemsContentArray[i][0];
    item.addEventListener("mouseover", () => {
      const existingItems = document.getElementsByClassName(
        `${childNodeName}_items`,
      );
      for (let item of existingItems) {
        item.style.color = "";
      }

      item.style.color = "white";
    });
    item.addEventListener("click", () => {
      populateMenuSubItems(item, menuItemsContentArray[i][1]);
    });
    document.getElementById(parentNode).append(item);
  }
}

function populateMenuSubItems(item, array) {
  const descriptionWindow = document.getElementById("descriptionWindow");
  descriptionWindow.textContent = "";

  const children = document.getElementsByClassName(
    `${item.className}_children`,
  );

  for (let i = children.length; i >= 0; i--) {
    children[i]?.remove();
  }

  document.getElementById("appBtn")?.remove()
    document.getElementById("submenu").innerHTML = ""

  for (let i = 0; i < array.length; i++) {
    const menuSubItem = document.createElement("div");
    // menuSubItem.href = array[i].link;
    // menuSubItem.target = "_blank";

    menuSubItem.addEventListener("click", () => {
      document.getElementById("contentImage")?.remove();
      document.getElementById("appBtnDiv")?.remove();

      const descriptionWindow = document.getElementById("descriptionWindow");
      descriptionWindow.textContent = "";
      descriptionWindow.textContent = array[i].description;
      const image = document.createElement("img");
      image.src = array[i].image.URL;
      image.alt = array[i].image.altText;
      image.id = "contentImage";
      const br = document.createElement("br");
      descriptionWindow.append(br);
      descriptionWindow.append(image);

      // const appBtn = document.createElement("button");
      // appBtn.textContent = "Open";
      // appBtn.id = "appBtn";

      // appBtn.addEventListener("click", openApp);
      image.addEventListener("click", openApp);

      function openApp() {
        window.open(
          (this.href = array[i].link),
          "newwindow",
          `width=${array[i].width},height=${array[i].height}`,
        );
        return false;
      }

      // const appBtnDiv = document.createElement("div");
      // appBtnDiv.id = "appBtnDiv";
      // document.getElementById("appBtnDiv")?.remove();

      // appBtnDiv.appendChild(appBtn);

      // descriptionWindow.after(appBtnDiv);
    });

    menuSubItem.textContent = array[i].name;
    menuSubItem.className = `${item.className}_children`;
    menuSubItem.style.width = 100;

    document.getElementById("submenu").append(menuSubItem);
  }
}

const navbarItems = document.getElementsByClassName("navbar_items")

navbarItems[navMenuItems.length].addEventListener("click", () => createContactSection(document.getElementById("submenu")))
