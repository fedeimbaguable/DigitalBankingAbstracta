import AccountForm from './AccountForm';

class SavingsForm extends AccountForm {

    get savingsSavingsButton (){return $('label[for="Savings"]')}

    get moneyMarketSavingsButton (){return $('label[for="Money Market"]')}
  
    get newSavingsFormSubmitButton () {return $('#newSavingsSubmit')}

    get newSavingsFormResetButton () {return $('#newSavingsReset')}


    async createSaving (type, ownership, name, amount){
        await super.clickElement(type === "savings" ? await this.savingsSavingsButton : await this.moneyMarketSavingsButton);
        await super.clickElement(ownership === "individual" ? await this.individualButton : await this.jointButton);
        await super.sendText (this.nameInput, name);
        await super.sendText (this.depositInput, amount);
        await super.clickElement(this.newSavingsFormSubmitButton);
      }
    async savingsReset (){
        await this.newSavingsFormResetButton.click()
    }
    async savingsSubmit (){
        await this.newSavingsFormSubmitButton.click()
    }
}
export default new SavingsForm();