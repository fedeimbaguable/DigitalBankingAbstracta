import AccountForm from './AccountForm';

class SavingsForm extends AccountForm {

    get savingsSavingsButton (){return $('label[for="Savings"]')}

    get moneyMarketSavingsButton (){return $('label[for="Money Market"]')}
  
    get savingsNameInput (){return $('#name')}
  
    get newSavingsFormSubmitButton () {return $('#newSavingsSubmit')}

    get newSavingsFormResetButton () {return $('#newSavingsReset')}

    get newSavingsErrorText () {return $('#new-account-error-msg')}

    get savingsTitle () { return $('#page-title') }


    async createSaving (type, ownership, name, amount){
        await super.clickElement(type === "savings" ? await this.savingsSavingsButton : await this.moneyMarketSavingsButton);
        await super.clickElement(ownership === "individual" ? await this.individualButton : await this.jointButton);
        await super.sendText (this.nameInput, name);
        await super.sendText (this.depositInput, amount);
        await super.clickElement(this.newSavingsFormSubmitButton);
      }

    async chooseSavings () {
        await this.savingsSavingsButton.click()
    }
    async chooseMoneyMarket () {
        await this.moneyMarketSavingsButton.click()
    }
    async chooseIndividual () {
        await this.individualButton.click()
    }
    async chooseJoint () {
        await this.jointButton.click()
    }
    async savingsReset (){
        await this.newSavingsFormResetButton.click()
    }
    async savingsSubmit (){
        await this.newSavingsFormSubmitButton.click()
    }
}
export default new SavingsForm();