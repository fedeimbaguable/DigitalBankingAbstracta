import BasePage from '../pages/BasePage';

class SignUp extends BasePage {

  //WebElements
  get headerSignUp() {return $('strong')}

  get signInForm() {return $('a[href="/bank/login"]')}


  async irSignIn() {
  await this.signInForm.click();
   }


  }
  
export default new SignUp();