import BasePage from '../pages/BasePage';

class HomePage extends BasePage {

  //WebElements
  get title(){ return $('#page-title') }

  get userAvatar() { return $('img[alt="User Avatar"]')};

  get logOutButton() {return $('a[href="/bank/logout"]')};

  get newCheckingForm () {return $('#new-checking-menu-item')}

  get checkingMenu () {return $('#checking-menu')}

  get checkingTitle () { return $('#page-title') }

  get viewCheckingForm () {return $('#view-checking-menu-item')}


  async accessViewCheckingForm () {
    await this.viewCheckingForm.click()
  }

  async displayCheckingMenu () {
    await this.checkingMenu.click()
  }

  async accessNewCheckingForm () {
    await this.newCheckingForm.click()
  }

  async accessUserSettings() {
    await this.userAvatar.click()
  }

  async logOut() {
    await this.logOutButton.click()
  }
  
}
export default new HomePage();