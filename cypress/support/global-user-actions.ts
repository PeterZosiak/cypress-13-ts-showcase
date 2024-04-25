Cypress.Commands.add('loginAndNavigateToService', () => {
  cy.ntlm(
    ['xxx,xxx,xxx,xxx'],
    'username_from_env', 'passwrod_from_env!', 'domain_from_env');

  const login = () => {
    cy.session(
      'login',
      () => {
        // login code
      }, { cacheAcrossSpecs: true }
    )
  }
  login()
});

export { }
declare global {
  namespace Cypress {
    interface Chainable {
      loginAndNavigateToService(): Chainable<void>;
    }
  }
}