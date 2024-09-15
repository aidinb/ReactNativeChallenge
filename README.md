
---

# React Native Challenge

A React Native project that demonstrates a simple app with user navigation and state management. This project uses React Navigation for handling navigation between screens, MobX for state management, and integrates unit and end-to-end (e2e) testing.

## Features

- **Navigation**: Uses React Navigation with two tabs: **Main** and **Users**.
- **Users Tab**: Displays a list of users. Clicking on a user navigates to a detailed view of that user.
- **MobX**: Manages state across the app, providing a clean and efficient way to handle application state.
- **Testing**:
   - **Unit Tests**: Written with Jest and React Native Testing Library, covering almost 100% of the code.
   - **Integration Tests**: Performed with Maestro, including flows for normal operation and error handling.
- **Analytics and Monitoring**: Uses Firebase and Sentry for comprehensive app monitoring and analysis.

## Technologies

- **React Native**: Framework for building native apps using React.
- **React Navigation**: Navigation library for React Native.
- **MobX**: State management library that makes it simple to manage and update the application state.
- **Firebase**: Provides analytics, crashlytics, performance measurement, push notifications, A/B testing, and dynamic links.
- **Sentry**: Error tracking and performance monitoring tool.
- **Jest**: JavaScript testing framework for unit testing.
- **React Native Testing Library**: Provides utilities for testing React Native components.
- **Maestro**: Tool for end-to-end testing of React Native apps.
- **App Center** and **Fastlane**: Used for DevOps and automation of app builds and releases.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/reactnativechallenge.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd reactnativechallenge
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

## Running the Project

- **Start the Metro bundler**:

  ```bash
  npm run start
  ```

- **Run on Android**:

  ```bash
  npm run android
  ```

- **Run on iOS**:

  ```bash
  npm run ios
  ```

## Testing

- **Unit Tests**:

  Run the unit tests using Jest:

  ```bash
  npm run test
  ```

  This command runs the tests with almost 100% coverage.

- **End-to-End Tests**:

  Run end-to-end tests with Maestro:

  ```bash
  npm run e2e
  ```

  Maestro will execute the defined flows, including:
   - Normal flow: Renders the main screen with a welcome text and logo, navigates to the users tab, displays the list of users, and shows user details on click.
   - Error flow: Simulates an API failure and checks for appropriate error messages.

## Firebase and Sentry

- **Firebase**: Used for various features including:
   - **Analytics**: Track user interactions and app usage.
   - **Crashlytics**: Monitor and report crashes and errors.
   - **Performance Measurement**: Analyze app performance and identify issues.
   - **Push Notifications**: Manage and send notifications to users.
   - **A/B Testing**: Test and optimize app features and UI.
   - **Dynamic Links**: Create and manage links that work across platforms and devices.

- **Sentry**: Provides real-time error tracking and performance monitoring to help you identify and fix issues quickly.

## MobX

MobX is a state management library that makes it easy to manage and update the state in your React Native application. It allows for reactive state management, meaning that components automatically update when the state they depend on changes.

### How to Use MobX

1. **Create a Store**:

   Define your state and actions in a MobX store. For example:

   ```typescript
   import { makeAutoObservable } from 'mobx';

   class UserStore {
     users = [];

     constructor() {
       makeAutoObservable(this);
     }

     addUser(user) {
       this.users.push(user);
     }

     // Other actions and state management methods
   }

   export const userStore = new UserStore();
   ```

2. **Use the Store in Components**:

   Use the store in your components with MobX's `observer` function:

   ```typescript
   import React from 'react';
   import { observer } from 'mobx-react';
   import { userStore } from './UserStore';

   const UserList = observer(() => {
     return (
       <View>
         {userStore.users.map(user => (
           <Text key={user.id}>{user.name}</Text>
         ))}
       </View>
     );
   });

   export default UserList;
   ```

## Maestro

[Maestro](https://github.com/maestro-testing/maestro) is an end-to-end testing tool for React Native applications. It allows you to create and run automated tests that simulate user interactions and verify the app's behavior in real-world scenarios.

### Key Features

- **Automated Flows**: Define complex user flows and test them automatically.
- **Error Handling**: Simulate error scenarios and validate that the app responds correctly.
- **Cross-Platform Testing**: Run tests on both iOS and Android platforms.

### How to Use Maestro

1. **Define Test Flows**:

   Create Maestro test scripts in the `.maestro` directory to define your testing scenarios. For example:

   ```yaml
   flows:
     - name: Normal Flow
       steps:
         - render: MainScreen
         - click: UserTab
         - click: UserListItem
         - validate: UserDetailScreen

     - name: Error Flow
       steps:
         - simulate: ApiFailure
         - validate: ErrorMessage
   ```

2. **Run Tests**:

   Execute the test scripts with the following command:

   ```bash
   npm run e2e
   ```

   Maestro will run the defined flows, providing feedback on the app's behavior and ensuring that it meets the specified requirements.

## DevOps and Automation

- **App Center** and **Fastlane**: Used for continuous integration and deployment. They help automate the build, testing, and release processes for your app.

## License

This project is licensed under the MIT License. For any inquiries, contact Aidin Bazarchi at aidin.b2009@gmail.com.

---
