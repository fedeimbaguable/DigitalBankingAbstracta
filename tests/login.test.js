import SignIn from "../pages/SignIn"
import HomePage from "../pages/HomePage"
import SignUp from "../pages/SignUp";
import UserNames from "../datos/UserNames";

describe('Login', () => {
    UserNames.forEach(({username, password, reason}) => {
    it(`Should return error when Signing In because ${reason}`, async () => {
        await SignIn.open('bank')
        await SignIn.logIn(username, password)
        await expect(SignIn.signInErrorText).toBeDisplayed()
    })
    });
    it('Should Sign In', async ()=> {
        await SignIn.open('bank')
        await SignIn.usernameInput.setValue('jsmith@demo.io')
        await SignIn.passwordInput.setValue('Demo123!')
        await SignIn.submit()
        await expect(HomePage.title).toHaveText('Dashboard')
        await HomePage.accessUserSettings()
        await HomePage.logOut()
    })
    it('Should take you to Sign In form', async ()=> {
        await SignIn.open('bank')
        await SignIn.usernameInput.setValue('federicodelucchi@gmail.com')
        await SignIn.irSignIn()
        await expect(SignIn.usernameInput).toHaveText('')
    })
    it('Should take you to Sign Up form', async ()=> {
        await SignIn.open('bank')
        await SignIn.irSignUp()
        await expect(SignUp.headerSignUp).toHaveText('TITLE');
        await SignIn.irSignIn()
        await expect(SignIn.usernameInput).toHaveText('')
         })
    it('Should remember you after selecting the checkbox remebmber me', async ()=> {
        await SignIn.open('bank')
        await SignIn.usernameInput.setValue('jsmith@demo.io')
        await SignIn.passwordInput.setValue('Demo123!')
        await SignIn.activateRememberMeOption()
        await SignIn.submit()
        let cookies = await SignIn.getBrowserCookies();
        await expect(cookies.length).toBeGreaterThan(1, 'Error: expected user to be remembered'); 
    })
    });