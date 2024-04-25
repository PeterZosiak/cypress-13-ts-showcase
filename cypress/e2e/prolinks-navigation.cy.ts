import bstHome from "../pages/home.page";
import fulltextSearch from "../pages/components/fulltext-search.component";
import customerTabs, { CustomerTab } from "../pages/components/customer-tabs.component";
import dataGrid from "../pages/components/data-grid.component";
import basicServicesDetail from "../pages/components/basic-services-detail.component";

describe('Links between setails navigations tests', () => {
  beforeEach('Pass security screens', () => {
    // Arrange
    cy.loginAndNavigateToService()
    cy.visit(Cypress.env('bstUrl'), { timeout: 90000 })
  })

  it('Should open Basic service detail from Documents Phone number', () => {
    // Act
    bstHome.search(Cypress.env('BST_LINKS').DocumentToFixedByPhoneNumberCustomerID)
    fulltextSearch.openItem(Cypress.env('BST_LINKS').DocumentToFixedByPhoneNumberCustomerID)
    customerTabs.switchToTab(CustomerTab.Documents)

    dataGrid.openPhoneNumberLink(Cypress.env('BST_LINKS').DocumentToFixedByPhoneNumber)

    // Assert
    basicServicesDetail.basicServiceDetailMSISDN().should('have.text', Cypress.env('BST_LINKS').DocumentToFixedByPhoneNumber)
  });
})