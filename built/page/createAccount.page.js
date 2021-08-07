"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccount = void 0;
class CreateAccount {
    get logInBtn() {
        return $('.radius');
    }
    get flashMess() {
        return $('#flash-messages');
    }
    get flashText() {
        return $('#flash');
    }
    confirmRegistration() {
        this.logInBtn.click();
    }
    fillWith(options) {
        $('#username').setValue(options.firstName);
        $('#password').setValue(options.password);
    }
    open() {
        browser.url('/login');
    }
}
exports.CreateAccount = CreateAccount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQWNjb3VudC5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZS9jcmVhdGVBY2NvdW50LnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSxhQUFhO0lBQ3RCLElBQUksUUFBUTtRQUNSLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDVCxPQUFPLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDVCxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsbUJBQW1CO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0lBQ0QsUUFBUSxDQUFDLE9BQWlEO1FBQ3RELENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTlDLENBQUM7SUFDRCxJQUFJO1FBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN6QixDQUFDO0NBRUo7QUF6QkQsc0NBeUJDIn0=