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

# Deep dive into Async Await 







