import BasePage from '../pages/BasePage';

class SignIn extends BasePage {

  //WebElements
  get usernameInput(){ return $('[name="username"]') }
  
  get passwordInput() {return $('[name="password"]')}

  get submitbtn() {return $('#submit')};

  get signInErrorText() { return $('.alert-danger'); }

  get checkbox() {return $('#remember-me')};

  get signUpForm() {return $('a[href="/bank/signup"]')}

  get logo() {return $('a[href="/bank/home"]')}


  async logIn (username, password){
    await super.sendText (this.usernameInput, username);
    await super.sendText (this.passwordInput, password);
    await super.clickElement(this.submitbtn);
  }

  async submit () {
    await this.submitbtn.click();
  }
  
  async activateRememberMeOption() {
    await this.checkbox.click();
   }

  async goSignUp() {
    await this.signUpForm.click();
   }

   async goSignIn() {
     await this.logo.click();
   }
  }
  
export default new SignIn();