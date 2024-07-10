import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

// import "../data/backend.js";
// import { loadProducts } from "../data/pro1.js";

new Promise((resolve) => {
  setTimeout(() => {
    console.log("promise");
  }, 2000);
  resolve();
})
  .then(() => {
    console.log("hii there");
  })
  .catch(() => {
    console.log("hmm ");
  });

renderOrderSummary();
// loadProducts();
//loadProducts(() => {
// renderOrderSummary();
//renderPaymentSummary()})
renderPaymentSummary();
/*

f1(() => {
  f2(() => {
    f3()
        })
    })


    resolve('kk);
    .then((parameter) => {
      console.log(parameter);
      })

      //output is kk;

    Promise.All([
    //p1,
    //p2
    ])  


new Promise((resolve) => {
  f1(() => {
    resolve()
    });
}).then(() => {
  return new Promise((resolve) => {
     f2(() => {
      resolve()
      })
    } )})
*/
