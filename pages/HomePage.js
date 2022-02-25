import BasePage from '../pages/BasePage';

class HomePage extends BasePage {

  //WebElements
  get title(){ return $('#page-title') }

  get userConf() { return $('img[alt="User Avatar"]')};

  get logOut() {return $('a[href="/bank/logout"]')}


  async settings() {
    await this.userConf.click()
  }

  async loggingOut() {
    await this.logOut.click()
  }
  
}
export default new HomePage();