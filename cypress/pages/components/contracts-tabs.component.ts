export default new class CustomerTabsComponent {
  contractsTab = () => cy.get('[id="contract-tabs-slds-tabs_tab-0"]');
  fixedServicesTab = () => cy.get('[id="contract-tabs-slds-tabs_tab-1"]');
  ...

  switchToTab = (tabName: ContractTab) => {
    switch (tabName) {
      case ContractTab.Contracts:
        this.contractsTab().click();
        break;

      case ContractTab.FixedServices:
        this.fixedServicesTab().click();
        break;

      case ContractTab.Documents:
        this.documentsTab().click();
        break;

      default:
        break;
    }
  }
}

export enum ContractTab {
  Contracts = "Contracts",
  FixedServices = "Fixed Services",
  Documents = "Documents"
}