import HomePage from "../pages/HomePage";
import SignIn from "../pages/SignIn";
import CheckingPageForm from "../pages/CheckinPageForm"
import CheckingPageTable from "../pages/CheckingPageTable";
import CorrectCheckings from "../datos/CorrectCheckings";
import IncorrectCheckings from "../datos/IncorrectCheckings"

beforeEach(async () => {
    await SignIn.open('bank');
    let username = 'jsmith@demo.io';
    let password = 'Demo123!';
    await SignIn.logIn(username, password);
});
describe('Checkings', () => {
it('Should take you to Checkings form', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessNewCheckingForm()
    await expect(CheckingPageForm.checkingTitle).toHaveText('Create Checking')
})
it('Should take you to Checkings View', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessViewCheckingTable()
    await expect(CheckingPageTable.checkingTitle).toHaveText('View Checking Accounts')
})
it('Should see the three pages going forwards and backwards', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessViewCheckingTable()
    await CheckingPageTable.changeCheckingTransactionsTableNext()
    await expect(CheckingPageTable.checkingTableTextInfo).toHaveText('Showing 11 to 20 of 24 entries')
    await CheckingPageTable.changeCheckingTransactionsTableNext()
    await expect(CheckingPageTable.checkingTableTextInfo).toHaveText('Showing 21 to 24 of 24 entries')
    await CheckingPageTable.changeCheckingTransactionsTablePrevious()
    await expect(CheckingPageTable.checkingTableTextInfo).toHaveText('Showing 11 to 20 of 24 entries')
    await CheckingPageTable.changeCheckingTransactionsTablePrevious()
    await expect(CheckingPageTable.checkingTableTextInfo).toHaveText('Showing 1 to 10 of 24 entries')
})
it('Should filter the table with the word "Income"', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessViewCheckingTable()
    await CheckingPageTable.sendText(CheckingPageTable.checkingSearchInput, 'Income')
    const rows = await $$('#transactionTable tr');
    const columns = await rows[1,2,3,4].$$('td');
    await expect(columns[1]).toHaveText('Income'); 
})
it('Should reset the account creation form when clicking reset', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessNewCheckingForm()
    await CheckingPageForm.sendText(CheckingPageForm.checkingNameInput, '1234')
    await CheckingPageForm.checkingReset()
    await expect(CheckingPageForm.checkingNameInput).toHaveText('')
})
CorrectCheckings.forEach(({type, ownership, name, amount, reason}) => {
    it(`Should create a  ${reason}`, async () => {
        await HomePage.displayCheckingMenu() 
        await HomePage.accessNewCheckingForm()
        await CheckingPageForm.createChecking(type, ownership, name, amount)
        await expect(CheckingPageTable.newCheckingConfirmation).toBeDisplayed()
    })
    });

//it('Should switch checking', async ()=> {
  //  await HomePage.displayCheckingMenu() 
  //  await HomePage.accessViewCheckingForm()
  //  await CheckingPageTable.activateSwitchChecking()
  //  await expect(CheckingPageTable.checkingBody).toBeDisplayed()
//})
IncorrectCheckings.forEach(({type, ownership, name, amount, reason}) => {
it(`Should not create a checking ${reason}`, async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessNewCheckingForm()
    await CheckingPageForm.createChecking(type, ownership, name, amount)
    await expect(CheckingPageForm.standardCheckingButton).toBePresent()
})
});
});