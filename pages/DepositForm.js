import BasePage from './BasePage';

class DepositForm extends BasePage {
    
    get selectDepositAccount(){return $('#selectedAccount')}

    get depositAmount () {return $('#amount')}


}
export default new DepositForm();