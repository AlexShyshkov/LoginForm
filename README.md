# LoginForm
---------------------------------
## Example of the login form page
---------------------------------
### Project contains
 File name         |   File content
-------------------|------------------
index.html         |File with HTML markup
css                |Folder with css styles
source             |Folder with project screenshots

----------------------------------------
Built with
----------------------------------------
Sublime text - text editor for code, markup. Running in the MS Windows enviroment.

----------------------------------------

### Functionality
Interface contains:
  - `<label>` element for username field;
  - `<input type="text"/>` element for entering user's login or username;
  - `<label>` element for password field;
  - `<input type="password">` element for entering user's password;
  - `<button>` element for login action;
  - `<button>` element for creating new account;
  - `<input type="checkbox">` element for remembering of user;
  - `<button>` element for canceling action;
  - `<a>` element for actions in case the user has forgotten the password;
 
![alt interface](https://github.com/AlexShyshkov/LoginForm/blob/master/source/screenshots/login_form.png)

All buttons change opacity when user hover over. For example, user hover over the login button and button change opacity.

![alt hover](https://github.com/AlexShyshkov/LoginForm/blob/master/source/screenshots/hove_button.png)

Page supported on mobile devices. CSS-file 'media.css' contains breakpoints, what change form width after the changing screen width.

![alt mobile](https://github.com/AlexShyshkov/LoginForm/blob/master/source/screenshots/mobile.png)

The media queries for this page uses 5 breakpoints from Bootstrap framework - 320px, 544px, 768px, 992px, 1200px.
After the changing the width of the device's screen, the form changes own width, "Cancel" button changes width to 100% of the form width, "Forgot a password?" link changes position and situated under the "Cancel" button.
