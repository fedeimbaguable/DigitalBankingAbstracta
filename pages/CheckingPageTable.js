import BasePage from './BasePage';

class CheckingPageTable extends BasePage {
    
    get newCheckingConfirmation () {return $('#new-account-conf-alert')}

    get switchChecking () { return $('.switch-label')}

    get checkingBody () { return $('.even')}

    get checkingTransactionsTableNextButton () {return $('#transactionTable_next')}

    get checkingTransactionsTablePreviousButton () {return $('#transactionTable_previous')}

    get checkingTableTextInfo(){return $('#transactionTable_info')}

    get checkingSearchInput(){ return $('[type="search"]') }

    async changeCheckingTransactionsTableNext(){
        await this.checkingTransactionsTableNextButton.click()
    }
    async changeCheckingTransactionsTablePrevious(){
        await this.checkingTransactionsTablePreviousButton.click()
    }
    async activateSwitchChecking (){
        await this.switchChecking.click()
    }
}
export default new CheckingPageTable();