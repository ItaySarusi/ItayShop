Project Information -->

The project supports CRUD Functions - Creating,Reading,Updating and Deleting orders. (you can also create new users).
Project data and information is locally stored.
The project uses "Axios" to read the JSON file from the code, and uses "Redux" to store information (other than the state itself).
The project includes a header with links to the various pages in the site, and a footer where you can "contact the creators".
All of the form fields in the project are secured by form validation.
The site is also powered by "Toastify" to keep the users updates by on screen alerts.
There is a search bar in the "SHOP" page where you can search and filter between the products you want to find and order. 
The project uses "React-Router" for page routing.
The project uses icons from the custom SVG font library "et-line".

The site has two types of client types: Users and Admins.
In order to access them you will need to log in with an Email and Password from the log-in page.
Each user can order by adding products to his cart and checking out.
Each user can edit or delete his orders from the "View your orders" page.
Admins can edit and delete theirs and other users' orders from the "Admin" page, which is only available for admins.
The users list is loaded from the pre-set users.JSON file that stores the starting point of the users list.
That list is uploaded to the site data and every time a new user signs up, it is added to the site data, and not to the users.JSON file.
In order to reset the site's user list to only contain what the users.JSON file holds do the following:
1) Inspect site.
2) Press the 'Application' tab.
3) Press the 'Storage' sub-tab.
4) Make sure "including third-party cookies" is checked.
5) Press "Clear site data" to finally reset the site's user list to only contain what the users.JSON file holds.
(You can also add users to the JSON file in the code and save the changes)