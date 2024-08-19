/// <reference types="cypress" />
import {login, passwd} from "../fixtures/logindata.json";

describe("Custom Commands", () => {
    it("Logowanie do strony automationpractic.pl", () => {
        cy.login(login, passwd);
    })
})