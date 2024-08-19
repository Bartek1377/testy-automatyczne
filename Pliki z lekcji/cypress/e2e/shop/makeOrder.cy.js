import {shopUrl, productUrl, cartUrl} from "../../fixtures/url.json";
import { successAddedProduct } from "../../fixtures/messages.json";
import ProductPage from "../../pages/Product/productPage";

describe("Make order on shop page", () => {
    it("Open shop page", () => {
        cy.visit("/").url().should("contain", shopUrl)
    })

    it("Should click add to cart button", () => {
        cy.visit(productUrl).url().should("contain", productUrl)
        ProductPage.clickOnAddToCart();
        ProductPage.alertMessage.should("contain.text", successAddedProduct)
    })

    it("Should click on see basket button", () => {
        ProductPage.clickOnSeeCartBtn();
        cy.url().should("contain", cartUrl)
    })
})