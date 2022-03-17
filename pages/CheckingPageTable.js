import BasePage from './BasePage';

class CheckingPageTable extends BasePage {
    
    get newCheckingConfirmation () {return $('#new-account-conf-alert')}

    get switchChecking () { return $('//*[contains(text(),"Individual Checking")]//ancestor::div[@class="card-body"]//span[@class="switch-handle"]')}

    get switchChecked () { return $('//*[contains(text(),"Individual Checking")]//ancestor::div[@class="card-body"]//input[@class="switch-input"]')}

    get checkingTransactionsTableNextButton () {return $('#transactionTable_next')}

    get checkingTransactionsTablePreviousButton () {return $('#transactionTable_previous')}

    get checkingTableTextInfo(){return $('#transactionTable_info')}

    async getDeposit(){
        return $(`#transactionTable>tbody>tr:nth-child(1)>td:nth-child(4)`)
    }

    async getCellFromRow(row){
        return $(`#transactionTable>tbody>tr:nth-child(${row})>td:nth-child(2)`)
    }

    async getTableNumberOfRows(){
        let rows = await $$("tbody > tr");
        return rows.length
    }

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