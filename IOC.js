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


 

