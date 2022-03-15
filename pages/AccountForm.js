import BasePage from './BasePage';

class AccountForm extends BasePage {

    get individualButton (){return $('#Individual')}
  
    get jointButton (){return $('#Joint')}
  
    get nameInput (){return $('#name')}
  
    get depositInput (){return $('#openingBalance')}

    get newErrorText () {return $('#new-account-error-msg')}

    get formTitle () { return $('#page-title') }

    async chooseIndividual () {
        await this.individualButton.click()
    }
    async chooseJoint () {
        await this.jointButton.click()
    }
}
export default AccountForm;