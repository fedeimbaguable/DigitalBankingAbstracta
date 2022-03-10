import BasePage from './BasePage';

class CheckingPageTable extends BasePage {
    
    get newCheckingConfirmation () {return $('#new-account-conf-alert')}

    get switchChecking () { return $('//*[contains(text(),"Individual Checking")]//ancestor::div[@class="card-body"]//span[@class="switch-handle"]')}

    get switchChecked () { return $('//*[contains(text(),"Individual Checking")]//ancestor::div[@class="card-body"]//input[@class="switch-input"]')}

    get checkingTransactionsTableNextButton () {return $('#transactionTable_next')}

    get checkingTransactionsTablePreviousButton () {return $('#transactionTable_previous')}

    get checkingTableTextInfo(){return $('#transactionTable_info')}

    get getCellFromForRow(){return $(`#transactionTable>tbody>tr:nth-child(${row})>td:nth-child(2)`)}

    get getTableNumberOfRows(){return $('tbody')}

    get checkingSearchInput(){ return $('[type="search"]') }

    get checkingTitle () { return $('#page-title') }

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