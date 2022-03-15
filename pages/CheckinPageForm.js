import AccountForm from './AccountForm';

class CheckingPageForm extends AccountForm {

    get standardCheckingButton (){return $('label[for="Standard Checking"]')}

    get interestCheckingButton (){return $('label[for="Interest Checking"]')}
  
    get newCheckingFormSubmitButton () {return $('#newCheckingSubmit')}

    get newCheckingFormResetButton () {return $('#newCheckingReset')}


    async createChecking (type, ownership, name, amount){
        await super.clickElement(type === "standard" ? await this.standardCheckingButton : await this.interestCheckingButton);
        await super.clickElement(ownership === "individual" ? await this.individualButton : await this.jointButton);
        await super.sendText (this.nameInput, name);
        await super.sendText (this.depositInput, amount);
        await super.clickElement(this.newCheckingFormSubmitButton);
      }

    async chooseStandardChecking () {
        await this.standardCheckingButton.click()
    }
    async chooseInterestChecking () {
        await this.interestCheckingButton.click()
    }
    async checkingReset (){
        await this.newCheckingFormResetButton.click()
    }
    async checkingSubmit (){
        await this.newCheckingFormSubmitButton.click()
    }
}
export default new CheckingPageForm();