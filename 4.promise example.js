
const cart= ["bag","makup kit","bag"];

const promise= createOrder(cart);

promise
.then(function(orderId)
{
    document.write("Order has been created for user id: "+orderId);
    ///proceedToPayment(orderId);
})
.catch((err)=>
{
    document.write(err);
})


function createOrder(cart) 
{
   const pr = new Promise((resolve,reject)=>
   {
     //validate cart
     //return orderId
     if(!validateCart(cart))
     {
        const err = new Error("Cart is not validate");
        reject(err);
     }
     else{
           const orderId=Math.floor(Math.random() * 1000);
           //false timing to show async operation
           setTimeout(()=>
           {
            resolve(orderId);
           },5000)
     }

   });
   return pr;
}


function validateCart(cart)
{
    return true;
}