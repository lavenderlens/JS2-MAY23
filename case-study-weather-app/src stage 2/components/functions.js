/**
 *
 * functions exported as named exports - have to be imported in {}
 * you can have as many exports per file as you like
 * try to keep functions pure
 */

export const H1 = (text) => {
  const h1 = document.createElement("h1");
  h1.innerHTML = text;
  h1.setAttribute(
    "class",
    "text-2xl font-semibold text-blue-800 animate-pulse my-2"
  );
  document.body.appendChild(h1);
  return h1;
};

export const Para = (text) => {
  const p = document.createElement("p");
  p.innerHTML = text;
  document.body.appendChild(p);
  return p;
};
