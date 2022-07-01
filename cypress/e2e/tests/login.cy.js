/// <reference types="cypress" />
describe('Clearscore test - ', () => {
  beforeEach(() => {

  })

  it('Test failed login attempt api', () => {
    const payload = {"agent_id":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36","response_type":"code","client_type":"internal","client_id":"cs-webapp","device_id":"f18a7d19cd02eee9de0304b2f5835677","device_type":"desktop_windows","device_name":"Windows Chrome","email":"user@clearscore.com","password":"dwdwdwd","anonymous_id":"b8b90e98-85ce-1971-1afd-e40cfe9bade3"}
    cy.request({method: 'POST', url:'https://app.clearscore.com/api/global/login-service/v3/authorise', body:payload,failOnStatusCode: false}).then((response) => expect(response.status).to.equal(400));
  })
})
