import TransactionsTable from './TransactionsTable';

class SavingsTable extends TransactionsTable {

    async getCellFromRow(row){
        return $(`#transactionTable>tbody>tr:nth-child(${row})>td:nth-child(3)`)
    }
    async activateSwitchSaving (accountName){
        await this.clickElement(await this.switch(accountName))
    }
}
export default new SavingsTable();