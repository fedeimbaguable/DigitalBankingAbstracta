import BasePage from './BasePage';

class TransactionsTable extends BasePage {

    get newConfirmationText () {return $('#new-account-conf-alert')}

    get searchInput(){ return $('[type="search"]') }

    get amountCell(){return $('#transactionTable>tbody>tr:nth-child(1)>td:nth-child(4)')}

    async getNumberOfRows(){
        let rows = await $$("tbody > tr");
        return rows.length
    }

}
export default TransactionsTable;