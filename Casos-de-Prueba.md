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

10)
Title : Should take you to Checkings form.
Description: We sign in to the account and then go to the new checkings form.
Date: 08/03/2022
Functionality: Take us to the new checkings form.
Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on checking and aftwerwards on new checking
Expected Result: Let us sign in and take us to the Bank's new checking form.
Obtained Result: The webapp took us to the dashboard allowing us the access and then took us to the new checkings form.

11)
Title : Should take you to View Checkings form.
Description:Go to the view checkings page.
Date: 08/03/2022
Functionality: Take us to the view checkings form.
Input data and actions: We click on checking and aftwerwards on view checking
Expected Result: Take us to the Bank's view checking form.
Obtained Result: The webapp took us to the view checkings form.

12)
Title : Should reset the data.
Description: We go to the new checkings form type data in the names input and then reset.
Date: 08/03/2022
Functionality: Reset the new checkings form.
Input data and actions: We go to the new checkings form type "1234" in the name input and then click the reset button.
Expected Result: Reset the new checkings form.
Obtained Result: The checkings form was reset and the inputs are blank.

13)
Title : Should create a Standard Individual Checking.
Description:  We go to the new checkings form select the options Standard and Individual, type data in the inputs and submit.
Date: 08/03/2022
Functionality: Create a checking.
Input data and actions: We select the Standard and Individual options by clicking them, then we type the name of the checking and the deposit amount: Standard Individual Checking-25 and submit the form.
Expected Result: Create a Standard and indiviudal checking with a deposit of 25.
Obtained Result: The checking was created correctly.

14)
Title : Should create a Standard Joint Checking.
Description:  We go to the new checkings form select the options Standard and joint, type data in the inputs and submit.
Date: 08/03/2022
Functionality: Create a checking.
Input data and actions: We select the Standard and Joint options by clicking them, then we type the name of the checking and the deposit amount: Standard Joint Checking-50.47 and submit the form.
Expected Result: Create a standard and joint checking with a deposit of 50.47.
Obtained Result: The checking was created correctly.

15)
Title : Should create a Interest Individual Checking.
Description:  We go to the new checkings form select the options Interest and Individual, type data in the inputs and submit.
Date: 08/03/2022
Functionality: Create a checking.
Input data and actions: We select the Interest and Individual options by clicking them, then we type the name of the checking and the deposit amount: Interest Individual Checking-1000000 and submit the form.
Expected Result: Create a interest and indiviudal checking with a deposit of 1000000.
Obtained Result: The checking was created correctly.

16)
Title : Should create a Interest Joint Checking.
Description:  We go to the new checkings form select the options Interest and Joint, type data in the inputs and submit.
Date: 08/03/2022
Functionality: Create a checking.
Input data and actions: We select the Interest and Joint options by clicking them, then we type the name of the checking and the deposit amount: Interest Joint Checking-10000000 and submit the form.
Expected Result: Create a interest and joint checking with a deposit of 10000000.
Obtained Result: The checking was created correctly.

17)
Title : Should not create a checking because the deposit is less than 25.
Description:  We go to the new checkings form select the options Standard and Individual, type data in the inputs and submit.
Date: 08/03/2022
Functionality: Reject a new checking.
Input data and actions: We select the Standard and Individual options by clicking them, then we type the name of the checking and the deposit amount: Error-24.99 and submit the form.
Expected Result: Should keep on the page and dont redirect us to the table with the confirmation message.
Obtained Result: The checking was not created correctly and we stayed on the same form.

18)
Title : Should not create a checking because the deposit is in negative numbers.
Description:  We go to the new checkings form select the options Standard and Joint, type data in the inputs and submit.
Date: 08/03/2022
Functionality: Reject a new checking.
Input data and actions: We select the Standard and Joint options by clicking them, then we type the name of the checking and the deposit amount: Error-(-30)) and submit the form.
Expected Result: Should keep on the page and dont redirect us to the table with the confirmation message.
Obtained Result: The checking was not created correctly and we stayed on the same form.

19)
Title : Should not create a checking because the deposit is letters.
Description:  We go to the new checkings form select the options Interest and Individual, type data in the inputs and submit.
Date: 08/03/2022
Functionality: Reject a new checking.
Input data and actions: We select the Interest and Individual options by clicking them, then we type the name of the checking and the deposit amount: Error-jdskjksf and submit the form.
Expected Result: Should keep on the page and dont redirect us to the table with the confirmation message.
Obtained Result: The checking was not created correctly and we stayed on the same form.

20)
Title : Should not create a checking because the deposit is blank.
Description:  We go to the new checkings form select the options Interest and Joint, type data in the inputs and submit.
Date: 08/03/2022
Functionality: Reject a new checking.
Input data and actions: We select the Interest and Joint options by clicking them, then we type the name of the checking and the deposit amount: Error-() and submit the form.
Expected Result: Should keep on the page and dont redirect us to the table with the confirmation message.
Obtained Result: The checking was not created correctly and we stayed on the same form.

21)
Title : Should switch checking.
Description:Go to the view checkings page and change the checking we are looking at.
Date: 08/03/2022
Functionality: Change the checking we are viewing.
Input data and actions: We click on checking and aftwerwards on view checking, once we are in the view checking page we click on the button of the card we want to see.
Expected Result: Take us to the Bank's view checking form and change the check view.
Obtained Result: The webapp took us to the view checkings form and we changed the check we were looking at.

22)
Title : Should change the page.
Description:Go to the view checkings page and change the pages of the table of transaction forwards and then backwards.
Date: 08/03/2022
Functionality: Change the pages of the checking we are viewing.
Input data and actions: Once we are in the view checking page we click on the button next changing pages forwards and then click on the page previous to go back.
Expected Result: Change the pages forwards and backwards.
Obtained Result: We changed the pages correctly.

23)
Title : Should filter the table.
Description:Go to the view checkings page and filter the table of transaction.
Date: 08/03/2022
Functionality: Filter the checking we are viewing.
Input data and actions: Once we are in the view checking page we type the word "income" in the search input to filter this word.
Expected Result: Filter the table with the word income.
Obtained Result: We could filter the table with the word income correctly.