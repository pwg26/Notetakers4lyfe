# Note Taker 

## Contents  
[Description](#Description) 
 
[Development](#Development) 

[Instillation](#Instillation)

[Usage](#Usage)

[Tests](#Tests)

[Contributors](#Contributors)

[License](#License)

[Contact](#Contact)


*  *  *  *  *

## Description
This Repository contains an application that allows users to create and store notes. It works by utilizing exprss.js server requests to store and extrapolate the users input notes into and from a database. 

Life is extremely complicated so it's important to keep track of day to day and future tasks. While writing things down on a planner works, there is the drawback of potentially losing a physical object. By utilizing a note taking app that utilizes servers, one always has the ability to have their inputs secured in a database that provides low chance of total loss.

<img src="https://github.com/pwg26/Notetakers4lyfe/blob/main/Assets/Pictures/page.png" >

## Development
To begin html and css files were created for a viewable main and practical note taking page. Next a javascript file was created to initialize future  server interaction with user activity along with a json file that would act as the database. A server js file utilizing express was then created to initialize the server listening and to link html and api routes. Lastly, a js html route file was created to link the html files to the server and an api route js file was created to link the database to the server.
<img src="https://github.com/pwg26/Notetakers4lyfe/blob/main/Assets/Pictures/code1.png" >
 
 <img src="https://github.com/pwg26/Notetakers4lyfe/blob/main/Assets/Pictures/code2.png" >

## Instillation
After cloning this repository to a desired location, navigating to this location via the terminal, the user simply then types npm ii to access the required node modules for the application to run.


## Usage
To use the application after the node modules are installed and the user is navigated to the develop folder, the user types node server.js in the terminal for the server to begin listening. After completing this, the user then will paste localhost:4500 into the browser to be directed to the starting page. By clicking the get started button, the user will then be directed to the actual note taking page where after clicking on the pencil icon, can start creating notes by typing a header, description, then clicking save. These notes will then be stored on the left hand side of the page and will remain if the page is changed or refreshed.

This app is also deployable via the horoku link below!
https://pacific-caverns-78157.herokuapp.com/


## Tests
No tests were utilized in the creation of this application.


## Contributors
Pierce Gladfelter was the sole contributor to this application's development.


## License
None.


## Contact
For any questions or suggestions for improvement this project reach me at... 

Github Profile-  https://github.com/pwg26

Email- kcaskade@gmail.com
