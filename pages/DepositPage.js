import BasePage from './BasePage';

class DepositPage extends BasePage {
    
    get depositAccountSelector(){return $('#selectedAccount')}

    get depositAmount () {return $('#amount')}

    get accountBalance () {return $('#selectedAccountBalance')}

    get submitButton() {return $("button=Submit");}

    get resetButton () {return $('[type="reset"]')}

    async resetDepositForm () {
        await this.resetButton.click()
    }
    async selectDepositAccount (accountName){
        await $('#selectedAccount').selectByVisibleText(accountName)
    }
    async clickSubmitButton() {
        await this.clickElement(this.submitButton);
      }
    async createDeposit (accountName, amount){
        await this.selectDepositAccount(accountName);
        await super.sendText(this.depositAmount, amount);
        await this.clickSubmitButton();
      }
}
export default new DepositPage();