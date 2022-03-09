import BasePage from './BasePage';

class CheckingPageTable extends BasePage {
    
    get newCheckingConfirmation () {return $('#new-account-conf-alert')}

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
}
export default new CheckingPageTable();