/// <reference types="cypress" />
import { verifyPostRequest } from "../utils/api";

describe("Clearscore test - ", () => {
  it("Test failed login attempt api", () => {
    const data = {payloadPath: 'login', requestUrl: 'login-service/v3/authorise', expectedStatusCode: 400}
    verifyPostRequest(data);
  });
});
