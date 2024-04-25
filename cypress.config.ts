import { defineConfig } from 'cypress'
import { rmdir, readFileSync } from 'fs'

export default defineConfig({
	projectId: "xxx",
	retries: {
		openMode: 0,
		runMode: 1,
	},
	chromeWebSecurity: false,
	watchForFileChanges: false,
	defaultCommandTimeout: 15000,
	execTimeout: 10000,
	pageLoadTimeout: 120000,
	requestTimeout: 30000,
	responseTimeout: 90000,
	screenshotsFolder: 'cypress/screenshots',
	videosFolder: 'cypress/videos',
	video: false,
	videoCompression: 10,
	clientCertificates: [
		{
			url: 'xxx',
			ca: [],
			certs: [
				{
					cert: 'certs/xxx.pem',
					key: 'certs/xxx.pem',
					passphrase: 'certs/pfx-xxx.txt',
				},
			],
		},
		{
			url: 'xxx',
			ca: [],
			certs: [
				{
					cert: 'certs/xxx.pem',
					key: 'certs/xxx.pem',
					passphrase: 'certs/pfx-xxx.txt',
				},
			],
		},
		{
			url: 'xxx',
			ca: [],
			certs: [
				{
					pfx: 'certs/xxx.pfx',
					passphrase: 'certs/pfx-xxx.txt',
				},
			],
		}
	],
	e2e: {
		setupNodeEvents(on, config) {
			on('task', {
				deleteFolder(folderName) {
					console.log('deleting folder %s', folderName)

					return new Promise((resolve, reject) => {
						rmdir(
							folderName,
							{ maxRetries: 2, recursive: true },
							(err) => {
								if (err) {
									console.error(err)

									return reject(err)
								}

								resolve(null)
							}
						)
					})
				},
			})


			const envName = config.env.name;
			const envconfig = readFileSync(`./cypress/config/cypress.${envName}.json`, 'utf-8');
			const configValues = JSON.parse(envconfig);

			const envdata = readFileSync(`./cypress/fixtures/data.${envName}.json`, 'utf-8');
			const dataValues = JSON.parse(envdata);

			config.env = { ...configValues, ...dataValues };
			return config;
		},
		experimentalModifyObstructiveThirdPartyCode: true,
		experimentalOriginDependencies: true,
	},
})
