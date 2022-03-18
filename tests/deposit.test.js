import HomePage from "../pages/HomePage";
import SignIn from "../pages/SignIn";
import CheckingPageTable from "../pages/CheckingPageTable";
import DepositForm from "../pages/DepositForm";
import {accountsSavingsDeposit} from "../datos/CorrectSavingsDeposit";
import {accountsCheckingsDeposit} from "../datos/CorrectCheckingsDeposits";
import {accountsIncorrectDeposit} from "../datos/IncorrectDeposits";
import SavingsTable from "../pages/SavingsTable";


describe('Deposits', () => {
    beforeEach(async () => {
            await SignIn.open('bank/login');
            let username = 'jsmith@demo.io';
            let password = 'Demo123!';
            await SignIn.logIn(username, password);
    });
    it('Should take you to Deposit form', async ()=> {
        await HomePage.accessNewDepositForm()
        await expect(DepositForm.pageTitle).toHaveText('Deposit')
    })
    it('Should show the balance when selecting Individual Checking', async ()=> {
        await HomePage.accessNewDepositForm()
        await DepositForm.selectDepositAccount('Individual Checking (Standard Checking)')
        await expect(DepositForm.accountBalance).toBeDisplayed();
    })
    it('Should show the balance when selecting Individual Savings', async ()=> {
        await HomePage.accessNewDepositForm()
        await DepositForm.selectDepositAccount('Indiviudal Savings (Money Market)')
        await expect(DepositForm.accountBalance).toBeDisplayed();
    })
    it('Should reset the deposit creation form when clicking reset', async ()=> {
        await HomePage.accessNewDepositForm()
        await DepositForm.sendText(DepositForm.depositAmount, '10')
        await DepositForm.resetingDepositForm()
        await expect(DepositForm.depositAmount).toHaveText('')
    }) 
        accountsCheckingsDeposit.forEach((account) => {
            it(`Should create a deposit in the ${account.reason}`, async () => {
                await HomePage.accessNewDepositForm()
                await DepositForm.createDeposit(account.name, account.amount)
                await expect(CheckingPageTable.depositCell).toHaveTextContaining(`${account.amount}`)
            })
            });
        accountsSavingsDeposit.forEach((account) => {
        it(`Should create a deposit in the ${account.reason}`, async () => {
            await HomePage.accessNewDepositForm()
            await DepositForm.createDeposit(account.name, account.amount)
            await expect(SavingsTable.depositCell).toHaveTextContaining(`${account.amount}`)
        })
        });
    it('Should not create a deposit because the account was not selected', async ()=> {
        await HomePage.accessNewDepositForm()
        await DepositForm.sendText(DepositForm.depositAmount, '10')
        await DepositForm.clickSubmitButton()
        await expect(DepositForm.depositAmount).toBePresent()
    }) 

    accountsIncorrectDeposit.forEach((account) => {
        it(`Should not create a deposit in the ${account.reason}`, async () => {
            await HomePage.accessNewDepositForm()
            await DepositForm.createDeposit(account.name, account.amount)
            await expect(DepositForm.depositAmount).toBePresent()
        })
        });
    });