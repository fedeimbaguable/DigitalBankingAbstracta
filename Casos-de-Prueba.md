To automate the Bank's LogIn page, the following tests were performed:

Firstly six tests were made to test the correct functioning of the inputs, introducing incorrect inputs and also leaving blank inputs in five cases and correct in the remaining one.

1)
Title : Sign In denied because user does'nt exist.

Pre-condition: 

Description: We introduce incorrect data in username and password inputs expecting the software answers with an error and dont let us sign in.

Date: 01/03/2022

Functionality: Sign in to the bank's webapp.

Input data and actions: We introduce a username and password that was not created before and submit the form: federicodelucchi@gmail.com-12345678

Expected Result: Get an error from the sistem and dont let us sign in.

2)
Title : Sign In denied because user user and password do not match.

Pre-condition: 

Description: We introduce incorrect data in the password but a correct username to try if the inputs are reading data correctly expecting the software answers with an error and dont let us sign in.

Date: 01/03/2022

Functionality: Sign in to the bank's webapp.

Input data and actions: We introduce a username that is correct but a password that is incorrect and submit the form: jsmith@demo.io-12345678

Expected Result: Get an error from the sistem and dont let us sign in.

3)
Title : Sign In denied because data was not received.

Pre-condition: 

Description: We dont introduce data in username and password inputs expecting the software answers with an error and dont let us sign in.

Date: 01/03/2022

Functionality: Sign in to the bank's webapp.

Input data and actions: We dont introduce neither username nor password and submit the form.

Expected Result: Get an error from the sistem and dont let us sign in.

4)
Title : Sign In denied because username was not received.

Pre-condition: 

Description: We dont introduce data in the username input expecting the username input to work correcty and the software answers with an error and dont let us sign in.

Date: 01/03/2022

Functionality: Sign in to the bank's webapp.

Input data and actions: We introduce a correct password but leave in blank the username input and submit the form: Demo123!

Expected Result: Get an error from the sistem and dont let us sign in.


5)
Title : Sign In denied because username was not received.

Pre-condition: 

Description: We dont introduce data in the password input expecting the password input to work correcty and the software answers with an error and dont let us sign in.

Date: 01/03/2022

Functionality: Sign in to the bank's webapp.

Input data and actions: We introduce a correct username but leave in blank the password input and submit the form: jsmith@demo.io

Expected Result: Get an error from the sistem and dont let us sign in.

6)
Title : Sign In correctly with a user already created.

Pre-condition: Exists a user.

Description: We introduce data in the username and password inputs expecting the software to let us sign in, then we log out.

Date: 01/03/2022

Functionality: Sign in to the bank's webapp.

Input data and actions: We introduce a correct username and password and submit the form: jsmith@demo.io-Demo123!

Expected Result: Let us sign in and take us to the Bank's personal dashboard.

After we tested the sign in form we are testing the two links which one takes you to the sign in form (logo) and the other one to the sign up form. We also tested the checkbox that remembers the user.

7)
Title : Should take us to the sign in form.

Pre-condition:

Description: We introduce data in the username input and then we click on the logo of Digital Bank expecting it to refresh the browser and take us to a blank sign in form.

Date: 01/03/2022

Functionality: Refresh the browser and take us to a blank sign in form.

Input data and actions: We introduce a username input and click the logo : federicodelucchi@gmail.com

Expected Result: Take us to a new sign in form with blank inputs.

8)
Title : Should take us to the sign up form.

Pre-condition: 

Description: We click on the "Sign Up Here" link expecting the browser to take us to the sign up form and then click in the logo again to take us back to the sign in form.

Date: 01/03/2022

Functionality: Take us to a sign un form and then to a blank sign in form.

Input data and actions: We click the link and then click the logo.

Expected Result: Take us to a new sign un form and then to a sign in form with blank inputs.

9)
Title : Sign In correctly clicking the remember me checkbox.

Pre-condition: Exists a user.

Description: We introduce data in the username and password inputs and click the remember me checkbox expecting the software to let us sign in and the the cookies to remember us correctly.

Date: 01/03/2022

Functionality: Remember the user.

Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click the checkbox remebmber me and submit the form

Expected Result: Let us sign in and take us to the Bank's personal dashboard and when analyzing the cookies to see the user remembered, as cookies are set in one by default in this browser if after doing the test the number of cookies was more than one the browser remembered us correctly.

Moreover, now we are going to do the tests regarding the checking and savings page which are very similar.

Moreover, now we are going to do the tests regarding the checking and savings page which are very similar.

10)
Title : Should take you to Checkings form.

Pre-condition: Exists a user.

Description: We sign in to the account and then go to the new checkings form.

Date: 08/03/2022

Functionality: Take us to the new checkings form.

Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on checking and aftwerwards on new checking

Expected Result: Let us sign in and take us to the Bank's new checking form.

11)
Title : Should take you to View Checkings form.

Pre-condition: Exists a user.

Description:Go to the view checkings page.

Date: 08/03/2022

Functionality: Take us to the view checkings form.

Input data and actions: We click on checking and aftwerwards on view checking

Expected Result: Take us to the Bank's view checking form.

12)
Title : Should reset the account creation form when clicking reset.

Pre-condition: Exists a user.

Description: We go to the new checkings form type data in the names input and then reset.

Date: 08/03/2022

Functionality: Reset the new checkings form.

Input data and actions: We go to the new checkings form type "1234" in the name input and then click the reset button.

Expected Result: Reset the new checkings form.

13)
Title : Should create a Standard Individual Checking.

Pre-condition: Exists a user.

Description:  We go to the new checkings form select the options Standard and Individual, type data in the inputs and submit.

Date: 08/03/2022

Functionality: Create a checking.

Input data and actions: We select the Standard and Individual options by clicking them, then we type the name of the checking and the deposit amount: Standard Individual-25 and submit the form.

Expected Result: Create a Standard and indiviudal checking with a deposit of 25.

14)
Title : Should create a Standard Joint Checking.

Pre-condition: Exists a user.

Description:  We go to the new checkings form select the options Standard and joint, type data in the inputs and submit.

Date: 08/03/2022

Functionality: Create a checking.

Input data and actions: We select the Standard and Joint options by clicking them, then we type the name of the checking and the deposit amount: Standard Joint-50.47 and submit the form.

Expected Result: Create a standard and joint checking with a deposit of 50.47.

15)
Title : Should create a Interest Individual Checking.

Pre-condition: Exists a user.

Description:  We go to the new checkings form select the options Interest and Individual, type data in the inputs and submit.

Date: 08/03/2022

Functionality: Create a checking.

Input data and actions: We select the Interest and Individual options by clicking them, then we type the name of the checking and the deposit amount: Interest Individual-1000000 and submit the form.

Expected Result: Create a interest and indiviudal checking with a deposit of 1000000.

16)
Title : Should create a Interest Joint Checking.

Pre-condition: Exists a user.

Description:  We go to the new checkings form select the options Interest and Joint, type data in the inputs and submit.

Date: 08/03/2022

Functionality: Create a checking.

Input data and actions: We select the Interest and Joint options by clicking them, then we type the name of the checking and the deposit amount: Interest Joint-10000000 and submit the form.

Expected Result: Create a interest and joint checking with a deposit of 10000000.

17)
Title : Should not create a checking because the deposit is less than 25.

Pre-condition: Exists a user.

Description:  We go to the new checkings form select the options Standard and Individual, type data in the inputs and submit.

Date: 08/03/2022

Functionality: Reject a new checking.

Input data and actions: We select the Standard and Individual options by clicking them, then we type the name of the checking and the deposit amount: Error-24.99 and submit the form.

Expected Result: Should keep on the page and dont redirect us to the table with the confirmation message.

18)
Title : Should not create a checking because the deposit is in negative numbers.

Pre-condition: Exists a user.

Description:  We go to the new checkings form select the options Standard and Joint, type data in the inputs and submit.

Date: 08/03/2022

Functionality: Reject a new checking.

Input data and actions: We select the Standard and Joint options by clicking them, then we type the name of the checking and the deposit amount: Error-(-30)) and submit the form.

Expected Result: Should keep on the page and dont redirect us to the table with the confirmation message.

19)
Title : Should not create a checking because the deposit is letters.

Pre-condition: Exists a user.

Description:  We go to the new checkings form select the options Interest and Individual, type data in the inputs and submit.

Date: 08/03/2022

Functionality: Reject a new checking.

Input data and actions: We select the Interest and Individual options by clicking them, then we type the name of the checking and the deposit amount: Error-jdskjksf and submit the form.

Expected Result: Should keep on the page and dont redirect us to the table with the confirmation message.

20)
Title : Should not create a checking because the deposit is blank.

Pre-condition: Exists a user.

Description:  We go to the new checkings form select the options Interest and Joint, type data in the inputs and submit.

Date: 08/03/2022

Functionality: Reject a new checking.

Input data and actions: We select the Interest and Joint options by clicking them, then we type the name of the checking and the deposit amount: Error-() and submit the form.

Expected Result: Should keep on the page and dont redirect us to the table with the confirmation message.

21)
Title : Should switch checking.

Pre-condition: 

1)Exists a user
2)Exists two or more checkings.

Description:Go to the view checkings page and change the checking we are looking at.

Date: 08/03/2022

Functionality: Change the checking we are viewing.

Input data and actions: We click on checking and aftwerwards on view checking, once we are in the view checking page we click on the button of the card we want to see.

Expected Result: Take us to the Bank's view checking page and change the checking view.


22)
Title : Should change the page.

Pre-condition: 

1)Exists a user
2)Exists a checking with 20 or more transactions

Description:Go to the view checkings page and change the pages of the table of transaction forwards and then backwards.

Date: 08/03/2022

Functionality: Change the pages of the checking we are viewing.

Input data and actions: Once we are in the view checking page we click on the button next changing pages forwards and then click on the page previous to go back.

Expected Result: Change the pages forwards and backwards.

23)
Title : Should filter the table.

Pre-condition: 

1)Exists a user
2)Exists a checking with more than one category

Description:Go to the view checkings page and filter the table of transaction.

Date: 08/03/2022

Functionality: Filter the checking we are viewing.

Input data and actions: Once we are in the view checking page we type the word "income" in the search input to filter this word.

Expected Result: Filter the table with the word income.
<<<<<<< HEAD

24)
Title : Should take you to Savings form.

Pre-condition: Exists a user

Description: We sign in to the account and then go to the new savings form.

Date: 10/03/2022

Functionality: Take us to the new savings form.

Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on savings and aftwerwards on new savings

Expected Result: Let us sign in and take us to the Bank's new savings form.

25)
Title : Should take you to View Savings form.

Pre-condition: Exists a user

Description:Go to the view savings page.

Date: 10/03/2022

Functionality: Take us to the view savings form.

Input data and actions: We click on savings and aftwerwards on view savings

Expected Result: Take us to the Bank's view savings form.

26)
Title : Should filter the table.

Pre-condition: 

1)Exists a user
2)Exists a checking with more than one category

Description:Go to the view savings page and filter the table of transaction.

Date: 10/03/2022

Functionality: Filter the saving we are viewing.

Input data and actions: Once we are in the view savings page we type the word "interest" in the search input to filter this word.

Expected Result: Filter the table with the word interest.

27)
Title : Should reset the account creation form when clicking reset.

Pre-condition: Exists a user

Description: We go to the new savings form type data in the names input and then reset.

Date: 10/03/2022

Functionality: Reset the new savings form.

Input data and actions: We go to the new savings form type "1234" in the name input and then click the reset button.

Expected Result: Reset the new savings form.

28)
Title : Should create a Savings Individual Savings.

Pre-condition: Exists a user

Description:  We go to the new savings form select the options Savings and Individual, type data in the inputs and submit.

Date: 10/03/2022

Functionality: Create a Saving.

Input data and actions: We select the Savings and Individual options by clicking them, then we type the name of the saving and the deposit amount: Savings Individual Savings-25 and submit the form.

Expected Result: Create a Savings and Indiviudal saving with a deposit of 25.

29)
Title : Should create a Savings Joint Saving.

Pre-condition: Exists a user

Description:  We go to the new savings form select the options Savings and Joint, type data in the inputs and submit.

Date: 10/03/2022

Functionality: Create a Saving.

Input data and actions: We select the Savings and Joint options by clicking them, then we type the name of the saving and the deposit amount: Savings Joint Saving-50.47 and submit the form.

Expected Result: Create a Savings and Joint saving with a deposit of 50.47.

30)
Title : Should create a Money Market Individual Saving.

Pre-condition: Exists a user

Description:  We go to the new savings form select the options Money Market and Individual, type data in the inputs and submit.

Date: 10/03/2022

Functionality: Create a Saving.

Input data and actions: We select the Money Market and Individual options by clicking them, then we type the name of the saving and the deposit amount: Money Market Individual Saving-1000000 and submit the form.

Expected Result: Create a Money Market and indiviudal saving with a deposit of 1000000.

31)
Title : Should create a Money Market Joint Saving.

Pre-condition: Exists a user

Description:  We go to the new savings form select the options Money Market and Joint, type data in the inputs and submit.

Date: 10/03/2022

Functionality: Create a Saving.

Input data and actions: We select the Money Market and Joint options by clicking them, then we type the name of the saving and the deposit amount: Money Market Joint Saving-10000000 and submit the form.

Expected Result: Create a Money Market and Joint saving with a deposit of 10000000.

32)
Title : Should not create a saving because the deposit is less than 25.

Pre-condition: Exists a user

Description:  We go to the new savings form select the options Standard and Individual, type data in the inputs and submit.

Date: 10/03/2022

Functionality: Reject a new saving.

Input data and actions: We select the Standard and Individual options by clicking them, then we type the name of the saving and the deposit amount: Error-24.99 and submit the form.

Expected Result: Should keep on the page and dont redirect us to the table with the confirmation message.

33)
Title : Should not create a saving because the deposit is in negative numbers.

Pre-condition: Exists a user

Description:  We go to the new savings form select the options Standard and Joint, type data in the inputs and submit.

Date: 10/03/2022

Functionality: Reject a new saving.

Input data and actions: We select the Standard and Joint options by clicking them, then we type the name of the saving and the deposit amount: Error-(-30)) and submit the form.

Expected Result: Should keep on the page and dont redirect us to the table with the confirmation message.

34)
Title : Should not create a saving because the deposit is letters.

Pre-condition: Exists a user

Description:  We go to the new savings form select the options Interest and Individual, type data in the inputs and submit.

Date: 10/03/2022

Functionality: Reject a new saving.

Input data and actions: We select the Interest and Individual options by clicking them, then we type the name of the saving and the deposit amount: Error-jdskjksf and submit the form.

Expected Result: Should keep on the page and dont redirect us to the table with the confirmation message.

35)
Title : Should not create a saving because the deposit is blank.

Pre-condition: Exists a user

Description:  We go to the new savings form select the options Interest and Joint, type data in the inputs and submit.

Date: 10/03/2022

Functionality: Reject a new saving.

Input data and actions: We select the Interest and Joint options by clicking them, then we type the name of the saving and the deposit amount: Error-() and submit the form.

Expected Result: Should keep on the page and dont redirect us to the table with the confirmation message.

36)
Title : Should switch savings.

Pre-condition: 

1)Exists a user
2)Exists two or more savings

Description:Go to the view savings page and change the savings we are looking at.

Date: 10/03/2022

Functionality: Change the savings we are viewing.

Input data and actions: We click on savings and aftwerwards on view savings, once we are in the view savings page we click on the button of the card we want to see.

Expected Result: Take us to the Bank's view savings page and change the saving view.

To continue with the automation, now we are going to test the deposit and withdraw sections. They are also very similar.

37) 
Title : Should take you to Deposit form.
<<<<<<< HEAD

Pre-condition:Exists a user

Description: We sign in to the account and then go to the deposit form.

Date: 15/03/2022

Functionality: Take us to the deposit form.

Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit".

Expected Result: Let us sign in and take us to the Bank's deposit form.

38) 
Title : Should show a balance when selecting the account Individual Checking

Pre-condition:

1)Exists a user
2)Exists an Individual Checking

Description: We sign in to the account and then go to the deposit form and select the Individual Checking account.

Date: 15/03/2022

Functionality: Show us the balance in the deposit form.

Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", and select the account Individual Checking.

Expected Result: Let us sign in, take us to the Bank's deposit form and after clicking the account show us the balance.

38) 
Title : Should show a balance when selecting the account Individual Savings

Pre-condition:

1)Exists a user
2)Exists an Individual Savings

Description: We sign in to the account and then go to the deposit form and select the Individual Savings account.

Date: 15/03/2022

Functionality: Show us the balance in the deposit form.

Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", and select the account Individual Savings.

Expected Result: Let us sign in, take us to the Bank's deposit form and after clicking the account show us the balance.

39) 
Title : Should reset the information of the Deposit Form.

Pre-condition:Exists a user

Description: We sign in to the account and then go to the deposit form, we select the account and type data in the input, afterwards we click the button reset.

Date: 15/03/2022

Functionality: Reset the data of a new deposit.

Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", once in the deposit we select the Individual Checking,introduce $10 dollars and reset.

Expected Result: Let us sign in and take us to the Bank's deposit form, and reset the data.

40) 
Title : Should Create a deposit in the account Individual Checking of 1.57 dollars.

Pre-condition:Exists a user

Description: We sign in to the account and then go to the deposit form, we select the account and type data in the input, afterwards we click the button submit.

Date: 15/03/2022

Functionality: Create a new deposit.

Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", once in the deposit we select the Individual Checking,introduce $1.57 dollars and submit.

Expected Result: Let us sign in and take us to the Bank's deposit form, create the deposit and take us to the Checking page and see the deposit in the table.

41) 
Title : Should Create a deposit in the account Individual Checking of 1,000,000 dollars.

Pre-condition:Exists a user

Description: We sign in to the account and then go to the deposit form, we select the account and type data in the input, afterwards we click the button submit.

Date: 15/03/2022

Functionality: Create a new deposit.

Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", once in the deposit we select the Individual Checking,introduce $1,000,000 dollars and submit.

Expected Result: Let us sign in and take us to the Bank's deposit form, create the deposit and take us to the Checking page and see the deposit in the table.

42) 
Title : Should Create a deposit in the account Individual Savings of 1.57 dollars.

Pre-condition:Exists a user

Description: We sign in to the account and then go to the deposit form, we select the account and type data in the input, afterwards we click the button submit.

Date: 15/03/2022

Functionality: Create a new deposit.

Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", once in the deposit we select the Individual Savings,introduce $1.57 dollars and submit.

Expected Result: Let us sign in and take us to the Bank's deposit form, create the deposit and take us to the savings page and see the deposit in the table.

43) 
Title : Should Create a deposit in the account Individual Savings of 1,000,000 dollars.

Pre-condition:Exists a user

Description: We sign in to the account and then go to the deposit form, we select the account and type data in the input, afterwards we click the button submit.

Date: 15/03/2022

Functionality: Create a new deposit.

Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", once in the deposit we select the Individual Savings,introduce $1,000,000 dollars and submit.

Expected Result: Let us sign in and take us to the Bank's deposit form, create the deposit and take us to the savings page and see the deposit in the table.

44) 
Title : Should not create a deposit because the deposit input was in blank.

Pre-condition:Exists a user

Description: We sign in to the account and then go to the deposit form, we select the account Individual Savings and don't type data in the input, afterwards we click the button submit.

Date: 15/03/2022

Functionality: Should not create a new deposit.

Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", once in the deposit we select the account Individual Savings,leave in blank the input and submit.

Expected Result: Let us sign in and take us to the Bank's deposit form, and don't create a deposit.

45) 
Title : Should not create a deposit because the account was not selected.

Pre-condition:Exists a user

Description: We sign in to the account and then go to the deposit form, we don't select the account and type data in the input, afterwards we click the button submit.

Date: 15/03/2022

Functionality: Should not create a new deposit.

Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", once in the deposit we don't select the account,introduce $10 dollars and submit.

Expected Result: Let us sign in and take us to the Bank's deposit form, and don't create a deposit.

46)  
Title : Should not create a deposit because the deposit input was in negative numbers.

Pre-condition:Exists a user

Description: We sign in to the account and then go to the deposit form, we select the account Individual Savings and type data in the input, afterwards we click the button submit.

Date: 15/03/2022

Functionality: Should not create a new deposit.

Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", once in the deposit we select the account Individual Savings,introduce "-10" in the deposit input and submit.

Expected Result: Let us sign in and take us to the Bank's deposit form, and don't create a deposit.

47)  
Title : Should not create a deposit because the deposit input was in letters.

Pre-condition:Exists a user

Description: We sign in to the account and then go to the deposit form, we select the account Individual Savings and type data in the input, afterwards we click the button submit.

Date: 15/03/2022

Functionality: Should not create a new deposit.

Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", once in the deposit we select the account Individual Savings,introduce "aa" in the deposit input and submit.

Expected Result: Let us sign in and take us to the Bank's deposit form, and don't create a deposit.
=======
Description: We sign in to the account and then go to the deposit form.
Date: 15/03/2022
Functionality: Take us to the deposit form.
Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit".
Expected Result: Let us sign in and take us to the Bank's deposit form.
Obtained Result: The webapp took us to the dashboard allowing us the access and then took us to the new deposit form.

38) 
Title : Should show a balance when selecting the account Individual Checking
Description: We sign in to the account and then go to the deposit form and select the Individual Checking account.
Date: 15/03/2022
Functionality: Show us the balance in the deposit form.
Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", and select the account Individual Checking.
Expected Result: Let us sign in, take us to the Bank's deposit form and after clicking the account show us the balance.
Obtained Result: The webapp took us to the dashboard allowing us the access and then took us to the new deposit form, after clicking the account it displayed the balance correctly.

38) 
Title : Should show a balance when selecting the account Individual Savings
Description: We sign in to the account and then go to the deposit form and select the Individual Savings account.
Date: 15/03/2022
Functionality: Show us the balance in the deposit form.
Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", and select the account Individual Savings.
Expected Result: Let us sign in, take us to the Bank's deposit form and after clicking the account show us the balance.
Obtained Result: The webapp took us to the dashboard allowing us the access and then took us to the new deposit form, after clicking the account it displayed the balance correctly.

39) 
Title : Should reset the information of the Deposit Form.
Description: We sign in to the account and then go to the deposit form, we select the account and type data in the input, afterwards we click the button reset.
Date: 15/03/2022
Functionality: Reset the data of a new deposit.
Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", once in the deposit we select the Individual Checking,introduce $10 dollars and reset.
Expected Result: Let us sign in and take us to the Bank's deposit form, and reset the data.
Obtained Result: The webapp took us to the dashboard allowing us the access and then took us to the new deposit form, and reset the data correctly.

40) 
Title : Should Create a deposit in the account Individual Checking of 1.57 dollars.
Description: We sign in to the account and then go to the deposit form, we select the account and type data in the input, afterwards we click the button submit.
Date: 15/03/2022
Functionality: Create a new deposit.
Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", once in the deposit we select the Individual Checking,introduce $1.57 dollars and submit.
Expected Result: Let us sign in and take us to the Bank's deposit form, create the deposit and take us to the Checking page and see the deposit in the table.
Obtained Result: The webapp took us to the dashboard allowing us the access and then took us to the new deposit form, created the deposit and took us to the checking page table where we could see the deposit.

41) 
Title : Should Create a deposit in the account Individual Checking of 1,000,000 dollars.
Description: We sign in to the account and then go to the deposit form, we select the account and type data in the input, afterwards we click the button submit.
Date: 15/03/2022
Functionality: Create a new deposit.
Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", once in the deposit we select the Individual Checking,introduce $1,000,000 dollars and submit.
Expected Result: Let us sign in and take us to the Bank's deposit form, create the deposit and take us to the Checking page and see the deposit in the table.
Obtained Result: The webapp took us to the dashboard allowing us the access and then took us to the new deposit form, created the deposit and took us to the checking page table where we could see the deposit.

42) 
Title : Should Create a deposit in the account Individual Savings of 1.57 dollars.
Description: We sign in to the account and then go to the deposit form, we select the account and type data in the input, afterwards we click the button submit.
Date: 15/03/2022
Functionality: Create a new deposit.
Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", once in the deposit we select the Individual Savings,introduce $1.57 dollars and submit.
Expected Result: Let us sign in and take us to the Bank's deposit form, create the deposit and take us to the savings page and see the deposit in the table.
Obtained Result: The webapp took us to the dashboard allowing us the access and then took us to the new deposit form, created the deposit and took us to the savings page table where we could see the deposit.

43) 
Title : Should Create a deposit in the account Individual Savings of 1,000,000 dollars.
Description: We sign in to the account and then go to the deposit form, we select the account and type data in the input, afterwards we click the button submit.
Date: 15/03/2022
Functionality: Create a new deposit.
Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", once in the deposit we select the Individual Savings,introduce $1,000,000 dollars and submit.
Expected Result: Let us sign in and take us to the Bank's deposit form, create the deposit and take us to the savings page and see the deposit in the table.
Obtained Result: The webapp took us to the dashboard allowing us the access and then took us to the new deposit form, created the deposit and took us to the savings page table where we could see the deposit.

44) 
Title : Should not create a deposit because the deposit input was in blank.
Description: We sign in to the account and then go to the deposit form, we select the account Individual Savings and don't type data in the input, afterwards we click the button submit.
Date: 15/03/2022
Functionality: Should not create a new deposit.
Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", once in the deposit we select the account Individual Savings,leave in blank the input and submit.
Expected Result: Let us sign in and take us to the Bank's deposit form, and don't create a deposit.
Obtained Result: The webapp took us to the dashboard allowing us the access and then took us to the new deposit form, and did'nt create a deposit.

45) 
Title : Should not create a deposit because the account was not selected.
Description: We sign in to the account and then go to the deposit form, we don't select the account and type data in the input, afterwards we click the button submit.
Date: 15/03/2022
Functionality: Should not create a new deposit.
Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", once in the deposit we don't select the account,introduce $10 dollars and submit.
Expected Result: Let us sign in and take us to the Bank's deposit form, and don't create a deposit.
Obtained Result: The webapp took us to the dashboard allowing us the access and then took us to the new deposit form, and did'nt create a deposit.

46)  
Title : Should not create a deposit because the deposit input was in negative numbers.
Description: We sign in to the account and then go to the deposit form, we select the account Individual Savings and type data in the input, afterwards we click the button submit.
Date: 15/03/2022
Functionality: Should not create a new deposit.
Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", once in the deposit we select the account Individual Savings,introduce "-10" in the deposit input and submit.
Expected Result: Let us sign in and take us to the Bank's deposit form, and don't create a deposit.
Obtained Result: The webapp took us to the dashboard allowing us the access and then took us to the new deposit form, and did'nt create a deposit.

47)  
Title : Should not create a deposit because the deposit input was in letters.
Description: We sign in to the account and then go to the deposit form, we select the account Individual Savings and type data in the input, afterwards we click the button submit.
Date: 15/03/2022
Functionality: Should not create a new deposit.
Input data and actions: We introduce a correct username and password : jsmith@demo.io-Demo123!. We click submit the form and after sign in we click on "deposit", once in the deposit we select the account Individual Savings,introduce "aa" in the deposit input and submit.
Expected Result: Let us sign in and take us to the Bank's deposit form, and don't create a deposit.
Obtained Result: The webapp took us to the dashboard allowing us the access and then took us to the new deposit form, and did'nt create a deposit.
<<<<<<< HEAD

To continue with the automation, now we are going to test the deposit and withdraw sections. They are also very similar.

48) 
Title : Withdraw form visualization.

Pre-condition:Exists a user

Date: 17/03/2022

Steps to reproduce:
1)Introduce a correct username and password : jsmith@demo.io-Demo123!. 
2)Click submit the form
3)Click on "withdraw".

Expected Result: Sign in and open the Bank's withdraw form.

49) 
Title : Balance visualization when selecting the account Individual Checking

Pre-condition:

1)Exists a user
2)Exists an Individual Checking

Date: 17/03/2022

Steps to reproduce:
1)Introduce a correct username and password : jsmith@demo.io-Demo123!. 
2)Click submit the form
3)Click on "withdraw".
4)Select the account Individual Checking.

Expected Result: Sign in, open the Bank's withdraw form and after clicking the account show the balance.

49)
Title : Balance visualization when selecting the account Individual Savings

Pre-condition:

1)Exists a user
2)Exists an Individual Savings

Date: 17/03/2022

Steps to reproduce:
1)Introduce a correct username and password : jsmith@demo.io-Demo123!. 
2)Click submit the form
3)Click on "withdraw".
4)Select the account Individual Savings.

Expected Result: Sign in, open the Bank's withdraw form and after clicking the account show the balance.

50) 
Title : Reset the information of the withdraw Form.

Pre-condition:Exists a user

Date: 17/03/2022

Steps to reproduce:
1)Introduce a correct username and password : jsmith@demo.io-Demo123!. 
2)Click submit the form
3)Click on "withdraw".
4)Select the account Individual Savings
5)Introduce $10 dollars 
6)Click reset button

Expected Result: Sign in, open the Bank's withdraw form, and reset the data.

51) 
Title : Withdraw creation in the account Individual Checking of 25 dollars more than the balance.

Pre-condition:
1)Exists a user
2)Exists an Individual Checking

Date: 17/03/2022

Steps to reproduce:
1)Introduce a correct username and password : jsmith@demo.io-Demo123!. 
2)Click submit the form
3)Click on "withdraw".
4)Select the account Individual checking
5)Introduce $25 dollars more than the balance
6)Click submit button

Expected Result: Sign in, open the Bank's withdraw form, create the withdraw and visualize on the Checking page the withdraw in the table.

52) 
Title : Withdraw creation in the account Individual Savings of 25 dollars more than the balance.

Pre-condition:
1)Exists a user
2)Exists an Individual Savings

Date: 17/03/2022

Steps to reproduce:
1)Introduce a correct username and password : jsmith@demo.io-Demo123!. 
2)Click submit the form
3)Click on "withdraw".
4)Select the account Individual savings
5)Introduce $25 dollars more than the balance
6)Click submit button

Expected Result: Sign in, open the Bank's withdraw form, create the withdraw and visualize on the Savings page the withdraw in the table.

53) 
Title : Withdraw creation in the account Individual Savings of 100 dollars.

Pre-condition:
1)Exists a user
2)Exists an Individual Savings

Date: 17/03/2022

Steps to reproduce:
1)Introduce a correct username and password : jsmith@demo.io-Demo123!. 
2)Click submit the form
3)Click on "withdraw".
4)Select the account Individual savings
5)Introduce $100 dollars
6)Click submit button

Expected Result: Sign in, open the Bank's withdraw form, create the withdraw and visualize on the Savings page the withdraw in the table.


54) 
Title : Withdraw creation in the account Individual Checking of 100 dollars.

Pre-condition:
1)Exists a user
2)Exists an Individual Checking

Date: 17/03/2022

Steps to reproduce:
1)Introduce a correct username and password : jsmith@demo.io-Demo123!. 
2)Click submit the form
3)Click on "withdraw".
4)Select the account Individual checking
5)Introduce $100 dollars
6)Click submit button

Expected Result: Sign in, open the Bank's withdraw form, create the withdraw and visualize on the Checking page the withdraw in the table.

55) 
Title : Don't create a withdraw because the withdraw input was in blank.

Pre-condition:Exists a user

Date: 17/03/2022

Steps to reproduce:
1)Introduce a correct username and password : jsmith@demo.io-Demo123!. 
2)Click submit the form
3)Click on "withdraw".
4)We select the account Individual Savings
5)Leave in blank the input 
6)Click submit button

Expected Result: Sign in, open the Bank's withdraw form, and don't create a withdraw.

56) 
Title : Don't create a withdraw because the account was not selected.

Pre-condition:Exists a user

Date: 17/03/2022

Steps to reproduce:
1)Introduce a correct username and password : jsmith@demo.io-Demo123!. 
2)Click submit the form
3)Click on "withdraw".
4)We don't select the account Individual Savings
5)Introduce $10 dollars
6)Click submit button

Expected Result: Sign in, open the Bank's withdraw form, and don't create a withdraw.

57)  
Title : Don't create a withdraw because the withdraw input was in negative numbers.

Pre-condition:Exists a user

Date: 17/03/2022

Steps to reproduce:
1)Introduce a correct username and password : jsmith@demo.io-Demo123!. 
2)Click submit the form
3)Click on "withdraw".
4)We select the account Individual Savings
5)Introduce $-10 dollars 
6)Click submit button

Expected Result: Sign in, open the Bank's withdraw form, and don't create a withdraw.

58)  
Title : Don't create a withdraw because the deposit input was in letters.

Pre-condition:Exists a user

Date: 17/03/2022

Steps to reproduce:
1)Introduce a correct username and password : jsmith@demo.io-Demo123!. 
2)Click submit the form
3)Click on "withdraw".
4)We select the account Individual Savings
5)Introduce "aa" dollars  
6)Click submit button

Expected Result: Sign in, open the Bank's withdraw form, and don't create a withdraw.

59) 
Title : Don't create a withdraw because the withdraw input was of 26 dollars.

Pre-condition:
1)Exists a user
2)Exists an Individual Checking

Date: 17/03/2022

Steps to reproduce:
1)Introduce a correct username and password : jsmith@demo.io-Demo123!. 
2)Click submit the form
3)Click on "withdraw".
4)We select the account Individual Savings
5)Introduce $26 dollars more than the balance 
6)Click submit button

Expected Result: Sign in, open the Bank's withdraw form, and don't create a withdraw.
=======
>>>>>>> ab248a9b9decb2d66f65c0d55b59c5213dd8c35b
>>>>>>> 55487c75394554da12dd2a2bc977249a104094f1
