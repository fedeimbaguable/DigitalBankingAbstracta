To automate the Bank's LogIn page, the following tests were performed:

Firstly six tests were made to test the correct functioning of the inputs, introducing incorrect inputs and also leaving blank inputs in five cases and correct in the remaining one.

1)
Title : Sign In denied because user does'nt exist.
Description: We introduce incorrect data in username and password inputs expecting the software answers with an error and dont let us sign in.
Date: 01/03/2022
Functionality: Sign in to the bank's webapp.
Input data and actions: We introduce a username and password that was not created before and submit the form: federicodelucchi@gmail.com-12345678
Expected Result: Get an error from the sistem and dont let us sign in.
Obtained Result: The webapp took us to a different Url and a message was displayed and the acces was denied.

2)
Title : Sign In denied because user user and password do not match.
Description: We introduce incorrect data in the password but a correct username to try if the inputs are reading data correctly expecting the software answers with an error and dont let us sign in.
Date: 01/03/2022
Functionality: Sign in to the bank's webapp.
Input data and actions: We introduce a username that is correct but a password that is incorrect and submit the form: jsmith@demo.io-12345678
Expected Result: Get an error from the sistem and dont let us sign in.
Obtained Result: The webapp took us to a different Url, a message was displayed and the acces was denied.

3)
Title : Sign In denied because data was not received.
Description: We dont introduce data in username and password inputs expecting the software answers with an error and dont let us sign in.
Date: 01/03/2022
Functionality: Sign in to the bank's webapp.
Input data and actions: We dont introduce neither username nor password and submit the form.
Expected Result: Get an error from the sistem and dont let us sign in.
Obtained Result: The webapp took us to a different Url, a message was displayed and the acces was denied.

4)
Title : Sign In denied because username was not received.
Description: We dont introduce data in the username input expecting the username input to work correcty and the software answers with an error and dont let us sign in.
Date: 01/03/2022
Functionality: Sign in to the bank's webapp.
Input data and actions: We introduce a correct password but leave in blank the username input and submit the form: Demo123!
Expected Result: Get an error from the sistem and dont let us sign in.
Obtained Result: The webapp took us to a different Url, a message was displayed and the acces was denied.

5)
Title : Sign In denied because username was not received.
Description: We dont introduce data in the password input expecting the password input to work correcty and the software answers with an error and dont let us sign in.
Date: 01/03/2022
Functionality: Sign in to the bank's webapp.
Input data and actions: We introduce a correct username but leave in blank the password input and submit the form: jsmith@demo.io
Expected Result: Get an error from the sistem and dont let us sign in.
Obtained Result: The webapp took us to a different Url, a message was displayed and the acces was denied.

6)
Title : Sign In correctly with a user already created.
Description: We introduce data in the username and password inputs expecting the software to let us sign in, then we log out.
Date: 01/03/2022
Functionality: Sign in to the bank's webapp.
Input data and actions: We introduce a correct username and password and submit the form: jsmith@demo.io-Demo123!
Expected Result: Let us sign in and take us to the Bank's personal dashboard.
Obtained Result: The webapp took us to the dashboard allowing us the access it was expected.

After we tested the sign in form we are testing the two links which one takes you to the sign in form (logo) and the other one to the sign up form. We also tested the checkbox that remembers the user.

7)
Title : Should take us to the sign in form.
Description: We introduce data in the username input and then we click on the logo of Digital Bank expecting it to refresh the browser and take us to a blank sign in form.
Date: 01/03/2022
Functionality: Refresh the browser and take us to a blank sign in form.
Input data and actions: We introduce a username input and click the logo : federicodelucchi@gmail.com
Expected Result: Take us to a new sign in form with blank inputs.
Obtained Result: The webapp took us to a new sign in form and refreshed the browser.

8)
Title : Should take us to the sign up form.
Description: We click on the "Sign Up Here" link expecting the browser to take us to the sign up form and then click in the logo again to take us back to the sign in form.
Date: 01/03/2022
Functionality: Take us to a sign un form and then to a blank sign in form.
Input data and actions: We click the link and then click the logo.
Expected Result: Take us to a new sign un form and then to a sign in form with blank inputs.
Obtained Result: The webapp took us to a new sign un form and then to the sign in form again.

9)
Title : Sign In correctly clicking the remember me checkbox.
Description: We introduce data in the username and password inputs and click the remember me checkbox expecting the software to let us sign in and the the cookies to remember us correctly.
Date: 01/03/2022
Functionality: Remember the user.
Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click the checkbox remebmber me and submit the form
Expected Result: Let us sign in and take us to the Bank's personal dashboard and when analyzing the cookies to see the user remembered, as cookies are set in one by default in this browser if after doing the test the number of cookies was more than one the browser remembered us correctly.
Obtained Result: The webapp took us to the dashboard allowing us the access it was expected and the result in the cookies was, that cookies had a length bigger than one, so the browser remembered us.