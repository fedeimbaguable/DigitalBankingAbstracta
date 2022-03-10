import BasePage from './BasePage';

class SavingsForm extends BasePage {

    get savingsSavingsButton (){return $('label[for="Savings"]')}

    get moneyMarketSavingsButton (){return $('label[for="Money Market"]')}
  
    get individualSavingsButton (){return $('#Individual')}
  
    get jointSavingsButton (){return $('#Joint')}
  
    get savingsNameInput (){return $('#name')}
  
    get savingsDepositInput (){return $('#openingBalance')}
  
    get newSavingsFormSubmitButton () {return $('#newSavingsSubmit')}

    get newSavingsFormResetButton () {return $('#newSavingsReset')}

    get newSavingsErrorText () {return $('#new-account-error-msg')}

    get savingsTitle () { return $('#page-title') }


    async createSaving (type, ownership, name, amount){
        await super.clickElement(type === "savings" ? await this.savingsSavingsButton : await this.moneyMarketSavingsButton);
        await super.clickElement(ownership === "individual" ? await this.individualSavingsButton : await this.jointSavingsButton);
        await super.sendText (this.savingsNameInput, name);
        await super.sendText (this.savingsDepositInput, amount);
        await super.clickElement(this.newSavingsFormSubmitButton);
      }

    async chooseSavings () {
        await this.savingsSavingsButton.click()
    }
    async chooseMoneyMarket () {
        await this.moneyMarketSavingsButton.click()
    }
    async chooseIndividualSavings () {
        await this.individualSavingsButton.click()
    }
    async chooseJointSavings () {
        await this.jointSavingsButton.click()
    }
    async savingsReset (){
        await this.newSavingsFormResetButton.click()
    }
    async savingsSubmit (){
        await this.newSavingsFormSubmitButton.click()
    }
}
export default new SavingsForm();