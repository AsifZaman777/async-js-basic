
const promise1 = new Promise((resolve,reject)=>
{
   setTimeout(()=>
   {
      resolve("I am a promise");
   },5000)
});

const promise2 = new Promise((resolve,reject)=>
{
   setTimeout(()=>
   {
      resolve("I am a promise");
   },10000)
});



async function asyncPromiseHandler()
{
   const p1 = await promise1; 
   console.log(p1);   // it will take 5s to be resolved 
   console.log("Check text 1");  

   const p2 = await promise2; // meanwhile p2 will be handled by js 
   console.log(p2);   //it will be executed in the next 5s
   console.log("Check text 2");  //it will be executed in the next 5s
   
   //after all the texts will be executed
}

asyncPromiseHandler();

