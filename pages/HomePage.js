import BasePage from '../pages/BasePage';

class HomePage extends BasePage {

  //WebElements
  get title(){ return $('#page-title') }

  get userAvatar() { return $('img[alt="User Avatar"]')};

  get logOutButton() {return $('a[href="/bank/logout"]')}


  async accessUserSettings() {
    await this.userAvatar.click()
  }

  async logOut() {
    await this.logOutButton.click()
  }
  
}
export default new HomePage();