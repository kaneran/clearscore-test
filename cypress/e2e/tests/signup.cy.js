/// <reference types="cypress" />
import HomePage from '../_pageObjects/homePage';
describe('Clearscore test - ', () => {
  beforeEach(() => {
    HomePage.visit();
  })

  it('Unable to signup without email', () => {
    HomePage.signUp();
    HomePage.verifySignUp('fail');
  })

  it('Unable to signup with invalid email', () => {
    HomePage.enterEmailToSignUp('invalidemail');
    HomePage.signUp();
    HomePage.verifySignUp('fail');
  })

  it('Signup with valid email', () => {
    HomePage.enterEmailToSignUp('user@clearscore.com');
    HomePage.signUp();
    HomePage.verifySignUp('success');
  })
})
