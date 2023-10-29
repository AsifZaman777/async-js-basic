const cart = ["bag", "makeup kit", "bag"];

createOrder(cart)
  .then((orderId) => {
    console.log(orderId + " has been created");
    return orderId;
  })
  .catch((err) => {
    console.log(err); // Error from the createOrder promise
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);  //show a message
    return { orderId: paymentInfo.orderId, paymentStatus: paymentInfo.paymentStatus }; //pass some data to the down chain
  })
  .then(({ orderId, paymentStatus }) => {
    return updateWallet(orderId, paymentStatus);
  })
  .then((updateWalletResolved) => {
    console.log(updateWalletResolved);
  })
  .catch((err) => {
    console.log(err); 
  });

function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid"); // Error throw
      reject(err);
    } else {
      const orderId = Math.floor(Math.random() * 1000);
      setTimeout(() => {
        resolve(orderId); //orderID will go to the next chain
      }, 2000);
    }
  });
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    if (orderId) {
      setTimeout(() => {
        var paymentStatus = true;
        resolve({orderId,paymentStatus});  //this json will go the next chain
        return console.log("Payment successful");  //always return after resolve//
      }, 1000);
    } else {
      reject("You did not choose any product");
    }
  });
}

function updateWallet(orderId, paymentStatus) {
  return new Promise((resolve, reject) => {
    if (paymentStatus === true) {
      setTimeout(() => {
        resolve("Wallet updated of order ID: " + orderId);
      }, 1000);
    } else {
      reject("No change in the wallet " + orderId);
    }
  });
}

function validateCart(cart) {
  return true; 
}
