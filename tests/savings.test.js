import HomePage from "../pages/HomePage";
import SignIn from "../pages/SignIn";
import SavingsForm from "../pages/SavingsForm"
import SavingsTable from "../pages/SavingsTable";
import CorrectSavings from "../datos/CorrectSavings";
import IncorrectCheckings from "../datos/IncorrectSavings"


beforeEach(function () {
    SignIn.open('bank')
    let username = 'jsmith@demo.io'
    let password = 'Demo123!'
    SignIn.logIn(username, password)
});
describe('Savings', () => {
it('Should take you to Savings form', async ()=> {
    await HomePage.displaySavingsMenu() 
    await HomePage.accessNewSavingsForm()
    await expect(SavingsForm.savingsTitle).toHaveText('Create Savings')
})
it('Should take you to Savings View', async ()=> {
    await HomePage.displaySavingsMenu() 
    await HomePage.accessViewSavingsTable()
    await expect(SavingsTable.savingTitle).toHaveText('View Savings Accounts')
})
it('Should filter the table with the word "Interest"', async ()=> {
    await HomePage.displaySavingsMenu() 
    await HomePage.accessViewSavingsTable()
    await SavingsTable.sendText(SavingsTable.savingSearchInput, 'Interest')
    const rows = await $$('#transactionTable tr');
    const columns = await rows[1,2,3,4,5,6].$$('td');
    await expect(columns[2]).toHaveTextContaining('Interest'); 
})
it('Should reset the account creation form when clicking reset', async ()=> {
    await HomePage.displaySavingsMenu() 
    await HomePage.accessNewSavingsForm()
    await SavingsForm.sendText(SavingsForm.savingsNameInput, '1234')
    await SavingsForm.savingsReset()
    await expect(SavingsForm.savingsNameInput).toHaveText('')
})
CorrectSavings.forEach(({type, ownership, name, amount, reason}) => {
    it(`Should create a  ${reason}`, async () => {
        await HomePage.displaySavingsMenu() 
        await HomePage.accessNewSavingsForm()
        await SavingsForm.createSaving(type, ownership, name, amount)
        await expect(SavingsTable.newSavingConfirmation).toBeDisplayed()
    })
    });
IncorrectCheckings.forEach(({type, ownership, name, amount, reason}) => {
    it(`Should not create a saving ${reason}`, async ()=> {
        await HomePage.displaySavingsMenu() 
        await HomePage.accessNewSavingsForm()
        await SavingsForm.createSaving(type, ownership, name, amount)
        await expect(SavingsForm.savingsSavingsButton).toBePresent()
    })
    });
    });