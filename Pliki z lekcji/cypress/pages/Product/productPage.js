class ProductPage {
    get addToCartBtn() {
        return cy.get(`button[name="add-to-cart"]`).first();
    }

    get alertMessage() {
        return cy.get("div.woocommerce-message");
    }

    get seeCartBtn() {
        return cy.get("div.woocommerce-message a")
    }

    clickOnAddToCart() {
        this.addToCartBtn.click();
    }

    clickOnSeeCartBtn() {
        this.seeCartBtn.click();
    }
}

export default new ProductPage();