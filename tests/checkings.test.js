import HomePage from "../pages/HomePage";
import SignIn from "../pages/SignIn";
import CheckingPage from "../pages/CheckingPage"
 

describe('Checkings', () => {
it('Should take you to Checkings form', async ()=> {
    await SignIn.open('bank')
    let username = 'jsmith@demo.io'
    let password = 'Demo123!'
    await SignIn.logIn(username, password)
    await HomePage.displayCheckingMenu() 
    await HomePage.accessNewCheckingForm()
    await expect(HomePage.checkingTitle).toHaveText('Create Checking')
})
it('Should take you to Checkings View', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessViewCheckingForm()
    await expect(HomePage.checkingTitle).toHaveText('View Checking Accounts')
})
it('Should see the three pages going forwards and backwards', async ()=> {
    await CheckingPage.changeCheckingFormPageNext()
    await expect(CheckingPage.checkingTableTextInfo).toHaveText('Showing 11 to 20 of 24 entries')
    await CheckingPage.changeCheckingFormPageNext()
    await expect(CheckingPage.checkingTableTextInfo).toHaveText('Showing 21 to 24 of 24 entries')
    await CheckingPage.changeCheckingFormPagePrevious()
    await expect(CheckingPage.checkingTableTextInfo).toHaveText('Showing 11 to 20 of 24 entries')
    await CheckingPage.changeCheckingFormPagePrevious()
    await expect(CheckingPage.checkingTableTextInfo).toHaveText('Showing 1 to 10 of 24 entries')
})
it('Should filter the table with the word "Income"', async ()=> {
    await CheckingPage.sendText(CheckingPage.checkingSearchInput, 'Income')
    await expect(CheckingPage.checkingTableTextInfo).toHaveTextContaining('(filtered from 24 total entries)')
})
it('Should reset the data', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessNewCheckingForm()
    await CheckingPage.sendText(CheckingPage.checkingNameInput, '1234')
    await CheckingPage.checkingReset()
    await expect(CheckingPage.checkingNameInput).toHaveText('')
})
it('Should create a Standard Individual Checking', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessNewCheckingForm()
    await CheckingPage.chooseStandardChecking()
    await CheckingPage.chooseIndividualChecking()
    await CheckingPage.sendText(CheckingPage.checkingNameInput, 'Standard Individual Checking')
    await CheckingPage.sendText(CheckingPage.checkingDepositInput, '25')
    await CheckingPage.checkingSubmit()
    await expect(CheckingPage.newCheckingConfirmation).toBeDisplayed()
})
it('Should switch checking', async ()=> {
    await CheckingPage.activateSwitchChecking()
    await expect(CheckingPage.checkingBody).toBeDisplayed()
})
it('Should create a Standard Joint Checking', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessNewCheckingForm()
    await CheckingPage.chooseStandardChecking()
    await CheckingPage.chooseJointChecking()
    await CheckingPage.sendText(CheckingPage.checkingNameInput, 'Standard Joint Checking')
    await CheckingPage.sendText(CheckingPage.checkingDepositInput, '50.47')
    await CheckingPage.checkingSubmit()
    await expect(CheckingPage.newCheckingConfirmation).toBeDisplayed()
})
it('Should create a Interest Individual Checking', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessNewCheckingForm()
    await CheckingPage.chooseInterestChecking()
    await CheckingPage.chooseIndividualChecking()
    await CheckingPage.sendText(CheckingPage.checkingNameInput, 'Interest Individual Checking')
    await CheckingPage.sendText(CheckingPage.checkingDepositInput, '1000000')
    await CheckingPage.checkingSubmit()
    await expect(CheckingPage.newCheckingConfirmation).toBeDisplayed()
})
it('Should create a Interest Joint Checking', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessNewCheckingForm()
    await CheckingPage.chooseInterestChecking()
    await CheckingPage.chooseJointChecking()
    await CheckingPage.sendText(CheckingPage.checkingNameInput, 'Interest Joint Checking')
    await CheckingPage.sendText(CheckingPage.checkingDepositInput, '10000000')
    await CheckingPage.checkingSubmit()
    await expect(CheckingPage.newCheckingConfirmation).toBeDisplayed()
})
it('Should not create a checking because the deposit is less than 25', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessNewCheckingForm()
    await CheckingPage.chooseStandardChecking()
    await CheckingPage.chooseIndividualChecking()
    await CheckingPage.sendText(CheckingPage.checkingNameInput, 'Error')
    await CheckingPage.sendText(CheckingPage.checkingDepositInput, '24.99')
    await CheckingPage.checkingSubmit()
    await expect(CheckingPage.newCheckingErrorText).toBeDisplayed()
})
});