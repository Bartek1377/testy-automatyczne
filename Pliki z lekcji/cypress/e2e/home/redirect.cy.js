import {homeUrl} from "../../fixtures/url.json";

describe("Verify loaded page after open", () => {
    it("Should open shop page", () => {
        cy.visit(homeUrl).url().should("contain", homeUrl)
        cy.wait(4000);
        cy.url().should("contain", homeUrl)
    })
})