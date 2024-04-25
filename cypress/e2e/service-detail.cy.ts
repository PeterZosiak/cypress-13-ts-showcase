import bstHome from "../pages/home.page";
import fulltextSearch from "../pages/components/fulltext-search.component";
import customerDetail from "../pages/components/customer-detail.component";

describe('Open services details tests', () => {
  beforeEach('Pass security screens', () => {
    // Arrange
    cy.loginAndNavigateToService()
    cy.visit(Cypress.env('bstUrl'), { timeout: 90000 })
  })


  it('Should open Customer detail', () => {
    // Act
    bstHome.search(Cypress.env('BST_CUSTOMER1').CAname)
    fulltextSearch.openItem(Cypress.env('BST_CUSTOMER1').CAname)

    // Assert
    customerDetail.customerName().should('have.text', Cypress.env('BST_CUSTOMER1').CAname)
    customerDetail.customerCompanyRegistrationNumber().should('have.text', Cypress.env('BST_CUSTOMER1').ICO)
    //customerDetail.vatRegNum().should('have.text', Cypress.env('BST_CUSTOMER1').DIC)
    customerDetail.customerNumber().should('have.text', Cypress.env('BST_CUSTOMER1').CustomerNumber)
    customerDetail.status().should('have.text', Cypress.env('BST_CUSTOMER1').Status)
    customerDetail.currentCustomerSegment().should('have.text', Cypress.env('BST_CUSTOMER1').CurrentCustomerSegment)
    customerDetail.cumulativeSalesSegment().should('have.text', Cypress.env('BST_CUSTOMER1').CumulativCustomerSegment)
    customerDetail.streetName().should('have.text', Cypress.env('BST_CUSTOMER1').Street)
    customerDetail.streetNumber().should('have.text', Cypress.env('BST_CUSTOMER1').StreetNumber)
    customerDetail.houseLetter().should('have.text', Cypress.env('BST_CUSTOMER1').HouseLetter)
    customerDetail.city().should('have.text', Cypress.env('BST_CUSTOMER1').City)
    customerDetail.postalCode().should('have.text', Cypress.env('BST_CUSTOMER1').PostalCode)
    customerDetail.country().should('have.text', Cypress.env('BST_CUSTOMER1').Country)
    customerDetail.primarySalesman().should('have.text', Cypress.env('BST_CUSTOMER1').Salesman)
  });
});