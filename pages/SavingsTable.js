import AccountTable from './AccountTable';

class SavingsTable extends AccountTable {

    get switchSaving () { return $('//*[contains(text(),"Indiviudal Savings")]//ancestor::div[@class="card-body"]//span[@class="switch-handle"]')}

    get switchChecked () { return $('//*[contains(text(),"Indiviudal Savings")]//ancestor::div[@class="card-body"]//input[@class="switch-input"]')}

    async getCellFromRow(row){
        return $(`#transactionTable>tbody>tr:nth-child(${row})>td:nth-child(3)`)
    }
    async activateSwitchSaving (){
        await this.switchSaving.click()
    }
}
export default new SavingsTable();