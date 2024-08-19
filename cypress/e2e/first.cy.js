/// <refrence type="cypress" /> //dodaj se biblioteke referencji i jest łatwiej elo
describe("Mój pierwszy test automatyczny", () => {
    it("Otworzenie strony google.com", () =>{
        cy.visit("https://google.com");
    })
})

