import {shopUrl} from "../../fixtures/url.json";

describe("Verify loaded page after open", () => {
    it("Should open shop page", () => {
        cy.visit("/").url().should("contain", shopUrl)
        cy.wait(4000);
        cy.url().should("contain", shopUrl)
    })
})