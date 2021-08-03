
describe('User', () => {
    it('user can register', () => {
        browser.url('/login')
        expect(browser).toHaveTitle('The Internet');
        const firstName = $('#username');   //
        firstName.setValue('tomsmith');
        browser.pause(2000);
    })
})

