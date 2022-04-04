import BasePage from '../pages/BasePage';

class HomePage extends BasePage {

  //WebElements
  get title(){ return $('#page-title') }

  get userAvatar() { return $('img[alt="User Avatar"]')};

  get logOutButton() {return $('a[href="/bank/logout"]')};

  get newWithdrawMenuItem () {return $('#withdraw-menu-item')};

  get newCheckingMenuItem () {return $('#new-checking-menu-item')};

  get newDepositMenuItem () {return $('#deposit-menu-item')};

  get viewCheckingMenuItem () {return $('#checking-menu')};

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
  async accessNewWithdrawForm () {
    await this.newWithdrawMenuItem.click()
  }
  async accessNewDepositForm () {
    await this.newDepositMenuItem.click()
  }
  async accessNewSavingsForm () {
    await this.newSavingsForm.click()
  }
  async accessViewCheckingTable () {
    await this.viewCheckingTable.click()
  }
  async displayCheckingMenu () {
    await this.viewCheckingMenuItem.click()
  }
  async accessNewCheckingForm () {
    await this.newCheckingMenuItem.click()
  }
  async accessUserSettings() {
    await this.userAvatar.click()
  }
  async logOut() {
    await this.logOutButton.click()
  }
}
export default new HomePage();