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
        
        // const text = 'You logged into a secure area!'
        expect(createAccount.flashMess).toBeDisplayed();
        expect(createAccount.flashText).toHaveTextContaining('You logged into a secure area!');

        browser.pause(2000);
    })
})
