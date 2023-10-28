
const cart= ["bag","makup kit","bag"];

createOrder(cart)
.then((orderId)=>
{
    console.log(orderId+" has been created");
    return orderId;
})
.catch((err)=>
{
    console.log(err);  // thrown error from the createOrder promise
})
.then((orderId)=>
{
   return proceedToPayment(orderId);
})
.then((paymentInfo)=>
{
   console.log(paymentInfo);
})
.catch((err)=>
{
    console.log(err);   // error message from the proceedToPayment promise 
})


//that catch will handle errors of its upper chain. Catch doesnt care about the down chain 

function createOrder(cart) 
{
   return new Promise((resolve,reject)=>
   {
     //validate cart
     //return orderId
     if(!validateCart(cart))
     {
        const err = new Error("Cart is not validate"); //error throw
        reject(err);
     }
     else{
           const orderId=Math.floor(Math.random() * 1000);
           //false timing to show async operation
           setTimeout(()=>
           {
            resolve(orderId);
           },2000)
     }

   });
}

function proceedToPayment(orderId)
{
    return new Promise((resolve,reject)=>
    {
       orderId ?
       setTimeout(()=>
       {
        resolve("Payment Successful");
       },1000)  
       : reject("You did not choose any product"); ///error message
    });
}

function validateCart(cart)
{
    return true;
}