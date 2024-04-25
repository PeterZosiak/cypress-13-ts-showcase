export default new class BasicServicesDetailComponent {
  basicServiceDetailServiceNumber = () => cy.get('[data-testid="SubscirberDetail-content-0"]');
  basicServiceDetailMSISDN = () => cy.get('[data-testid="SubscirberDetail-content-1"]');
  ...

  openProductDetail = (productNumber: string) => {
    cy.get('[role="basic-service-product-link"]').contains(productNumber).click();
  }
  productDetailModal = (productNumber: string) => cy.get(`[id="basic_service_product_parameters_${productNumber}-modal-content"]`);


}