//difference between normal promise handling and async await promise handling 

const promise = new Promise((resolve,reject)=>
{
   setTimeout(()=>
   {
      resolve("I am a promise");
   },10000)
});


//normal promise handling

function normalPromiseHandler()
{
  promise.then((res)=>console.log(res));  //print immediately
  console.log("Check difference between async and normal promise handling");   //print after 10s
}
normalPromiseHandler();



//async promise handling

async function asyncPromiseHandler()
{
   const p = await promise;
   console.log(p);   
   console.log("Check difference between async and normal promise handling"); 

   //both of the message will be printed after 10s when the promise is resolved
}

asyncPromiseHandler();


// difference is in the md file 



