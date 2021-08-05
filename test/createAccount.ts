import { CreateAccount } from "../page/createAccount.page";

describe('User', () => {
    it('user can register', () => {
        const createAccount = new CreateAccount();
        createAccount.open();

        createAccount.fillWith({
            firstName: 'tomsmith',
            password: 'SuperSecretPassword!' 
        })

        createAccount.confirmRegistration();
        browser.pause(2000);
        // const text = 'You logged into a secure area!'
        expect(createAccount.flashMess).toBeDisplayed();
        expect(createAccount.flashText).toHaveText('You logged into a secure area!');

        browser.pause(2000);
    })
})
