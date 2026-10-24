import { submitContactForm } from "./submitContactForm.js";

export function createContactSection (parent) {
    document.getElementById("submenu").innerHTML = ""
      const contactHeader = document.createElement("div");
      contactHeader.innerText = "Contact Me";
      contactHeader.className = "headers";

      const contactForm = document.createElement("form");
      contactForm.name = "contact";
      contactForm.id = "contact";
      contactForm.addEventListener("submit", submitContactForm);

      const submitBtn = document.createElement("button");
      submitBtn.setAttribute("for", contactForm.id);
      submitBtn.innerText = "Submit";

      const nameField = document.createElement("input");
      nameField.name = "name";
      nameField.type = "text";
      nameField.required = "true";
      nameField.placeholder = "name";
      nameField.autocomplete = "false";

      const emailField = document.createElement("input");
      emailField.name = "email";
      emailField.type = "email";
      emailField.required = "true";
      emailField.placeholder = "email";
      emailField.autocomplete = "false";

      const phoneField = document.createElement("input");
      phoneField.name = "phone";
      phoneField.type = "phone";
      // phoneField.required = "true";
      phoneField.placeholder = "phone";
      phoneField.autocomplete = "false";

      const messageBox = document.createElement("textarea");
      messageBox.name = "message";
      messageBox.required = "true";
      messageBox.placeholder = "message";
      messageBox.autocomplete = "false";

      const contactSection = document.createElement("div");
      contactSection.id = "contactSection";

      contactForm.append(
        nameField,
        emailField,
        phoneField,
        messageBox,
        submitBtn,
      );

      contactSection.append(contactHeader, contactForm);
      parent.append(contactSection);
      // closeMenu(closeMenuState);
} 
