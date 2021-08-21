
const getTodos=(url)=>{

   return new Promise((resolve,reject)=>{

      const request = new XMLHttpRequest();

      request.addEventListener('readystatechange',()=>
      {
         
        if(request.readyState===4&&request.status===200)
         {
            const data=JSON.parse(request.responseText);
          resolve(data);
         }
         else if(request.readyState===4)
         {
           reject("could not fetch data");
         }
      });
      
      request.open('GET',url);
      request.send();

   });
 
};


console.log(1);

let url='https://jsonplaceholder.typicode.com/todos/1';

getTodos(url).then((data)=>{// executes till first reject/error
   console.log("promise1 resolved",data);
   url='https://jsonplaceholder.typicode.com/todos/2';
   return getTodos(url);
}).then((data)=>{
   console.log("promise2 resolved",data);
   url='https://jsonplaceholder.typicode.com/todos/3';
   return getTodos(url);
}).then((data)=>{
   console.log("promise3 resolved",data);
}).catch((err)=>{
   console.log("promise rejected",err);
});

console.log(2);



