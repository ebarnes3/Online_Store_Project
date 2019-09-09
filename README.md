Eric Smith
Stephen Burgess
Eric Barnes

Midterm Project Report

	Formal Project Description
	For our course project, we will be creating an online web store/ E-commerce application that will allows users to buy various products listed by other users and have the option to have it delivered to them or pick it up from a nearby retail location. We are going to allow the user to be able to give a customer review on the transaction and keep track of ratings through the website. The online store app will have similar features to already established services such as Amazon or EBay but also offer some differences in UI to promote ease of use for all. We are also going to let users refine their searches through various options on the page to help locate desired item. We will have also have a registration and login page that will remember users by storing information inside our database for the next time they visit the site. 

	Technology Specifications
	We will be using the JavaScript framework Angular JS to build the front end for our website. Angular will allow us to use a client side model-view-controller architecture and make it easier to develop the overall look of the site. Our group will be developing with Visual Studio Code, and Sublime Text Editor. The standard HTML and CSS will of course be used to define the structure of the website and how it looks while JavaScript will allow us to define how our elements behave on the page. We will be using a MySQL database to store our test data as well as our user account information. To retrieve and store our information in the database, we will be creating an API with NodeJS.  The API will be a list of functions that communicate with the database to. The API will serve as the intermediary between our client and our server. We plan to have 4 separate data retrieval end-points, An authentication end-point and a data update endpoint.


System Architecture 

	Unique Features
	Our online web service will make use of the Google maps API. We plan to use this by accepting the address of where the product is going to be picked up and then displaying a visual map to the user to show direction. The Google map API is free to use and can be found in various web applications across the internet.  We will also try to update an items color in real time using Angular and changing the picture of the item listed.

	Challenges
	Due to the inexperience of our group in Web Programming, there are many challenges that we face developing our application. The learning of Angular and JavaScript itself is something we must all take part in and is very time consuming. The time it takes to accomplish trivial tasks has its time lengthened due to research. Since it is mostly a new subject for us, knowledge from other languages for the most part cannot be applied here. We also have a bit of inexperience with Databases. We must completely learn MySQL or MongoDB and have it store our data correctly and also function with our API build with NodeJS. The hardest part of the project is definitely the backend logic but with a group effort will be accomplished. We have started working first on the view part of the model-view-controller architecture since it is the easiest to begin. We are looking to begin getting started on the database part within the next week.

	Data Models
	We plan to separate our data in our MySQL database based on genre of the objects. Like amazon, we will have a section for clothing, furniture, electronics, etc. 
