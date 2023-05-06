### Find My City

Find my city is my first API embedded project where I've used a very simple API to access an array of objects containing data about different cities of the world. For this project I learned about APIs and how to work with them for last three days. 

#### On May 1, 
I learned about what an **API** is. API stands for **Application Programming Interface.** An interface is where we control how the system works under what commands without knowing how the commands are executed. Interface defines a way to communicate with a system. 
An API is a tool designed to be used by developers. It defines how controls to a system are to be used and what changes to expect. 
Remote APIs - While working with code that is not locally executable, we use remote APIs. For example: Sazam cannot store all data and information related to billions of song on your phone but whenever you need to know about a song, you can just enter some data and it gives you result by analyzing those billions of songs in mere seconds. 

REST standing for Representational State Transfer is a method for creating APIs, a universal format in which most APIs are written these days. REST defines some rules that the developers must follow while making their APIs in order to make them RESTful. Characteristics of RESTful APIs are:
Client - Server Architecture
Statelessness
Cache-ability
Layered System
Code on demand
Uniform interface

On May 2, 
I learned what Statelessness is and what different HTTP requests are. Statelessness refers to the method of making HTTP request where the server or API endpoint knows nothing about the client. Any state that needs to be maintained for good communication like login information, must be sent with every request by the Client. 

There are four types of HTTP requests, they are:
Creating
Reading
Updating
Deleting

Whenever a successful request is made of a functioning server the server responds with a response text in JSON format. JSON stands for Java Script Object Notation. This JSON string is interchangeable to Java Script object. 
| HTTP VERBS |  CRUD|
|--|--|
| GET | READ
PUT |UPDATE|
POST|CREATE
DELETE|DELETE

On May 3, 

I learned about Asynchronous JavaScript and how to make HTTP request and created 'Find My City'. The main principle or characteristic of an Asynchronous code is, 'Start Now, Finish Later'. Asynchronous Java Script governs how we perform and handle tasks that take some time to finish. In, synchronous Java Script only one statement at hand is executed in top-to-bottom approach. These statements are sewed in a thread one after another. 

    console.log('one') 
    console.log('two')
    console.log('three')
    
  In Asynchronous Java Script we have multiple threads meaning there are multiple statements being executed simultaneously. This is done to handle blocking code. A blocking code is a statement that takes sometime to execute hence halting the code flow. In order to handle this inconvenience, we start a new thread that is processed simultaneously as out original thread. 

    statement 1;
    statement 2; ------------------> data base
    statement 3;						|
    statement 4;						|
    statement 5; <---------------------<|
    statement 6;

HTTP Requests
HTTP requests are made in order to communicate with a server or and API endpoint. These requests can read, create, update or delete data in the source.  While reading the data is returned to us in form response text as JSON (JavaScript Object Notation) string.  While working with APIs, the URL that is exposed to us is called API endpoint. We use this URL to make requests to API.  In order to make an API request we first need to create a request and that is done as follows:

    cosnt request = new XMLHttprequest();
    request.open('GET', 'url /address');
    request.send();
    
   In this example 'request' is our request object. We use the 'open()' and 'send()' method to create and send request respectively. In order to track progress of a HTTP request we use an event listener called readystatechange'. This  is used to track the ready state of a request. 'readystate' is a property of request object that provides us information about the state of the request. It has integer values and it's value ranges form 0 - 4. 
   
   0 - Request has not been opened.
   1 - Request has been opened.
   2 - Request has been sent.
   3 - Request is being processed at the server side.
   4 - Request has been completed.

    request.readystate
  The response text or requested JSON string can be accessed in responseText property of the request object after it is successfully received. If any error occurs while processing the request we will get the information through the status property of the request. There are different orders of errors among which the 400s order error means that there is a mistake on our side. 

Converting JSON string to JavaScript object is a fairly simple process. We use 'parse()' method of JSON class which is an inbuilt class in Java Script. 

object = JSON.parse(request.responseText);

Call-back hell: When working with multiple source /API we frequently need to use data from one source in order to call data from another source and this can be done in two ways : nesting callback functions
											  using promises
									
Nesting multiple callback functions is called callback hell. 
