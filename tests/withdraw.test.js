import HomePage from "../pages/HomePage";
import SignIn from "../pages/SignIn";
import CheckingTable from "../pages/CheckingTable";
import DepositPage from "../pages/DepositPage";
import SavingsTable from "../pages/SavingsTable";
import WithdrawPage from "../pages/WithdrawPage";



describe('Withdrawals', () => {
    beforeEach(async () => {
            await SignIn.open('/login');
            let username = 'jsmith@demo.io';
            let password = 'Demo123!';
            await SignIn.logIn(username, password);
    });
    it('Should take you to the Withdraw form', async ()=> {
        await HomePage.accessNewWithdrawForm()
        await expect(DepositPage.pageTitle).toHaveText('Withdraw')
    })
    it('Should show the balance when selecting Individual Checking', async ()=> {
        await HomePage.accessNewDepositForm()
        await WithdrawPage.selectDepositAccount('Individual Checking (Standard Checking)')
        await expect(WithdrawPage.accountBalance).toBeDisplayed();
    })
    it('Should show the balance when selecting Individual Savings', async ()=> {
        await HomePage.accessNewDepositForm()
        await WithdrawPage.selectDepositAccount('Indiviudal Savings (Money Market)')
        await expect(WithdrawPage.accountBalance).toBeDisplayed();
    })
    it('Should reset the deposit creation form when clicking the reset button', async ()=> {
        await HomePage.accessNewDepositForm()
        await DepositPage.sendText(DepositPage.depositAmount, '10')
        await DepositPage.resetDepositForm()
        await expect(DepositPage.depositAmount).toHaveText('')
    }) 
    validDeposits.forEach((deposit) => {
            it(`Should create a deposit of ${deposit.amount} in the ${deposit.accountName} account`, async () => {
                await HomePage.accessNewDepositForm()
                await DepositPage.createDeposit(deposit.name, deposit.amount)
                if (deposit.type == "Checking"){
                    await expect(CheckingTable.amountCell).toHaveTextContaining(`${deposit.amount}`)
                } else {
                    await expect(SavingsTable.amountCell).toHaveTextContaining(`${deposit.amount}`)
                }
                
            })
            });
    it('Should not create a deposit when an account is not selected', async ()=> {
        await HomePage.accessNewDepositForm()
        await DepositPage.sendText(DepositPage.depositAmount, '10')
        await DepositPage.clickSubmitButton()
        await expect(DepositPage.depositAmount).toBePresent()
    }) 

    invalidDeposits.forEach((account) => {
        it(`Should not create a deposit of ${deposit.amount} in the ${deposit.accountName} account`, async () => {
            await HomePage.accessNewDepositForm()
            await DepositPage.createDeposit(account.name, account.amount)
            await expect(DepositPage.$('#selectedAccount')).toHaveText('---------- Select Account -----------')
        })
        });
    });