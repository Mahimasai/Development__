What is an API?
API is a connector that Connects two softwares (like frontend and backend)

Example : API takes the request from the frontend and sends it to the backend and returns the response to the frontend

Analogy :
Restaurant : you go to restaurent customer oputs request Waiter is the API goes to kitchen and then Kitchen is the backend

Menu is like protocols
And the decor of the food is the patter and is analougues to the data patter that is returned by the API

Need for API :

If we have IRCTC here it gives info aout the stations btw the two stations

Data Base where we stORE THE VALUES
Backend fetch from the database
Frontend requests goes to backend and then backend fetches from backend

Here they are communicating with each other withput API
So here we have frontend and backend in same directory

It is called monolithic architecture

So even a single change in the frontend or backend requires a full restart of the application

Why need of the API ?

If a third party wants data from our database
then it can communicate with backend with the help of API and get the data

SO we develop frontend and backend in different directories

It is called microservices architecture

Here we have end points for API we create a API before Database so if we want to communicate with the backend then we have to hit the target API then the API will fetch the data from the backend and will give the data to the frontend or any third party

See here Now Third party clients and the Frontend are at same level where they have to make a requaest to the data and they will get it

API generallly responds in json

Nowadays we have android , ios , web app

For same idea we have to create 3 applications
and changes shoould be in sync
So we have API Architecture

We should have a backend and these three frontend we can communicate simultaneoulsy with the help of API

IN ML Perspective the model is like database

We willl train the model and bring it to the world

Now we wil consider ChatGPT trained with GPT and then they make it website and then They thought that they will bring them to the worls as a website

Users asks the Question and ten model should answer it

Model is trained and stored in binary format and can be loaded in any format

Backend we create a function called predict and it will load the ml model and will give it

Here we have frontend where we click the submit button and it will send the request to the backend and the backend will send the request to the model and the model will give the response to the backend and the backend will send the response to the frontend

Again it was monolithic architecture in ML

Nowadays the third party clients like chatbots want to access the model here also we apply api before backend

Here it will interact with the API and the model gets the requet and the model gives the response to the API and the API gives the response to the frontend

Here we will not give the full acces to the user the third party

Example : Amazon Model with recomender system
wanna run it in android , ios , web

3 different front ends
then api then backend then model
