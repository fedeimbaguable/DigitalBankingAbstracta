describe('Login', () => {
    it('Deberia iniciar sesion', async ()=> {
    await browser.url('bank');
    let username = await $('#username');
    await username.setValue('federicodelucchi');
    let password = await $('#password');
    await password.setValue('12345678');
    let btn = await $('#submit');
    await btn.keys('Enter');
    await expect(await $('span').getText('error'));
    });
    });