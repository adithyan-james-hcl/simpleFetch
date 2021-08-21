const url='https://jsonplaceholder.typicode.com/todos/1';

fetch(url).then((response)=>{ //only rejected for network error
 if(response.status===200)
    {
    const data = response.json();
    return data;
    }
}).then((data)=>{    
    console.log("response1",data);
    const url='https://jsonplaceholder.typicode.com/todos/2';
    return fetch(url);
}).then((response)=>{
    if(response.status===200)
    {
    const data = response.json();
    return data;
    }
}).then((data)=>{
    console.log("response2",data);
}).catch((err)=>{
    console.log('rejected',err);
});