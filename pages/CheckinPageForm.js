import BasePage from './BasePage';

class CheckingPageForm extends BasePage {

    get standardCheckingButton (){return $('label[for="Standard Checking"]')}

    get interestCheckingButton (){return $('label[for="Interest Checking"]')}
  
    get individualCheckingButton (){return $('#Individual')}
  
    get jointCheckingButton (){return $('#Joint')}
  
    get checkingNameInput (){return $('#name')}
  
    get checkingDepositInput (){return $('#openingBalance')}
  
    get newCheckingFormSubmitButton () {return $('#newCheckingSubmit')}

    get newCheckingFormResetButton () {return $('#newCheckingReset')}

    get newCheckingErrorText () {return $('#new-account-error-msg')}

    get checkingTitle () { return $('#page-title') }


    async createChecking (type, ownership, name, amount){
        await super.clickElement(type === "standard" ? await this.standardCheckingButton : await this.interestCheckingButton);
        await super.clickElement(ownership === "individual" ? await this.individualCheckingButton : await this.jointCheckingButton);
        await super.sendText (this.checkingNameInput, name);
        await super.sendText (this.checkingDepositInput, amount);
        await super.clickElement(this.newCheckingFormSubmitButton);
      }

    async chooseStandardChecking () {
        await this.standardCheckingButton.click()
    }
    async chooseInterestChecking () {
        await this.interestCheckingButton.click()
    }
    async chooseIndividualChecking () {
        await this.individualCheckingButton.click()
    }
    async chooseJointChecking () {
        await this.jointCheckingButton.click()
    }
    async checkingReset (){
        await this.newCheckingFormResetButton.click()
    }
    async checkingSubmit (){
        await this.newCheckingFormSubmitButton.click()
    }
}
export default new CheckingPageForm();