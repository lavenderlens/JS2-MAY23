const $ = (type, text, attributes = {}, children = []) => {
  //ES6 default arguments
  const el = document.createElement(type); //valid HTML element names
  if (text !== null) {
    el.innerText = text;
  }
  // ES6 array destructuring
  for (const [key, value] of Object.entries(attributes)) {
    el.setAttribute(key, value);
  }
  for (let child of children) {
    el.appendChild(child);
  }
  return el;
};
// default exports do not need wrapping in curlies when imported
// there can only be one per file
// see modules ES6 for live bindings
export default $;
