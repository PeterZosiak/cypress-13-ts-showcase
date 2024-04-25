export default new class FulltextSearchComponent {
  fulltextCombo = () => cy.get('[id="fulltextCombobox-input"]')
  listBox = () => cy.get('[role="listbox"]')
  listboxItem = (term: string) => cy.get('[class="slds-listbox__item"]').contains(term)
  openItem = (term: string) => this.listboxItem(term).click()
}