import BasePage from './BasePage';

class SavingsTable extends BasePage {
    
    get newSavingConfirmation () {return $('#new-account-conf-alert')}

    get switchSaving () { return $('.switch-label')}

    get savingsBody () { return $('.even')}

    get savingSearchInput(){ return $('[type="search"]') }

    get savingTitle () { return $('#page-title') }

    async activateSwitchSaving (){
        await this.switchSaving.click()
    }
}
export default new SavingsTable();