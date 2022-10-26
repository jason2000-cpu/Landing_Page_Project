## MOVIE APP REQUIREMENTS

### Login/Signup

#### valid user name
 - should be uinque
 - To confirm the uniqueness of the username
 of the username (validation) check if the username and password exists in the DB
#### Email
 - Should be valid
 - A valid email contains the @ symbol and ends with .com
 - should be uinque i.e. no two users should have the same email
 - To veryfy this validation should be done in both frontend and backend
#### Phone Number
 - Should start with the kenyan code +254
 - Sould not be more or less than 9 numbers
 - No two users should have the same phone number
#### Valid password
 - Should not be less than 8 characters
 - Should have atleast;
     1. one special character
     2. one uppercase
     3. one lowercase
     4. one number
### Alternatives/exceptions
 - If by any chance the signup is not working/taking long to respond users can signup with their active email accounts
  #### Email login
      - If a user uses email to register, information to be fetched from the email acoount will be;
           - username
           - email
           - phone number
  ## Login Requirements
  ### username
    - The username provided should be compared with what is in the database if not, the user is prompted with an error message
  ### Password
    The password should be fetched from the db to confirm validity of the account if it does not match the user is prompted with a wrong password error message
