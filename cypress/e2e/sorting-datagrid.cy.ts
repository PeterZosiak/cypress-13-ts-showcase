import dataGrid, { DatagridColumnNames } from "../pages/components/data-grid.component";
import multiFilterSearch, { CustomersFilter } from "../pages/components/multi-filter-search.component"


describe('Sort Datagrids tests', () => {
  beforeEach('Pass security screens', () => {
    cy.loginAndNavigateToService();
    cy.visit(Cypress.env('bstUrl'), { timeout: 90000 })
  })

  it('Should be able to sort Customers by Customer details', () => {
    multiFilterSearch.filterCustomers(CustomersFilter.CustomerName, Cypress.env('BST_SORT_CUSTOMER').SearchTerm)

    // Default sort by Customer name
    dataGrid.dataLoadedWithoutError()
    dataGrid.getCustomerNameCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAnameFirstByName)
    dataGrid.getCustomerCodeCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAIDFirstByName)
    dataGrid.getCustomerNameCellValueByIndex(Cypress.env('BST_SORT_CUSTOMER').NumberOfResults).should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAnameLastByName)
    dataGrid.getCustomerCodeCellValueByIndex(Cypress.env('BST_SORT_CUSTOMER').NumberOfResults).should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAIDLastByName)

    dataGrid.toogleGridColSort(DatagridColumnNames.CUSTOMER_NAME)
    dataGrid.dataLoadedWithoutError()
    dataGrid.getCustomerNameCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAnameLastByName)
    dataGrid.getCustomerCodeCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAIDLastByName)
    dataGrid.getCustomerNameCellValueByIndex(Cypress.env('BST_SORT_CUSTOMER').NumberOfResults).should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAnameFirstByName)
    dataGrid.getCustomerCodeCellValueByIndex(Cypress.env('BST_SORT_CUSTOMER').NumberOfResults).should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAIDFirstByName)

    // Sort by Company registration number
    dataGrid.toogleGridColSort(DatagridColumnNames.COMPANY_REGISTRATION_NUMBER)
    dataGrid.dataLoadedWithoutError()
    dataGrid.getCustomerNameCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAnameFirstByICO)
    dataGrid.getCustomerCodeCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAIDFirstByICO)

    // Sort by Customer code
    dataGrid.toogleGridColSort(DatagridColumnNames.CUSTOMER_CODE)
    dataGrid.dataLoadedWithoutError()
    dataGrid.getCustomerNameCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAnameFirstByCAID)
    dataGrid.getCustomerCodeCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAIDFirstByCAID)
    dataGrid.getCustomerNameCellValueByIndex(Cypress.env('BST_SORT_CUSTOMER').NumberOfResults).should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAnameLastByCAID)
    dataGrid.getCustomerCodeCellValueByIndex(Cypress.env('BST_SORT_CUSTOMER').NumberOfResults).should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAIDLastByCAID)

    dataGrid.toogleGridColSort(DatagridColumnNames.CUSTOMER_CODE)
    dataGrid.dataLoadedWithoutError()
    dataGrid.getCustomerNameCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAnameLastByCAID)
    dataGrid.getCustomerCodeCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAIDLastByCAID)
    dataGrid.getCustomerNameCellValueByIndex(Cypress.env('BST_SORT_CUSTOMER').NumberOfResults).should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAnameFirstByCAID)
    dataGrid.getCustomerCodeCellValueByIndex(Cypress.env('BST_SORT_CUSTOMER').NumberOfResults).should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAIDFirstByCAID)

    // Sort by Status
    dataGrid.toogleGridColSort(DatagridColumnNames.STATUS)
    dataGrid.dataLoadedWithoutError()
    dataGrid.getCustomerNameCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAnameFirstByStatus)
    dataGrid.getCustomerCodeCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAIDFirstByStatus)

    // Sort by Account Type Code
    dataGrid.toogleGridColSort(DatagridColumnNames.ACCOUNT_TYPE_CODE)
    dataGrid.dataLoadedWithoutError()
    dataGrid.getCustomerNameCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAIDFirstByAccountTypeCode)
    dataGrid.getCustomerNameCellValueByIndex(Cypress.env('BST_SORT_CUSTOMER').NumberOfResults).should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAIDLastByAccountTypeCode)

    // Sory by Care segment
    dataGrid.toogleGridColSort(DatagridColumnNames.CARE_SEGMENT)
    dataGrid.dataLoadedWithoutError()
    dataGrid.getCustomerNameCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAnameFirstByCareSegment)
    dataGrid.getCustomerCodeCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAIDFirstByCareSegment)

    // Sort by Sales segment
    dataGrid.toogleGridColSort(DatagridColumnNames.SALES_SEGMENT)
    dataGrid.dataLoadedWithoutError()
    dataGrid.getCustomerNameCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAnameFirstBySalesSegment)
    dataGrid.getCustomerCodeCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAIDFirstBySalesSegment)

    // Sort by Street
    dataGrid.toogleGridColSort(DatagridColumnNames.STREET)
    dataGrid.dataLoadedWithoutError()
    dataGrid.getCustomerNameCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAnameFirstByStreet)
    dataGrid.getCustomerCodeCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAIDFirstByStreet)

    // Sort by City
    dataGrid.toogleGridColSort(DatagridColumnNames.CITY)
    dataGrid.dataLoadedWithoutError()
    dataGrid.getCustomerNameCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAnameFirstByCity)
    dataGrid.getCustomerCodeCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAIDFirstByCity)

    // Sort by Postal code
    dataGrid.toogleGridColSort(DatagridColumnNames.POSTAL_CODE)
    dataGrid.dataLoadedWithoutError()
    dataGrid.getCustomerNameCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAnameFirstByPostalCode)
    dataGrid.getCustomerCodeCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAIDFirstByPostalCode)

    // Sort by Country
    dataGrid.toogleGridColSort(DatagridColumnNames.COUNTRY)
    dataGrid.dataLoadedWithoutError()
    dataGrid.getCustomerNameCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAnameFirstByCountry)
    dataGrid.getCustomerCodeCellValueByIndex().should('have.text', Cypress.env('BST_SORT_CUSTOMER').CAIDFirstByCountry)

  });

})