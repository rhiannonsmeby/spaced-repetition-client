# Spaced Repetition Capstone

## Live app: https://spaced-repetition-rhiannon.vercel.app/
## Server repo: https://github.com/rhiannonsmeby/spaced-repetition-server

## Summary

This app is a demonstration of the spaced repetition revision technique for learning vocabulary in a foriegn language. Currently, only French is supported, but you can fork this repo and the corresponding server repo if you would like to expand this app to include additional languages. 

## Running the tests

This project uses [Cypress IO](https://docs.cypress.io) for integration testing using the Chrome browser.

Cypress has the following expectations:

- You have cypress installed (this is a devDependency of the project)
- You have your application running at http://localhost:3000.
  - You can change the address of this expectation in the `./cypress.json` file.
- Your `./src/config.js` is using http://localhost:8000/api as the `API_ENDPOINT`

To start the tests run the command:

```bash
npm run cypress:open
```

On the first run of this command, the cypress application will verify its install. Any other runs after this, the verification will be skipped.

The command will open up the Cypress application which reads tests from the `./cypress/integration/` directory. You can then run individual tests by clicking on the file names or run all tests by clicking the "run all tests" button in the cypress GUI.

Tests will assert against your running localhost client application.

You can also start all of the tests in the command line only (not using the GUI) by running the command:

```bash
npm run cypress:run
```

This will save video recordings of the test runs in the directory `./cypress/videos/`.

## Technology used

- React.js
- Node.js
- Express.js
- XML
- CSS

## Contact the developer

- smebyrhi@gmail.com
