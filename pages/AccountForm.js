import BasePage from './BasePage';

class AccountForm extends BasePage {

    get individualButton (){return $('#Individual')}
  
    get jointButton (){return $('#Joint')}
  
    get nameInput (){return $('#name')}
  
    get depositInput (){return $('#openingBalance')}
}
export default AccountForm;