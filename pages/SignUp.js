import BasePage from '../pages/BasePage';

class SignUp extends BasePage {

  //WebElements
  get headerSignUp() {return $('.form-control-label')}

  get signInForm() {return $('a[href="/bank/login"]')}


  async goSignIn() {
  await this.signUpForm.click();
   }


  }
  
export default new SignUp();