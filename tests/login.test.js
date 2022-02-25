import SignIn from "../pages/SignIn"
import HomePage from "../pages/HomePage"
import SignUp from "../pages/SignUp";


describe('Login', () => {
    it('Deberia llevarte al SignIn', async ()=> {
    await SignIn.abrir('bank')
    await SignIn.username.setValue('federicodelucchi@gmail.com')
    await SignIn.irSignIn()
    await expect(SignIn.username).toHaveText('')
    })
    it('Deberia dar error al iniciar sesion por no existir usuario', async ()=> {
    await SignIn.abrir('bank')
    await SignIn.username.setValue('federicodelucchi@gmail.com')
    await SignIn.password.setValue('12345678')
    await SignIn.submit()
    await expect(SignIn.text).toHaveText('Error')
    })
    it('Deberia iniciar sesion', async ()=> {
    await SignIn.abrir('bank')
    await SignIn.username.setValue('jsmith@demo.io')
    await SignIn.password.setValue('Demo123!')
    await SignIn.submit()
    await expect(HomePage.title).toHaveText('Dashboard')
    await HomePage.settings()
    await HomePage.loggingOut()
    })
    //it('Deberia al seleccionar el checkbox no recordar los datos', async ()=> {
    //await SignIn.abrir('bank')
    //await SignIn.username.setValue('jsmith@demo.io')
    //await SignIn.password.setValue('Demo123!')
    //await SignIn.remember()
    //await SignIn.submit()
    //await HomePage.settings()
    //await HomePage.loggingOut()
    //await SignIn.abrir('bank')
    //await expect(SignIn.username).toHaveText('')
    //await expect(SignIn.password).toHaveText('')
    //})
    it('Deberia dar error al iniciar sesion por no coincidir usuario y contraseña', async ()=> {
    await SignIn.abrir('bank')
    await SignIn.username.setValue('jsmith@demo.io')
    await SignIn.password.setValue('12345678')
    await SignIn.submit()
    await expect(SignIn.text).toHaveText('Error')
    })
    it('Deberia dar error al iniciar sesion por no recibir datos', async ()=> {
    await SignIn.abrir('bank')
    await SignIn.username.setValue('')
    await SignIn.password.setValue('')
    await SignIn.submit()
    await expect(SignIn.text).toHaveText('Error')
    })
    it('Deberia dar error al iniciar sesion por no recibir usuario', async ()=> {
    await SignIn.abrir('bank')
    await SignIn.username.setValue('')
    await SignIn.password.setValue('Demo123!')
    await SignIn.submit()
    await expect(SignIn.text).toHaveText('Error')
    })
    it('Deberia dar error al iniciar sesion por no recibir contraseña', async ()=> {
    await SignIn.abrir('bank')
    await SignIn.username.setValue('jsmith@demo.io')
    await SignIn.password.setValue('')
    await SignIn.submit()
    await expect(SignIn.text).toHaveText('Error')
    })
    it('Deberia ir al sign up form', async ()=> {
    await SignIn.abrir('bank')
    await SignIn.irSignUp()
    await expect(SignUp.headerSignUp).toHaveText('TITLE');
    await SignIn.irSignIn()
    await expect(SignIn.headerSignIn).toHaveText('USER NAME')
    })
    it('Deberia ir al sign in', async ()=> {
    await SignIn.abrir('bank')
    await SignIn.irSignUp()
    await expect(SignUp.headerSignUp).toHaveText('TITLE');
    await SignIn.irSignIn()
    await expect(SignIn.headerSignIn).toHaveText('USER NAME')
    })
    it('Deberia ir al sign in', async ()=> {
    await SignIn.abrir('bank')
    await SignIn.irSignUp()
    await expect(SignUp.headerSignUp).toHaveText('TITLE');
    await SignUp.irSignIn()
    await expect(SignIn.headerSignIn).toHaveText('USER NAME')
    })
    });