import BasePage from '../pages/BasePage';

class HomePage extends BasePage {

  //WebElements
  get title(){ return $('#page-title') }

  get userAvatar() { return $('img[alt="User Avatar"]')};

  get logOutButton() {return $('a[href="/bank/logout"]')};

  get newCheckingForm () {return $('#new-checking-menu-item')};

  get newDepositForm () {return $('#deposit-menu-item')};

  get checkingMenu () {return $('#checking-menu')};

  get viewCheckingTable () {return $('#view-checking-menu-item')};

  get newSavingsForm () {return $('#new-savings-menu-item')};

  get savingsMenu () {return $('#savings-menu')};

  get viewSavingsTable () {return $('#view-savings-menu-item')};

  async accessViewSavingsTable () {
    await this.viewSavingsTable.click()
  }
  async displaySavingsMenu () {
    await this.savingsMenu.click()
  }
  async accessNewDepositForm () {
    await this.newDepositForm.click()
  }
  async accessNewSavingsForm () {
    await this.newSavingsForm.click()
  }
  async accessViewCheckingTable () {
    await this.viewCheckingTable.click()
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