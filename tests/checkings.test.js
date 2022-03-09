import HomePage from "../pages/HomePage";
import SignIn from "../pages/SignIn";
import CheckingPageForm from "../pages/CheckinPageForm"
import CheckingPageTable from "../pages/CheckingPageTable";
 

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
    await CheckingPageTable.changeCheckingFormPageNext()
    await expect(CheckingPageTable.checkingTableTextInfo).toHaveText('Showing 11 to 20 of 24 entries')
    await CheckingPageTable.changeCheckingFormPageNext()
    await expect(CheckingPageTable.checkingTableTextInfo).toHaveText('Showing 21 to 24 of 24 entries')
    await CheckingPageTable.changeCheckingFormPagePrevious()
    await expect(CheckingPageTable.checkingTableTextInfo).toHaveText('Showing 11 to 20 of 24 entries')
    await CheckingPageTable.changeCheckingFormPagePrevious()
    await expect(CheckingPageTable.checkingTableTextInfo).toHaveText('Showing 1 to 10 of 24 entries')
})
it('Should filter the table with the word "Income"', async ()=> {
    await CheckingPageTable.sendText(CheckingPageTable.checkingSearchInput, 'Income')
    await expect(CheckingPageTable.checkingTableTextInfo).toHaveTextContaining('(filtered from 24 total entries)')
})
it('Should reset the data', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessNewCheckingForm()
    await CheckingPageForm.sendText(CheckingPageForm.checkingNameInput, '1234')
    await CheckingPageForm.checkingReset()
    await expect(CheckingPageForm.checkingNameInput).toHaveText('')
})
it('Should create a Standard Individual Checking', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessNewCheckingForm()
    await CheckingPageForm.chooseStandardChecking()
    await CheckingPageForm.chooseIndividualChecking()
    await CheckingPageForm.sendText(CheckingPageForm.checkingNameInput, 'Standard Individual Checking')
    await CheckingPageForm.sendText(CheckingPageForm.checkingDepositInput, '25')
    await CheckingPageForm.checkingSubmit()
    await expect(CheckingPageTable.newCheckingConfirmation).toBeDisplayed()
})
it('Should switch checking', async ()=> {
    await CheckingPageTable.activateSwitchChecking()
    await expect(CheckingPageTable.checkingBody).toBeDisplayed()
})
it('Should create a Standard Joint Checking', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessNewCheckingForm()
    await CheckingPageForm.chooseStandardChecking()
    await CheckingPageForm.chooseJointChecking()
    await CheckingPageForm.sendText(CheckingPageForm.checkingNameInput, 'Standard Joint Checking')
    await CheckingPageForm.sendText(CheckingPageForm.checkingDepositInput, '50.47')
    await CheckingPageForm.checkingSubmit()
    await expect(CheckingPageTable.newCheckingConfirmation).toBeDisplayed()
})
it('Should create a Interest Individual Checking', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessNewCheckingForm()
    await CheckingPageForm.chooseInterestChecking()
    await CheckingPageForm.chooseIndividualChecking()
    await CheckingPageForm.sendText(CheckingPageForm.checkingNameInput, 'Interest Individual Checking')
    await CheckingPageForm.sendText(CheckingPageForm.checkingDepositInput, '1000000')
    await CheckingPageForm.checkingSubmit()
    await expect(CheckingPageTable.newCheckingConfirmation).toBeDisplayed()
})
it('Should create a Interest Joint Checking', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessNewCheckingForm()
    await CheckingPageForm.chooseInterestChecking()
    await CheckingPageForm.chooseJointChecking()
    await CheckingPageForm.sendText(CheckingPageForm.checkingNameInput, 'Interest Joint Checking')
    await CheckingPageForm.sendText(CheckingPageForm.checkingDepositInput, '10000000')
    await CheckingPageForm.checkingSubmit()
    await expect(CheckingPageTable.newCheckingConfirmation).toBeDisplayed()
})
it('Should not create a checking because the deposit is less than 25', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessNewCheckingForm()
    await CheckingPageForm.chooseStandardChecking()
    await CheckingPageForm.chooseIndividualChecking()
    await CheckingPageForm.sendText(CheckingPageForm.checkingNameInput, 'Error')
    await CheckingPageForm.sendText(CheckingPageForm.checkingDepositInput, '24.99')
    await CheckingPageForm.checkingSubmit()
    await expect(CheckingPageForm.newCheckingErrorText).toBeDisplayed()
})
});