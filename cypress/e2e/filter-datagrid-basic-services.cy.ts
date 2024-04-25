import customerTabs, { CustomerTab } from "../pages/components/customer-tabs.component"
import dataGrid from "../pages/components/data-grid.component"
import bstHome from "../pages/home.page"
import fulltextSearch from "../pages/components/fulltext-search.component"
import multiFilterSearch, { BasicServicesFilter } from "../pages/components/multi-filter-search.component"

describe('Filter Datagrid tests - Basic services', () => {
  beforeEach('Pass security screens', () => {
    // Arrange
    cy.loginAndNavigateToService()
    cy.visit(Cypress.env('bstUrl'), { timeout: 90000 })
  })

  it('Should be able filter Customer detail Basic services based on MSISDN number', () => {
    // Act
    bstHome.search(Cypress.env('BSP_FILTERS').BasicServicesCustomerId)
    fulltextSearch.openItem(Cypress.env('BSP_FILTERS').BasicServicesCustomerId)
    customerTabs.switchToTab(CustomerTab.BasicServices)
    dataGrid.dataLoadedWithoutError()
    multiFilterSearch.filterBasicServices(BasicServicesFilter.MSISDN, Cypress.env('BSP_FILTERS').BasicServicesMSISDNFilter)
    dataGrid.dataLoadedWithoutError()

    // Assert
    dataGrid.getBasicServiceCellValueByIndex().should('have.text', Cypress.env('BSP_FILTERS').BasicServicesMSISDNValue)
  })

  it('Should be able filter Customer detail Basic services based on Service number', () => {
    // Act
    bstHome.search(Cypress.env('BSP_FILTERS').BasicServicesCustomerId)
    fulltextSearch.openItem(Cypress.env('BSP_FILTERS').BasicServicesCustomerId)
    customerTabs.switchToTab(CustomerTab.BasicServices)
    dataGrid.dataLoadedWithoutError()
    multiFilterSearch.filterBasicServices(BasicServicesFilter.ServiceNumber, Cypress.env('BSP_FILTERS').BasicServicesServiceNumberFilter)
    dataGrid.dataLoadedWithoutError()

    // Assert
    dataGrid.getBasicServiceCellValueByIndex().should('have.text', Cypress.env('BSP_FILTERS').BasicServicesServiceNumberValue)
  })
})
