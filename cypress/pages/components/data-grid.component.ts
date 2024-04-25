export default new class DataGridComponent {
  grid = () => cy.get('[class="ag-grid-wrapper"]')
  gridHeader = () => this.grid().find('[class="ag-header-container"]')
  gridBody = () => cy.get('.ag-body')
  colContainer = () => this.grid().find('[class="ag-center-cols-container"]')

  headerColCustomerName = () => this.gridHeader().find('[col-id="customerName"]')
  headerColCompanyRegistrationNumber = () => this.gridHeader().find('[col-id="companyRegistrationNumber"]')
  ...

  headerColContractId = () => this.gridHeader().find('[col-id="contractId"]')
  headerColContractStatus = () => this.gridHeader().find('[col-id="contractStatus"]')
  ...

  headerColServiceIdentifier = () => this.gridHeader().find('[col-id="serviceIdentifier"]')
  headerColMsisdn = () => this.gridHeader().find('[col-id="msisdn"]')
  ...

  headerColDocumentMimeType = () => this.gridHeader().find('[col-id="contentInfo.mimeTypeName"]')
  headerColDocumentDocType = () => this.gridHeader().find('[col-id="type"]')
  ...

  headerColSubscriberNumber = () => this.gridHeader().find('[col-id="id"]')
  headerColReference = () => this.gridHeader().find('[col-id="reference"]')
  ...

  // We have displayed multiple grids with same column names, so we need to specify the index of the column
  headerColReferenceComponent = () => this.gridHeader().find('[col-id="reference"]').eq(1)
  headerColComponentNameComponent = () => this.gridHeader().find('[col-id="product.name"]').eq(1)

  headerColProductNumber = () => this.gridHeader().find('[col-id="id"]')
  headerColProductSpecCode = () => this.gridHeader().find('[col-id="spec.productNumber"]')
  ...

  noRows = () => this.grid().find('.ag-no-rows__detail')
  errorMsg = () => this.grid().find('.ag-error-message')
  loadingSpinner = () => this.grid().find('.ag-spinner')

  getRowByIndex(index: string) {
    return cy.get(`[row-index="${index}"]`)
  }

  toogleGridColSort(colName: DatagridColumnNames) {
    switch (colName) {
      case DatagridColumnNames.CUSTOMER_NAME:
        this.headerColCustomerName().click()
        break;

      case DatagridColumnNames.COMPANY_REGISTRATION_NUMBER:
        this.headerColCompanyRegistrationNumber().click()
        break;

      case DatagridColumnNames.VAT_NUMBER:
        this.headerColVatNumber().click()
        break;

      ...

      default:
        break;
    }
  }

  getCustomerNameCellValueByIndex(index: string = "0") {
    return this.getRowByIndex(index).find('[col-id="customerName"]')
  }

  getCustomerCodeCellValueByIndex(index: string = "0") {
    return this.getRowByIndex(index).find('[col-id="customerNumber"]')
  }

  ...

}

export enum DatagridColumnNames {
  CUSTOMER_NAME,
  COMPANY_REGISTRATION_NUMBER,
 ...
}