import BasePage from '../pages/BasePage';

class CheckingPage extends BasePage {

    get standardCheckingButton (){return $('label[for="Standard Checking"]')}

    get interestCheckingButton (){return $('label[for="Interest Checking"]')}
  
    get individualCheckingButton (){return $('#Individual')}
  
    get jointCheckingButton (){return $('#Joint')}
  
    get checkingNameInput (){return $('#name')}
  
    get checkingDepositInput (){return $('#openingBalance')}
  
    get newCheckingFormSubmitButton () {return $('#newCheckingSubmit')}

    get newCheckingFormResetButton () {return $('#newCheckingReset')}

    get newCheckingConfirmation () {return $('#new-account-conf-alert')}

    get newCheckingErrorText () {return $('#new-account-error-msg')}

    get switchChecking () { return $('.switch-label')}

    get checkingBody () { return $('.even')}

    get checkingFormNextButton () {return $('#transactionTable_next')}

    get checkingFormPreviousButton () {return $('#transactionTable_previous')}

    get checkingTableTextInfo(){return $('#transactionTable_info')}

    get checkingSearchInput(){ return $('[type="search"]') }

    async changeCheckingFormPageNext(){
        await this.checkingFormNextButton.click()
    }
    async changeCheckingFormPagePrevious(){
        await this.checkingFormPreviousButton.click()
    }
    async activateSwitchChecking (){
        await this.switchChecking.click()
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
export default new CheckingPage();