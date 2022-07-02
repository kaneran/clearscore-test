/// <reference types="cypress" />
describe("Clearscore test - ", () => {
  beforeEach(() => {});

  it("Test failed login attempt api", () => {
    cy.fixture("login.json").then((payload) =>
      cy
        .request({
          method: "POST",
          url: "https://app.clearscore.com/api/global/login-service/v3/authorise",
          body: payload,
          failOnStatusCode: false,
        })
        .then((response) => expect(response.status).to.equal(400))
    );
  });
});
