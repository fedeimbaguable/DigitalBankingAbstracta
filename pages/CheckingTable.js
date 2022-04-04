import TransactionsTable from './TransactionsTable';

class CheckingPageTable extends TransactionsTable {

    get checkingTransactionsTableNextButton () {return $('#transactionTable_next')}

    get checkingTransactionsTablePreviousButton () {return $('#transactionTable_previous')}

    get checkingTableTextInfo(){return $('#transactionTable_info')}

    async getCellFromRow(row){
        return $(`#transactionTable>tbody>tr:nth-child(${row})>td:nth-child(2)`)
    }
    async changeCheckingTransactionsTableNext(){
        await this.checkingTransactionsTableNextButton.click()
    }
    async changeCheckingTransactionsTablePrevious(){
        await this.checkingTransactionsTablePreviousButton.click()
    }
    async activateSwitchChecking (accountName){
        await this.clickElement(await this.switch(accountName))
    }
}

export default new CheckingPageTable();