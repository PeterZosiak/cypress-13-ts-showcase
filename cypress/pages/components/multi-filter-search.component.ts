export default new class FulltextSearchComponent {
  component = () => cy.get('.form-filter')
  onlyActiveToogle = () => this.component().find('.slds-checkbox_toggle')
  onlyActiveToogleDetailGrid = () => cy.get('.slds-checkbox_toggle').eq(1)
  onlyActiveToogleDetailSubGrid = () => cy.get('.slds-checkbox_toggle').eq(2)

  contractCategoryCombobox = () => this.component().find('[data-testid="contractsFormFilter-contractCategory"]')
  ...

  customerFilterValueInput = () => this.component().find('[data-testid="customerFormFilter-filterValue"]')
  customerFilterCombobox = () => this.component().find('[data-testid="customerFormFilter-filterName"]')
  ...

  contractFilterValueInput = () => this.component().find('[data-testid="contractsFormFilter-filterValue"]')
  contractsFilterCombobox = () => this.component().find('[data-testid="contractsFormFilter-filterName"]')
  ...

  basicServicesFilterValueInput = () => this.component().find('[data-testid="basicServicesFormFilter-filterValue"]')
  basicServicesFilterCombobox = () => this.component().find('[data-testid="basicServicesFormFilter-filterName"]')
  ...

  fixedServiceFilterValueInput = () => this.component().find('[data-testid="fixedIctServicesFormFilter-filterValue"]')
  fixedServiceFilterCombobox = () => this.component().find('[data-testid="fixedIctServicesFormFilter-filterName"]')
  ...

  documentsFilterValueInput = () => this.component().find('[data-testid="documentsFormFilter-filterValue"]')
  documentsFilterCombobox = () => this.component().find('[data-testid="documentsFormFilter-filterName"]')
  ...

  documentsClassFilterCombobox = () => this.component().find('[data-testid="documentsFormFilter-type"]')
  documentsClassFilterListbox = () => this.component().find('[role="listbox"]')
  ...

  filterBasicServices = (option: BasicServicesFilter, term: string) => {
    this.switchBasicServicesFilter(option)
    this.basicServicesFilterValueInput().type(term + "{enter}")
  }

  filterContracts = (option: ContractFilter, term: string) => {
    this.switchContractFilter(option)
    this.contractFilterValueInput().type(term + "{enter}")
  }

 ...

  switchActiveOnly = () => {
    this.onlyActiveToogle().click()
  }

 ...

  switchContractCategoryFilter = (term: ContractCategory) => {
    switch (term) {
      case ContractCategory.All:
        this.contractCategoryCombobox().click();
        this.contractCategoryListboxItemAll().click();
        break;

      case ContractCategory.MasterFC:
        this.contractCategoryCombobox().click();
        this.contractCategoryListboxItemMasterFC().click();
        break;

      default:
        break;
    }
  }

  switchDocumentsClassFilter = (term: DocumentClass) => {
    switch (term) {
      case DocumentClass.All:
        this.documentsClassFilterCombobox().click();
        this.documentsClassFilterListboxItemAll().click();
        break;

      case DocumentClass.ActivationForms:
        this.documentsClassFilterCombobox().click();
        this.documentsClassFilterListboxItemActivationForms().click();
        break;

      ...

      default:
        break;
    }
  }

  switchCustomersFilter = (term: CustomersFilter) => {
    switch (term) {
      case CustomersFilter.CustomerName:
        this.customerFilterCombobox().click();
        this.customerFilterListboxItemCustomerName().click();
        break;
  
      ...

      default:
        break;
    }
  }

  switchDocumentsFilter = (term: DocumentsFilter) => {
    switch (term) {
      case DocumentsFilter.PcnId:
        this.documentsFilterCombobox().click();
        this.documentsFilterListboxItemPcnId().click();
        break;
     ...

      default:
        break;
    }
  }

  switchFixedServiceFilter = (term: FixedServicesFilter) => {
    switch (term) {
      case FixedServicesFilter.ContractNumber:
        this.fixedServiceFilterCombobox().click();
        this.fixedServiceFilterListboxItemContractNumber().click();
        break;

      ..

      default:
        break;
    }
  }

  switchChildCustomersFilter = (term: ChildCustomersFilter) => {
    switch (term) {
      case ChildCustomersFilter.CustomerName:
        this.customerFilterCombobox().click();
        this.customerFilterListboxItemCustomerName().click();
        break;

     ...

      default:
        break;
    }
  }

  switchBasicServicesFilter = (term: BasicServicesFilter) => {
    switch (term) {
      case BasicServicesFilter.MSISDN:
        this.basicServicesFilterCombobox().click()
        this.basicServicesFilterListboxItemMSISDN().click()
        break;

      ...

      default:
        break;
    }
  }

  switchContractFilter = (term: ContractFilter) => {
    switch (term) {
      case ContractFilter.ContractNumber:
        this.contractsFilterCombobox().click()
        this.contractsFilterListboxItemContractId().click()
        break;

      ...

      default:
        break;
    }
  }
}

export enum CustomersFilter {
  CustomerName = "Customer Name",
  CompanyId = "Company ID",
  ...
}

export enum ContractCategory {
  All = "All",
  MasterFC = "Master FC",
}

export enum DocumentsFilter {
  PcnId = "PCN ID",
  PhoneNumber = "Phone Number",
  
  ...
}

export enum FixedServicesFilter {

  SubscriberNumber = "Subscriber Number",
  ReferenceNumber = "Reference Number",
 
  ...
}

export enum BasicServicesFilter {
  MSISDN = "MSISDN",
  ServiceNumber = "Service Number",
  ...
}

export enum ContractFilter {
  ContractNumber = "Contract Number",
  BusinessCase = "Business Case",
  ...
}

export enum DocumentClass {
  All = "All",
  ActivationForms = "Activation forms",

}

export enum ChildCustomersFilter {
  CustomerName = "Customer Name",
  CompanyId = "Company ID",
  ...
}