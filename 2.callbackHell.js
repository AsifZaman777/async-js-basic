/*Daraz told Asif to develop a certain feature to 
their webpage 

ToDo ->
1. develop a createOrder 
2. develop a proceedToPayment [dependent to createOrder]
3. develop a paymentReceipt [dependent to proceedToPatment]
4. develop a updateToWallet [dependent to paymentReceipt ]

*/ 

const api = {
    createOrder: function (cart, callback) {
        document.write("Creating order for:", cart);
        callback();
    },
    proceedToPayment: function (callback) {
        setTimeout(()=>
        {   
            document.write("Proceeding to payment");
            callback();
        },3000)
    },
    paymentReceipt: function (callback) {
        setTimeout(()=>
        {
            document.write("Handling payment receipt");
            callback();
        },2000)
    
    },
    updateWallet: function () {
        setTimeout(()=>
        {
            document.write("Updated in Wallet");
        },1000)
       
    },
};

/// 3s to proceedToPayment, 2s to paymentReceipt, 1s to updateWallet

const cart = ["bags","shoes","shirts"];

api.createOrder(cart, function (){
    api.proceedToPayment(function(){
        api.paymentReceipt(function(){
            api.updateWallet()
        })
    })
})

//its a callback hell / pyramid of doom 
// the solution is inversion of control.













