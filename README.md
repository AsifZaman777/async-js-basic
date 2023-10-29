# Async Function:
- Always return a promise
- If we return some value within a async function it will wrap it up in promise and return the promise 
```
async function getData()
{
    return "Hello Asif";
}

let data=getData(); // promise is returned
console.log(getData());

```
in the second function Hello Asif will be wrapped up in a promise and will be returned as a promise.

- More important thing: If we return a promise inside the async, then it will not wrap again into promise.

```
      let promise= new Promise((resolve,reject)=>
      {
        resolve("I am promise");
      });

      async function getData()
      {
        return promise;
      }

      getData().then((res)=> console.log(res)); // we are getting the data inside the async function
```


# Async Await 
### Async Await is used to handle promises.

- Normal promise handling  
```
 const promise = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("I am a promise");
    },2000);
});
promise.then((res)=>console.log(res)); //normal promise handling

```

- Async Await promise handling

```
async function promiseHandler()
{
  const p= await promise;
  return p;
}

promiseHandler().then(res=> console.log(res));

```

# Promise handling with Async Await VS Normal promise handling 
- Normal promise handling : As js is synchronous, non-blocking, single threaded lang. So js waits for none. 

```
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
  promise.then((res)=>console.log(res)); //print after 10s
  console.log("Check difference between async and normal promise handling"); // print immidiately.  
}
normalPromiseHandler();
```

- JS synchronous nature can be changed by using `Async-await`. 
```
const promise = new Promise((resolve,reject)=>
{
   setTimeout(()=>
   {
      resolve("I am a promise");
   },10000)
});


async function asyncPromiseHandler()
{
   const p = await promise;  //program waits here to promise to be resolved
   console.log(p);   
   console.log("Check difference between async and normal promise handling"); 

   //both of the message will be printed after 10s when the promise is resolved
}

asyncPromiseHandler();
```

`Actually here the promgram waited for 10s to resolve the promise but it didn't block the program rather it halted the execution and after 10s when the promise resolved then both of the message executed`.


# Non blocking nature of JS with Async-await (Interview concepts) 

- Who will be excecuted first? 
```

const promise = new Promise((resolve,reject)=>
{
   setTimeout(()=>
   {
      resolve("I am a promise");
   },10000)
});


async function asyncPromiseHandler()
{
   const p1 = await promise;
   console.log(p1);   //printed after 10s
   console.log("Check text 1");   //printed after 10s

   const p2 = await promise;
   console.log(p2);   //printed after 10s
   console.log("Check text 2");  //printed after 10s
   
}

asyncPromiseHandler();

```

`In this program js halted the execution of p1 for 10s. But doesn't blocked the main thread or the operation. So meanwhile the p1 is resolving at that time the p2 will also be resolved as js waits for none (Non-blocking). But when the p1 is resolved then the rest of the texts and p2 will be executed together after 10s.`


- Who will be excecuted first? 
```

const promise1 = new Promise((resolve,reject)=>
{
   setTimeout(()=>
   {
      resolve("I am a promise");
   },10000)
});

const promise2 = new Promise((resolve,reject)=>
{
   setTimeout(()=>
   {
      resolve("I am a promise");
   },5000)
});



async function asyncPromiseHandler()
{
   const p1 = await promise1; 
   console.log(p1);   // it will take 10s to be resolved 
   console.log("Check text 1");  

   const p2 = await promise2; // meanwhile p2 will be handled by js 
   console.log(p2);   
   console.log("Check text 2");  
   
   //after all the texts will be executed
}

asyncPromiseHandler();

```

`We have 2 promises to handle. promise1 needs 10s and promise2 needs 5s to be resolved. As p1 needs 10s program will halt the execution but meanwhile js will do its work and handle the rest of the texts and the p2 (which needs 5s to be resolved). After 10s when the p1 is resolved all the texts will be executed`

- Who will be excecuted first?

```

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


```

`Now in first 5s p1 will be handled and meanwhile p2 will also be handled. As p2 needs more 5s to be resolved so, it will be printed after the next 5s`






