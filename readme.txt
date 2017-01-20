
Installation:

Call of registration via: /secure

Realisation of login and registration are all in the "model" folder. We used sqlite3 as database. Sqlite3 is needed to be installed via npm. (npm install sqlite3) Under circumstances
you have to type in "npm init" too. 


Website:

In this section we will present and explain the modules used in our website.
2.1 Public
2.1.1 Index.html
It is our main user interface and is designed to be easy to learn and use.
Allows to upload and resized an image, select the number of panels to use, and drag the picture to the desired area.
Cannot be accessed without a previous successful login.

2.1.2 Login.html
This interface presents only a login form for users and a link to the register form.
Once the login form is successfully filled in and submitted redirects the user to the index.html or back to the login page if the login was unsuccessful.

2.1.3 Register.html
This page consists purely in a form for users to register into the user database in order to be able to operate the web application.
It is hidden for safety reasons, and only those who know the path can access it.

2.1.4 /css/style.css
The style.css is the main file for describing the visual appearance of the HTML elements displayed in the website.

2.1.5 /css/registerStyle.css
The registerStyle.css has the same functionality that the style.css but is used exclusively in the register form.

2.1.6 /js/PictureHandler.js
This module is in charge of handling the movement of the uploaded picture inside the simulated LED panels in the web interface.
It is formed by three functions: move, initialClick and somewhereClick.
The move function allows the image to change coordinates inside the panels.
The initialClick handles the clicks on the image enabling/disabling the movement, and somewhereClick handles every click out of the image while the image is being moved.

2.1.7 /js/panelView.js
The panelView.js handles the panelWrapper using the showMatrix function, which enlarges the panelWrapper according to the desired number of panels.
2.1.8 /js/worskspace.js
This module is in charge of saving the general image parameters in a variable called workspace.
The workspace variable contains:
•	The scale (3) – Because the original LED panels are 32x32 LEDs and the simulated panels are 96x96 pixels.
•	Height (96) – It is our defined height for the panelWrapper.
•	Width – Which is 96 by default (for 1 panel) but might change depending on the number of panels.
•	Image – Is a variable within the  workspace variable that stores the diferent parameters of the image we want to display
o	Height – Height of the resized image.
o	Width – Width of the resized image.
o	X / Y – Coordinates X and Y of the picture’s origin inside the panelWrapper.
o	Src – Contains the image in Base64 format.
This module is formed by 3 functions.
set_workspace is the function that modifies the workspace width according to the number of panels.
position_image is the function used to determine the X/Y position of the image.
readURL is the function in charge of displaying the resized image on the web application and updates the Height, Width and Src in the workspace.

2.1.9 /js/store_params.js
It is formed by a single function called store_petition that executes a single AJAX POST request that sends workspace parameters in JSON format.

2.2 App
2.2.1 /controller/itmapp.js
This module is the one that creates and initializes the webserver and websockets server.
With the websockets server the connections to the web application are handled according to the authentification, and the connections limit is checked.

2.2.2 /controller/login.js
It is the login page controller.
Consists of the login class that calls the function checklogin of the model to check the correct data of the authentification.

2.2.3 /controller/register.js
It is the registration page controller.
Consists of the Register class that calls the function checkregister only after checking that both passwords entered are the same. Otherwise it raises an error.

2.2.4 /controller/save.js
This module receives the src image and saves it into a file.
To do so it uses two functions: decodeBase64Image and storeData.
decodeBase64Image change the format of the data from Base64 to png.
storeData takes the png formatted data from the previous function and saves it into a file.

2.2.5 /helper/filereader.js
Reads the content of text files and images.

2.2.7 /helper/middleware.js
Includes the necessary functions for middleware logging, collecting request data, routing and cookies reading.

2.2.8 /helper/router.js
It is in charge of routing according to the request petitions with the corresponding path responses.

2.2.9 /model/DB_users.db
It is the database of registered users in a table with the following columns:
•	Email
•	Username
•	Password
•	Connection status

2.2.10 /model/img.png
It is the original image uploaded to the webpage, stored on the server.

2.2.11 /model/loginmodel.js
Handles the login requests connecting to the database to check the authentification details via 2 functions.
checklogin to check if the username exists and the respective password is correct, and responds by handing a cookie in case of correct details entered.
checkconnection returns the result of a promise that checks if the user is already connected, and if not connected updates the database connection status.

2.2.12 /model/registermodel.js
This model handles the register requests, first checking if the user already exists and, if not, updates the database with the values.
