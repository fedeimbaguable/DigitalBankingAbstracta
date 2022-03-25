import TransactionsTable from './TransactionsTable';

class SavingsTable extends TransactionsTable {

    switch (accountName) { return $(`//*[contains(text(),"${accountName}")]//ancestor::div[@class="card-body"]//span[@class="switch-handle"]`)}

    async getCellFromRow(row){
        return $(`#transactionTable>tbody>tr:nth-child(${row})>td:nth-child(3)`)
    }
    async activateSwitchSaving (accountName){
        await this.clickElement(await this.switch(accountName))
    }
}
export default new SavingsTable();