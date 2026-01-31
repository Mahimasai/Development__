//xml http request

//api a way to comminicate

//previously xml was ostly used

//xml STATES
//0 unset
//1 open
//2 headers_received
//3 loading
//4 done
const reqUrl = "https://api.github.com/users/Mahimasai";
const xhr = new XMMHttpRequest();
xhr.open("GET", reqUrl);
