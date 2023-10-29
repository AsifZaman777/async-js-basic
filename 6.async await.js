

const promise = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("I am a promise");
    },2000);
});


promise.then((res)=>console.log(res)); //normal promise handling



async function promiseHandler()
{
  const p= await promise;  // wair until the promise is resolved
  return p;
}

promiseHandler().then(res=> console.log(res));


