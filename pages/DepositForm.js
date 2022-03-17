import BasePage from './BasePage';

class DepositForm extends BasePage {
    
    get selectDepositAccount(){return $('#selectedAccount')}

    get depositAmount () {return $('#amount')}

    get newDepositFormSubmitButton () {return $('#submit')}

    get newDepositFormResetButton () {return $('#reset')}


}
export default new DepositForm();