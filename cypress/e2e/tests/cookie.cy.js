/// <reference types="cypress" />
import HomePage from '../_pageObjects/homePage';
describe('Clearscore test - ', () => {
  beforeEach(() => {
    HomePage.visit();
  })

  it('Verify cookie notification is dismissable', () => {
    HomePage.verifyCookieNotificationVisibility('visible');
    HomePage.verifyCookieNotificationDismissible();
  })

  it('Dismiss cookie notification', () => {
    HomePage.dimissCookieNotification();
    HomePage.verifyCookieNotificationVisibility('hidden');
    HomePage.verifyCookiesSet();
  })
})
