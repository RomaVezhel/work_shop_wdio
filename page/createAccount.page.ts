export class CreateAccount {
    get logInBtn() {
        return $('.radius')
    }

    get flashMess() {
        return $('#flash-messages')
    }

    get flashText() {
        return $('#flash');
    }

    confirmRegistration() {
        this.logInBtn.click()
    }
    fillWith(options: { firstName: string; password: string; }) {
        $('#username').setValue(options.firstName);
        $('#password').setValue(options.password);
       
    }
    open() {
        browser.url('/login')
    }

}