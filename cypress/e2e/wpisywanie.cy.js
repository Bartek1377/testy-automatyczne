/// <refrence type="cypress" />
import Base from "../pages/base.js";
import Search from "../pages/search.js"
import { searchPhrase, notFoundProduct} from "../fixtures/searchData.json"
import ResultPage from "../pages/ResultPage.js";

describe("Wpisywanie tekstu w wyszukiwarke", () =>{
    it("Wpisywanie tekstu", ()=>{
        Base.openHomePage();
        Search.typeSearchPrhase("przykładowa treść");
        Search.searchBox.should("have.value", "przykładowa treść")
        cy.wait(3000)
        Search.clearSearchPhrase();
        cy.wait(3000)
        
        Search.typeSearchPrhase(`${searchPhrase} {enter}`)
        ResultPage.searchAlert.should("be.visible").and("include.text", notFoundProduct); 
        Search.searchBox.should("have.class", "search_query")
        Search.searchBox.should("have.css", "margin-right", "1px")
        
    })
})