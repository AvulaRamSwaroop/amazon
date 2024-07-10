const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
  console.log(xhr.response);
});
//uniform resource locator
//https s means secure version http
//https://amazon.com amazon.com is domain name;
xhr.open("GET", "https://supersimplebackend.dev/images/apple.jpg");

xhr.send();

//documentation page
//using the browser is always a get request

//list of all url paths is backend api;

//browser  contain some special attributes such that it can display the image urls and thing in a better organised way
