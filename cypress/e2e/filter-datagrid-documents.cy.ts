import customerTabs, { CustomerTab } from "../pages/components/customer-tabs.component"
import dataGrid from "../pages/components/data-grid.component"
import bstHome from "../pages/home.page"
import fulltextSearch from "../pages/components/fulltext-search.component"
import multiFilterSearch, { DocumentsFilter } from "../pages/components/multi-filter-search.component"


describe('Filter Datagrid tests - Documents', () => {
  beforeEach('Pass security screens', () => {
    // Arrange
    cy.loginAndNavigateToService()
    cy.visit(Cypress.env('bstUrl'), { timeout: 90000 })
  })

  it('Should be able filter Customer detail Documents based on Subscriber number', () => {
    // Act
    bstHome.search(Cypress.env('BSP_FILTERS').DocumentsCustomerId)
    fulltextSearch.openItem(Cypress.env('BSP_FILTERS').DocumentsCustomerId)
    customerTabs.switchToTab(CustomerTab.Documents)
    dataGrid.dataLoadedWithoutError()
    multiFilterSearch.filterDocuments(DocumentsFilter.PcnId, Cypress.env('BSP_FILTERS').DocumentsPCNIDFilter)
    dataGrid.dataLoadedWithoutError()

    // Assert
    dataGrid.getDocumentsCellValueByIndex().should('have.text', Cypress.env('BSP_FILTERS').DocumentsPCNIDValue)
  })

  it('Should be able filter Customer detail Documents based on Phone number', () => {
    // Act
    bstHome.search(Cypress.env('BSP_FILTERS').DocumentsCustomerId)
    fulltextSearch.openItem(Cypress.env('BSP_FILTERS').DocumentsCustomerId)
    customerTabs.switchToTab(CustomerTab.Documents)
    dataGrid.dataLoadedWithoutError()
    multiFilterSearch.filterDocuments(DocumentsFilter.PhoneNumber, Cypress.env('BSP_FILTERS').DocumentsPhoneNumberFilter)
    dataGrid.dataLoadedWithoutError()

    // Assert
    dataGrid.getDocumentsCellValueByIndex().should('have.text', Cypress.env('BSP_FILTERS').DocumentsPhoneNumberValue)
  })
})
