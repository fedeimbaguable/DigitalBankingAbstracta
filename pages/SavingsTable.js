import BasePage from './BasePage';

class SavingsTable extends BasePage {
    
    get newSavingConfirmation () {return $('#new-account-conf-alert')}

    get switchSaving () { return $('//*[contains(text(),"Indiviudal Savings")]//ancestor::div[@class="card-body"]//span[@class="switch-handle"]')}

    get switchChecked () { return $('//*[contains(text(),"Indiviudal Savings")]//ancestor::div[@class="card-body"]//input[@class="switch-input"]')}

    get savingSearchInput(){ return $('[type="search"]') }

    get savingTitle () { return $('#page-title') }

    async getCellFromRow(row){
        return $(`#transactionTable>tbody>tr:nth-child(${row})>td:nth-child(3)`)
    }

    async getTableNumberOfRows(){
        let rows = await $$("tbody > tr");
        return rows.length
    }


    async activateSwitchSaving (){
        await this.switchSaving.click()
    }
}
export default new SavingsTable();