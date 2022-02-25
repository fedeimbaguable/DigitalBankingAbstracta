import BasePage from '../pages/BasePage';

class SignIn extends BasePage {

  //WebElements
  get username(){ return $('[name="username"]') }
  
  get password() {return $('[name="password"]')}

  get submitbtn() {return $('#submit')};

  get text() {return $('span')};

  get checkbox() {return $('#remember-me')};

  get signUpForm() {return $('a[href="/bank/signup"]')}

  get logo() {return $('a[href="/bank/home"]')}

  get headerSignIn() {return $('strong')}
    
  async submit() {
    await this.submitbtn.click();
  }
  
  async remember() {
    await this.checkbox.click();
   }

  async irSignUp() {
    await this.signUpForm.click();
   }

   async irSignIn() {
     await this.logo.click();
   }
  }
  
export default new SignIn();