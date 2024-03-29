/// <reference types="cypress" />
import SignUpPage from './signUpPage';
class HomePage{
    get cookieNotification() { return cy.get('[data-qa="cookie-policy"]'); }
    get cookieDismissButton() {return this.cookieNotification.find('[data-qa="button"]');}
    get signUpEmailInput() {return cy.get('[data-qa="input"]');}
    get signUpButton() {return cy.get('form[name="prospectForm"] [data-qa="button"]')}

    verifyCookieNotificationVisibility(isVisible = false){
        const assertion = isVisible ? 'be.visible' : 'not.exist';
        this.cookieNotification.should(assertion);
    }

    verifyCookieNotificationDismissible(){
        this.cookieDismissButton.should('be.visible');
    }

    verifyCookiesSet(){
        cy.getCookie('CS_ACCEPT_COOKIES').then((cookie) => {
            const {domain, value} = cookie;
            expect(value).to.equal('true');
            expect(domain).to.equal('.clearscore.com');
        })
    }

    verifySignUp(isSuccessful = false){
        const assertion = isSuccessful ? 'contain' : 'not.contain';
        cy.fixture('urls').then((fixture) => cy.url().should(assertion, fixture.appUrl));
        if(isSuccessful){
            SignUpPage.verifyPageVisible();
        }
    }

    dimissCookieNotification(){
        this.cookieDismissButton.click();
    }

    enterEmailToSignUp(email){
        this.signUpEmailInput.type(email);
    }

    signUp(){
        this.signUpButton.click();
    }

    visit(){
        cy.visit('');
    }
}

export default new HomePage();