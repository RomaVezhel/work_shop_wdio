
describe.skip('Smoke test', () => {
    it('ducks should be alive', () => {
        browser.url('/')
        expect(browser).toHaveTitle('Mailinator');
        browser.pause(4000)
    })
})

