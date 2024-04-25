export default new class CustomerDetailComponent {
  customerNameLabel = () => cy.get('[id="customerName_label"]');
  customerName = () => cy.get('[id="customerName_value"]');
  ...

  openParentCustomerLink() {
    this.parentCustomerLink().should('not.be.empty');
    this.parentCustomerLink().click();
  }
}