import dataGrid from "../pages/components/data-grid.component"
import multiFilterSearch, { CustomersFilter } from "../pages/components/multi-filter-search.component"


describe('Filter Datagrid tests - Customers', () => {
  beforeEach('Pass security screens', () => {
    // Arrange
    cy.loginAndNavigateToService()
    cy.visit(Cypress.env('bstUrl'), { timeout: 90000 })
  })

  it('Should be able filter Customers based on Customer name', () => {
    // Act
    multiFilterSearch.filterCustomers(CustomersFilter.CustomerName, Cypress.env('BSP_FILTERS').CustomerNameFilter)
    dataGrid.dataLoadedWithoutError()

    // Assert
    dataGrid.getCustomerNameCellValueByIndex().should('have.text', Cypress.env('BSP_FILTERS').CustomerNameValue)
  })
})
