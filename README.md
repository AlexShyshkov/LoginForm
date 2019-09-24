# LoginForm
---------------------------------
## Example of the login form page
---------------------------------
### Project contains
 File name         |   File content
-------------------|------------------
index.html         |File with HTML markup
css                |Folder with CSS styles
   style.css       |Page element's CSS styles
   media.css       |CSS styles for supporting page on mobile devices
js                 |Folder with page scripts
   validation.js   |User validation script
   storage.js      |Username saving in local storage script
   users.json      |JSON file with list os usernames and passwords
source             |Folder with project screenshots

----------------------------------------
Built with
----------------------------------------

- Sublime text - text editor for code, markup; 
- Running in the MS Windows enviroment;
- Open Server.

----------------------------------------

### Functionality
----------------------------------------
#### Interface
Interface contains:
  - `<label>` element for username field;
  - `<input type="text"/>` element for entering user's login or username;
  - `<label>` element for password field;
  - `<input type="password">` element for entering user's password;
  - `<input type="button">` element for login action;
  - `<input type="button">` element for creating new account;
  - `<input type="checkbox">` element for remembering of user;
  - `<input type="button">` element for canceling action;
  - `<a>` element for actions in case the user has forgotten the password;
 
![alt interface](https://github.com/AlexShyshkov/LoginForm/blob/master/source/screenshots/login_form.png)

All buttons change opacity when user hovers over. For example, a user hovers over the login button and button changes opacity.

![alt hover](https://github.com/AlexShyshkov/LoginForm/blob/master/source/screenshots/hover_button.png)

Page is supported on mobile devices. CSS-file "media.css" contains breakpoints, what change form width after the changing screen width.

![alt mobile](https://github.com/AlexShyshkov/LoginForm/blob/master/source/screenshots/mobile.png)

The media queries for this page uses 5 breakpoints from Bootstrap framework - 320px, 544px, 768px, 992px, 1200px.
After the changing the width of the device's screen, the form changes own width, "Cancel" button changes width to 100% of the form width, "Forgot a password?" link changes position and situated under the "Cancel" button.

#### Validation

validation.js script provides validation of user login and password. 
When a user clicks on the login button in the absence of data entry in the fields for login and password, alert modal window is activated with a warning about the need to enter login and/or password.

![alt empty inputs](https://github.com/AlexShyshkov/LoginForm/blob/master/source/screenshots/empty_inputs.png)
![alt empty password](https://github.com/AlexShyshkov/LoginForm/blob/master/source/screenshots/empty_password.png)

After entering the correct username and password, alert modal window is activated with a greeting text.

![alt valid](https://github.com/AlexShyshkov/LoginForm/blob/master/source/screenshots/valid_user.png)

If a user entered incorrect username and/or password, alert modal window is activated with warning text.
![alt not valid](https://github.com/AlexShyshkov/LoginForm/blob/master/source/screenshots/not_valid_user.png)

If a user checked in "Remember me" checkbox and set username in "Username" input, username is saved to the browser LocalStorage. After updating the page username isn't deleted from username input. Password is not saved for security reasons.
![alt storage](https://github.com/AlexShyshkov/LoginForm/blob/master/source/screenshots/local_storage.png)

All usernames and passwords are saved as an array in "users.json" file.
When a user clicks on "Login" button, "click" event handler starts function, which creates XMLHttpRequest object:

    let request = new XMLHttpRequest();
    
Than we'll open the file "users.json" via GET request and write the path to outer JSON file as a second parameter:

		  request.open('GET', 'js/users.json');

After that we parse JSON data within the onload function and sent parsed data as a parameter to "checkUser(user)" function, which compares the data entered by the user with the response received.

    request.onload = function(){
     let user = JSON.parse(this.response);
     checkUser(user);
    };

And submit the request:
  
		    request.send();

If you open up the HTML file now you'll get a console error - "users.json" called from the file-system instead of an actual domain (its a browser security protocol). To test this out locally, necessary to run it on local server (for this project used OpenServer).
