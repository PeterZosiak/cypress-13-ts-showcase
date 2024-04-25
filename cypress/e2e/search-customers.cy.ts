import bstHome from "../pages/home.page";
import fulltextSearch from "../pages/components/fulltext-search.component";
import customerTabs from "../pages/components/customer-tabs.component";
import customerDetail from "../pages/components/customer-detail.component";

describe('Search customers tests', () => {
  beforeEach('Pass security screens', () => {
    // Arrange
    cy.loginAndNavigateToService();
    cy.visit(Cypress.env('bstUrl'), { timeout: 90000 })
  })

  it('Should be able to fulltext customer search with more than 3 characters with Customer name', () => {
    // Act
    bstHome.search(Cypress.env('BST_CUSTOMER1').CAname)
    fulltextSearch.openItem(Cypress.env('BST_CUSTOMER1').CAname)

    // Assert
    customerDetail.customerName().should('be.visible')
    customerDetail.customerName().should('have.text', Cypress.env('BST_CUSTOMER1').CAname)
  });

  it('Should be able to fulltext customer search with more than 3 characters with Customer code', () => {
    // Act
    bstHome.search(Cypress.env('BST_CUSTOMER1').CAID)
    fulltextSearch.openItem(Cypress.env('BST_CUSTOMER1').CAID)

    // Assert
    customerDetail.customerName().should('be.visible')
    customerTabs.detailTab().should('have.class', 'slds-is-active')
    customerDetail.customerName().should('have.text', Cypress.env('BST_CUSTOMER1').CAname)
    customerDetail.customerNumber().should('have.text', Cypress.env('BST_CUSTOMER1').CAID)
  });
})