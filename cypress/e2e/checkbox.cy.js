/// <refrence type="cypress" />

import Base from "../pages/base.js";
import Home from "../pages/home.js"
import Women from "../pages/women.js";

describe("Test związany z zaznaczaniem checkboxa", () => {
    it("Kliknięcie w zakładkę women", ()=>{
        Base.openHomePage();
        Home.clickOnWomenTab();
        cy.get(`a[title="Women"]`).click();
        cy.url().should("include", "id_category=3&controller=category")
    })
    

    it("Kliknięcie w checkboxa w zakłądce Women", ()=>{
        Women.checkTops();
        Women.topsCheckbox.should("be.checked")
        Women.checkDresses();
        Women.checkSize();
        

    })
})