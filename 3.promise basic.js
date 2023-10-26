/*
IOC: Inversion of control means you will lose the control over code when you use callbacks

Mainly call back has two problems
1. Callback hell: means your code grows horizontally instead of vertically
2. Inversion of control: 

example:

api.createOrder(cart, function()
{
    api.proceedToPayment(..) 
})

so the problem is we need to rely on the createOrder function in order to excecute the callback. So the we are going to lose the control 
over the code. If there are some bugs in the higher order func then the callback will never be excecuted/or may be excecuted in the wrong way.


*/

//difference between the callback hell and the promise 

const cart=["laptops","gpu","bags"];


createOrderApi(cart,function (orderId){
    proceedToPyament(orderId,function (paymentInfo){
        paymentReceipt(paymentInfo,function (){
              updateUserWallet();
       });
    });
});


//---------------------------------------------------------------------------------------------------------------
///promise 

const promise = createOrderApi(cart);  // promise returns an object with undefined value

//{key: fulfilled}; after the asynchronous operation when createOrderAPI done its work then `then()` works 

promise.then(orderID=> {return proceedToPyament(orderID)});

//{key: fulfilled};
//---------------------------------------------------------------------------------------------------------------

//promise chaining 
createOrderApi(cart)
.then(orderId => {return proceedToPyament(orderId)})
.then(paymentInfo => {return paymentReceipt(paymentInfo)})
.then(updateUserWallet());




//test a public api
const chicagoArtApi =  "https://api.artic.edu/api/v1/artworks";

const user = fetch(chicagoArtApi); //fetch returns as a promise 

user.then((x) =>{console.log(x); document.write("feteched")} ); // all the data in the console






 

