//Actuall how does the Reactb work it's it's not that tough we can create our owm small example of react

function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);
  //we will apply for loops
  for (const prop in reactElement.props) {
    if (prop == "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

//How react see element ------->Here we take <a> tag<-----------
const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

//------------------->see this <-----
const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
