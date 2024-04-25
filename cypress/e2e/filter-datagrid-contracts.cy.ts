import customerTabs, { CustomerTab } from "../pages/components/customer-tabs.component"
import dataGrid from "../pages/components/data-grid.component"
import bstHome from "../pages/home.page"
import fulltextSearch from "../pages/components/fulltext-search.component"
import multiFilterSearch, { ContractFilter } from "../pages/components/multi-filter-search.component"


describe('Filter Datagrids tests - Contracts', () => {
  beforeEach('Pass security screens', () => {
    // Arrange
    cy.loginAndNavigateToService()
    cy.visit(Cypress.env('bstUrl'), { timeout: 90000 })
  })

  it('Should be able filter Customer detail Contracts based on Contract number', () => {
    // Act
    bstHome.search(Cypress.env('BSP_FILTERS').ContractsCustomerId)
    fulltextSearch.openItem(Cypress.env('BSP_FILTERS').ContractsCustomerId)
    customerTabs.switchToTab(CustomerTab.Contracts)
    dataGrid.dataLoadedWithoutError()

    multiFilterSearch.filterContracts(ContractFilter.ContractNumber, Cypress.env('BSP_FILTERS').ContractNumberFilter)
    dataGrid.dataLoadedWithoutError()

    // Assert
    dataGrid.getContractIdCellValueByIndex().should('have.text', Cypress.env('BSP_FILTERS').ContractNumberValue)
  })
})
