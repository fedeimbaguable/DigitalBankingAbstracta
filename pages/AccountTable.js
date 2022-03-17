import BasePage from './BasePage';

class AccountTable extends BasePage {

    get newConfirmationText () {return $('#new-account-conf-alert')}

    get searchTableInput(){ return $('[type="search"]') }

    get depositCell(){return $('#transactionTable>tbody>tr:nth-child(1)>td:nth-child(4)')}

    async getTableNumberOfRows(){
        let rows = await $$("tbody > tr");
        return rows.length
    }

}
export default AccountTable;