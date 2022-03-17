import BasePage from './BasePage';

class DepositForm extends BasePage {
    
    get selectDepositAccount(){return $('#selectedAccount')}

    get depositAmount () {return $('#amount')}

    get accountBalance () {return $('#selectedAccountBalance')}

    get submitButton() {return $("button=Submit");}

    get newDepositFormResetButton () {return $('[type="reset"]')}

    async resetingDepositForm () {
        await this.newDepositFormResetButton.click()
    }
    async selectDepositAccount (accountName){
        await $('#selectedAccount').selectByVisibleText(accountName)
    }
    async clickSubmitButton() {
        await this.clickElement(this.submitButton);
      }
    async createDeposit (accountName, amount){
        await this.selectDepositAccount(accountName);
        await super.sendText (this.depositAmount, amount);
        await this.clickSubmitButton();
      }
}
export default new DepositForm();