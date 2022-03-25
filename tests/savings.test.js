import HomePage from "../pages/HomePage";
import SignIn from "../pages/SignIn";
import SavingsForm from "../pages/SavingsForm"
import SavingsTable from "../pages/SavingsTable";
import CorrectSavings from "../datos/CorrectSavings";
import IncorrectCheckings from "../datos/IncorrectSavings"



describe('Savings', () => {
beforeEach(async () => {
    await SignIn.open('login');
    let username = 'jsmith@demo.io';
    let password = 'Demo123!';
    await SignIn.logIn(username, password);
});
it.only('Should take you to Savings form', async ()=> {
    await HomePage.displaySavingsMenu() 
    await HomePage.accessNewSavingsForm()
    await expect(SavingsForm.pageTitle).toHaveText('Create Savings')
})
it('Should take you to Savings View', async ()=> {
    await HomePage.displaySavingsMenu() 
    await HomePage.accessViewSavingsTable()
    await expect(SavingsTable.pageTitle).toHaveText('View Savings Accounts')
})
it('Should filter the table with the word "Interest"', async ()=> {
    await HomePage.displaySavingsMenu() 
    await HomePage.accessViewSavingsTable()
    await SavingsTable.sendText(SavingsTable.searchInput, 'Interest')
    let tableLength = await SavingsTable.getNumberOfRows();
    let cell;
    for(let i=1; i<= tableLength; i++){
    cell = await SavingsTable.getCellFromRow(i);
    await expect(cell).toHaveTextContaining("Interest");
} 
})
it('Should reset the account creation form when clicking reset', async ()=> {
    await HomePage.displaySavingsMenu() 
    await HomePage.accessNewSavingsForm()
    await SavingsForm.sendText(SavingsForm.nameInput, '1234')
    await SavingsForm.savingsReset()
    await expect(SavingsForm.nameInput).toHaveText('')
})
CorrectSavings.forEach(({type, ownership, name, amount, reason}) => {
    it(`Should create a  ${reason}`, async () => {
        await HomePage.displaySavingsMenu() 
        await HomePage.accessNewSavingsForm()
        await SavingsForm.createSaving(type, ownership, name, amount)
        await expect(SavingsTable.newConfirmationText).toBeDisplayed()
    })
    });
it('Should switch checking', async ()=> {
    const accountName = "Indiviudal Savings"
    await HomePage.displaySavingsMenu() 
    await HomePage.accessViewSavingsTable()
    await SavingsTable.activateSwitchSaving(accountName)
    await expect(SavingsTable.switch(accountName)).toHaveAttribute('checked', 'true')
})
IncorrectCheckings.forEach(({type, ownership, name, amount, reason}) => {
    it(`Should not create a saving ${reason}`, async ()=> {
        await HomePage.displaySavingsMenu() 
        await HomePage.accessNewSavingsForm()
        await SavingsForm.createSaving(type, ownership, name, amount)
        await expect(SavingsForm.savingsSavingsButton).toBePresent()
    })
    });
    });