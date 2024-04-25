import fulltextSearch from "./components/fulltext-search.component"

export default new class BasePage {
  fulltextInput = () => cy.get('[id="fulltext-input"]')

  search = (term: string) => {
    this.fulltextInput().clear()
    fulltextSearch.fulltextCombo().type(term)
  }

  logo = () => cy.get('[class="app-logo"]')

  refresh = () => cy.get('[class="app-logo"]').click()

}