import HomePage from "../pages/HomePage";
import SignIn from "../pages/SignIn";
import CheckingPageTable from "../pages/CheckingPageTable";
import DepositPage from "../pages/DepositPage";
import SavingsTable from "../pages/SavingsTable";
import {validSavingsDeposit, validCheckingsDeposit, invalidDeposits} from "../datos/Deposits"


describe('Deposits', () => {
    beforeEach(async () => {
            await SignIn.open('bank/login');
            let username = 'jsmith@demo.io';
            let password = 'Demo123!';
            await SignIn.logIn(username, password);
    });
    it('Should take you to the Deposit form', async ()=> {
        await HomePage.accessNewDepositForm()
        await expect(DepositPage.pageTitle).toHaveText('Deposit')
    })
    it('Should show the balance when selecting Individual Checking', async ()=> {
        await HomePage.accessNewDepositForm()
        await DepositPage.selectDepositAccount('Individual Checking (Standard Checking)')
        await expect(DepositPage.accountBalance).toBeDisplayed();
    })
    it('Should show the balance when selecting Individual Savings', async ()=> {
        await HomePage.accessNewDepositForm()
        await DepositPage.selectDepositAccount('Indiviudal Savings (Money Market)')
        await expect(DepositPage.accountBalance).toBeDisplayed();
    })
    it('Should reset the deposit creation form when clicking the reset button', async ()=> {
        await HomePage.accessNewDepositForm()
        await DepositPage.sendText(DepositPage.depositAmount, '10')
        await DepositPage.resetDepositForm()
        await expect(DepositPage.depositAmount).toHaveText('')
    }) 
    validCheckingsDeposit.forEach((account) => {
            it(`Should create a deposit of ${deposit.amount} in the ${deposit.accountName} account`, async () => {
                await HomePage.accessNewDepositForm()
                await DepositPage.createDeposit(account.name, account.amount)
                await expect(CheckingPageTable.amountCell).toHaveTextContaining(`${account.amount}`)
            })
            });
    validSavingsDeposit.forEach((account) => {
        it(`Should create a deposit of ${deposit.amount} in the ${deposit.accountName} account`, async () => {
            await HomePage.accessNewDepositForm()
            await DepositPage.createDeposit(account.name, account.amount)
            await expect(SavingsTable.amountCell).toHaveTextContaining(`${account.amount}`)
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
            await expect(DepositPage.depositAmount).toBePresent()
        })
        });
    });