# sampleBackend

Requirment of this project is

Book (CRUD) API.
Create Admin using the API.
Create another role, Sab-Admin.
Assign permission to the sub-admin to manage the user.
Example: If the sub-admin has permission then only they can return the book or update the user profile.
User (Creation) API with image upload (API can be separate as well), Update user profile.
Book Assignment to the user (API) If the book an already assign throw the error, a book can be assigned to a particular user for 1 week only.
API to show all user-assigned books (Add filter for the book title, Number of days book assigned (Example- If a book is taken for already 2 days then take 2 as an input and show all the books), add a filter showing all the books for more than 8 days).
Return book API for the user.
Books track history with all the users populating (Add a filter - based on book id).
Add pagination in the API. 
Show books past track assigned history with filter, add one filter where the user will enter the date then show all the books assigned to a particular date with pagination.
Note - All the users ' APIs will be authenticated and modular code structure and add description over the function.
Use all the items which are being taught (Swagger etc.), Use es6 concepts while writing the code.
All the APIs should be fully validated with a custom exception thrown on the wrong input.