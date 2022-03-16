import HomePage from "../pages/HomePage";
import SignIn from "../pages/SignIn";
import CheckingPageForm from "../pages/CheckinPageForm"
import CheckingPageTable from "../pages/CheckingPageTable";
import CorrectCheckings from "../datos/CorrectCheckings";
import IncorrectCheckings from "../datos/IncorrectCheckings"
import AccountForm from "../pages/AccountForm"


describe('Checkings', () => {
beforeEach(async () => {
        await SignIn.open('bank/login');
        let username = 'jsmith@demo.io';
        let password = 'Demo123!';
        await SignIn.logIn(username, password);
});
it('Should take you to Checkings form', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessNewCheckingForm()
    await expect(CheckingPageForm.formTitle).toHaveText('Create Checking')
})
it('Should take you to Checkings View', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessViewCheckingTable()
    await expect(CheckingPageTable.tableTitle).toHaveText('View Checking Accounts')
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
    await CheckingPageTable.sendText(CheckingPageTable.searchTableInput, 'Income')
    let tableLength = await CheckingPageTable.getTableNumberOfRows();
    let cell;
    for(let i=1; i<= tableLength; i++){
    cell = await CheckingPageTable.getCellFromRow(i);
    await expect(cell).toHaveTextContaining("Income");
} 
})
it('Should reset the account creation form when clicking reset', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessNewCheckingForm()
    await CheckingPageForm.sendText(CheckingPageForm.nameInput, '1234')
    await CheckingPageForm.checkingReset()
    await expect(CheckingPageForm.nameInput).toHaveText('')
})
CorrectCheckings.forEach(({type, ownership, name, amount, reason}) => {
    it(`Should create a  ${reason}`, async () => {
        await HomePage.displayCheckingMenu() 
        await HomePage.accessNewCheckingForm()
        await CheckingPageForm.createChecking(type, ownership, name, amount)
        await expect(CheckingPageTable.newConfirmationText).toBeDisplayed()
    })
    });
it('Should switch checking', async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessViewCheckingTable()
    await CheckingPageTable.activateSwitchChecking()
    await expect(CheckingPageTable.switchChecked).toHaveAttribute('checked', 'true')
})
IncorrectCheckings.forEach(({type, ownership, name, amount, reason}) => {
it(`Should not create a checking ${reason}`, async ()=> {
    await HomePage.displayCheckingMenu() 
    await HomePage.accessNewCheckingForm()
    await CheckingPageForm.createChecking(type, ownership, name, amount)
    await expect(CheckingPageForm.standardCheckingButton).toBePresent()
})
});
});