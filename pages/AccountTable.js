import BasePage from './BasePage';

class AccountTable extends BasePage {

    get newConfirmationText () {return $('#new-account-conf-alert')}

    get tableTitle () { return $('#page-title') }

    get searchTableInput(){ return $('[type="search"]') }

    async getTableNumberOfRows(){
        let rows = await $$("tbody > tr");
        return rows.length
    }

}
export default AccountTable;