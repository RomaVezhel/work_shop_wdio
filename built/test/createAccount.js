"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createAccount_page_1 = require("../page/createAccount.page");
describe('User', () => {
    it('user can register', () => {
        const createAccount = new createAccount_page_1.CreateAccount();
        createAccount.open();
        createAccount.fillWith({
            firstName: 'tomsmith',
            password: 'SuperSecretPassword!'
        });
        createAccount.confirmRegistration();
        // const text = 'You logged into a secure area!'
        expect(createAccount.flashMess).toBeDisplayed();
        expect(createAccount.flashText).toHaveTextContaining('You logged into a secure area!');
        browser.pause(2000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3QvY3JlYXRlQWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1FQUEyRDtBQUUzRCxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtJQUNsQixFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO1FBQ3pCLE1BQU0sYUFBYSxHQUFHLElBQUksa0NBQWEsRUFBRSxDQUFDO1FBQzFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVyQixhQUFhLENBQUMsUUFBUSxDQUFDO1lBQ25CLFNBQVMsRUFBRSxVQUFVO1lBQ3JCLFFBQVEsRUFBRSxzQkFBc0I7U0FDbkMsQ0FBQyxDQUFBO1FBRUYsYUFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFcEMsZ0RBQWdEO1FBQ2hELE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDaEQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBRXZGLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9