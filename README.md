## Browser Support
The application supported to run in chrome , firefox, Safari browsers. Please refer package json file to see supported browsers

## API https://pollsapi.docs.apiary.io/
This application is using proxy API with url https://private-anon-7b6ceba2a7-pollsapi.apiary-proxy.com/ as production api url (https://polls.apiblueprint.org/questions?page=1) is not accessible via http://localhost:3000 due to CORS policy.

## Styling for responsive UI
For larger screens of 1000px and more wider - horizontal list with each row displaying 3 items
For screens of lesser than 1000px wide - horizontal list with each row displaying 1 item

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
