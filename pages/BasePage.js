const PAGE_TIMEOUT = 10000
export default class BasePage {

  get pageTitle () { return $('#page-title') }

  /**
   * Abrir página
   * @param {String} ruta a la cual acceder
   */
   async open(route) {
    await browser.url(route);
    }

  /**
   * Esperar a que un elemento sea clickeable y hacer click
   * @param {Object} elemento a clickear
   */
  async clickElement(element) {
      await element.waitForClickable({ timeout: PAGE_TIMEOUT });
      await element.click();
  }

  async getBrowserCookies() {
    return browser.getCookies();
}

  async sendText(element, text){
    await element.waitForClickable({ timeout: PAGE_TIMEOUT });
    await element.setValue(text);
  }

}