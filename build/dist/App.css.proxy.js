// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n.app-container {\n  margin: 1rem auto auto 1rem;\n}\n\n.input-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.btn-container {\n  flex-direction: row;\n}\n\nbutton {\n  border: 2px solid #4f8eed;\n  color: #4f8eed;\n  border-radius: 18px;\n  font-family: Roboto;\n  font-weight: bold;\n  background-color: whitesmoke;\n  padding: 5px 20px;\n  margin: 10px auto;\n  margin-right: 5px;\n}\n\n.grid-size-input {\n  color: #4f8eed;\n  background-color: whitesmoke;\n  max-width: 280px;\n  padding: 10px 15px;\n  border: none;\n  outline: none;\n  background-color: rgba(255, 255, 255, 0.3);\n  border-radius: 16px 0px;\n  border-bottom: 3px solid #4f8eed;\n  font-size: 20px;\n  font-weight: 300;\n  transition: 0.2s ease-out;\n  font-family: Roboto;\n}\n\n::placeholder {\n  color: #4f8eed;\n}\n\n.grid-container {\n  margin-top: 20px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}