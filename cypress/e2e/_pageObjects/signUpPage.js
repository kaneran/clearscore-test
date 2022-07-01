class SignUpPage{
    get signUpForm() { return cy.get('#createAccountForm'); }

    verifyPageVisible() { this.signUpForm.should('be.visible'); }
}

export default new SignUpPage();