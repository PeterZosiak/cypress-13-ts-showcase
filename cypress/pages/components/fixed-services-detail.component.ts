export default new class FixedServicesDetailComponent {
  reference = () => cy.get('[id="reference_value"]');
  product = () => cy.get('[id="product_value"]');
  ...

  openComponentDetail = (componentId: string) => {
    cy.get('[col-id="reference"]').contains(componentId).click();
  }

  componentDetailModal = (componentId: string) => cy.get(`[id="popover-alternative-header_${componentId}-modal-content"]`)
}