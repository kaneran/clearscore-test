const apiBaseUrl = 'https://app.clearscore.com/api/global';

export const verifyPostRequest = ({payloadPath, requestUrl, expectedStatusCode}) => {
    cy.fixture(payloadPath).then((payload) =>
      cy
        .request({
          method: "POST",
          url: `${apiBaseUrl}/${requestUrl}`,
          body: payload,
          failOnStatusCode: false,
        })
        .then((response) => expect(response.status).to.equal(expectedStatusCode))
    );
}