export default new class Utils {
	deleteDownloadsFolder() {
		const downloadsFolder = Cypress.config('downloadsFolder')
		cy.task('deleteFolder', downloadsFolder)
	}
}
