import customerTabs, { CustomerTab } from "../pages/components/customer-tabs.component"
import dataGrid from "../pages/components/data-grid.component"
import bstHome from "../pages/home.page"
import fulltextSearch from "../pages/components/fulltext-search.component"
import multiFilterSearch, { FixedServicesFilter } from "../pages/components/multi-filter-search.component"


describe('Filter Datagrid tests - Fixed services', () => {
  beforeEach('Pass security screens', () => {
    // Arrange
    cy.loginAndNavigateToService()
    cy.visit(Cypress.env('bstUrl'), { timeout: 90000 })
  })

  it('Should be able filter Customer detail Fixed services based on Subscriber number', () => {
    // Act
    bstHome.search(Cypress.env('BSP_FILTERS').FixedServicesCustomerId)
    fulltextSearch.openItem(Cypress.env('BSP_FILTERS').FixedServicesCustomerId)
    customerTabs.switchToTab(CustomerTab.FixedServices)
    dataGrid.dataLoadedWithoutError()
    multiFilterSearch.filterFixedServices(FixedServicesFilter.SubscriberNumber, Cypress.env('BSP_FILTERS').FixedServicesSubscriberNumberFilter)
    dataGrid.dataLoadedWithoutError()

    // Assert
    dataGrid.getFixedServiceCellValueByIndex().should('have.text', Cypress.env('BSP_FILTERS').FixedServicesSubscriberNumberValue)
  })


  it('Should be able filter Customer detail Fixed services based on Reference number', () => {
    // Act
    bstHome.search(Cypress.env('BSP_FILTERS').FixedServicesCustomerId)
    fulltextSearch.openItem(Cypress.env('BSP_FILTERS').FixedServicesCustomerId)
    customerTabs.switchToTab(CustomerTab.FixedServices)
    dataGrid.dataLoadedWithoutError()
    multiFilterSearch.filterFixedServices(FixedServicesFilter.ReferenceNumber, Cypress.env('BSP_FILTERS').FixedServicesReferenceNumberFilter)
    dataGrid.dataLoadedWithoutError()

    // Assert
    dataGrid.getFixedServiceCellValueByIndex().should('have.text', Cypress.env('BSP_FILTERS').FixedServicesReferenceNumberValue)
  })
})
