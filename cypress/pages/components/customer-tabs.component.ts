export default new class CustomerTabsComponent {
  detailTab = () => cy.get('[id="customer-tabs-slds-tabs_tab-0"]');
  contractsTab = () => cy.get('[id="customer-tabs-slds-tabs_tab-1"]');
  basicServicesTab = () => cy.get('[id="customer-tabs-slds-tabs_tab-2"]');
  fixedServicesTab = () => cy.get('[id="customer-tabs-slds-tabs_tab-3"]');
  ...


  openBasicServiceDetail(serviceNumber: string) {
    cy.get('[col-id="serviceIdentifier"]', { timeout: 60000 }).contains(serviceNumber, { timeout: 60000 }).click();
  }

  openFixedServiceDetail(fixedServiceNumber: string) {
    cy.get('[col-id="id"]', { timeout: 60000 }).contains(fixedServiceNumber, { timeout: 60000 }).click();
  }

  downloadDocument(index: 0) {
    cy.get('.ag-spinner').should('not.exist', { timeout: 30000 }).wait(500)
    cy.window().document().then(function (doc) {
      doc.addEventListener('click', () => {
        setTimeout(function () { doc.location.reload() }, 5000)
      })

      cy.intercept('/', (req) => {
        req.reply((res) => {
          expect(res.statusCode).to.equal(200);
        });
      });
      cy.get('[col-id="contentInfo.mimeTypeName"]').eq(index + 1).click();
    })


  }

  switchToTab = (tabName: CustomerTab) => {
    switch (tabName) {
      case CustomerTab.Detail:
        this.detailTab().click();
        break;

      case CustomerTab.Contracts:
        this.contractsTab().click();
        break;

      case CustomerTab.BasicServices:
        this.basicServicesTab().click();
        break;

      case CustomerTab.FixedServices:
        this.fixedServicesTab().click();
        break;

      case CustomerTab.Documents:
        this.documentsTab().click();
        break;

      default:
        break;
    }
  }
}

export enum CustomerTab {
  Detail = "Detail",
  Contracts = "Contracts",
  BasicServices = "Basic Services",
  FixedServices = "Fixed Services",
  Documents = "Documents"
}