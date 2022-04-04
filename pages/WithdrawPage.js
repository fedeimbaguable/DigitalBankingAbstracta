import BasePage from './BasePage';

class DepositPage extends BasePage {
    get depositAccountSelect(){return $('#selectedAccount')}

    get accountBalance () {return $('#selectedAccountBalance')}

    async selectDepositAccount (accountName){
        await $('#selectedAccount').selectByVisibleText(accountName)
    }

}
export default new DepositPage();