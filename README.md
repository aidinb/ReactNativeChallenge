
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
   git clone https://github.com/aidinb/ReactNativeChallenge
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

## FAQs

### Which design pattern/s would you use to manage the state of a medium-large application?

For managing the state of a medium-large application, I prefer using **MobX**. It is handy, easy to use, and provides simple and effective state management. MobX's reactivity model allows for straightforward handling of application state, making it quick to implement and maintain.

### Tell us a little about your experience using mobile hardware in applications using React Native (Camera, Storage, Bluetooth...)

I have extensive experience with mobile hardware integration in React Native. This includes:
- **Image Recognition**: Using the camera for image recognition tasks.
- **Offline Data Storage**: Leveraging **Realm** for offline data storage, allowing the app to function without an active internet connection and synchronize data with the server once the connection is restored.

### Tell us a little about your experience publishing applications on different platforms.

I have published around 15 different types of mobile apps for various countries. My experience includes:
- Configuring app stores and managing app publishing processes.
- Preparing all necessary configurations and keys.
- Automating the publishing process, allowing the app to go to review with a single click.
- Managing different branches (master, prod, staging) for various purposes.

## License

This project is licensed under the MIT License. For any inquiries, contact Aidin Bazarchi at aidin.b2009@gmail.com.


<img width="1485" alt="Screenshot 2024-09-15 at 10 21 35 PM" src="https://github.com/user-attachments/assets/a53437b9-ad0c-4f32-8ff7-31cb27df3683">
<img width="1171" alt="Screenshot 2024-09-15 at 10 20 59 PM" src="https://github.com/user-attachments/assets/1a00f92d-b550-4da8-b8ff-5e7fe40e0576">
<img width="1063" alt="Screenshot 2024-09-15 at 10 20 10 PM" src="https://github.com/user-attachments/assets/2fef368b-c016-44e1-9df1-6a19ee20b7ff">
<img width="435" alt="Screenshot 2024-09-15 at 10 21 49 PM" src="https://github.com/user-attachments/assets/c84ee8e8-7231-4734-91c5-410c51a53d98">
<img width="439" alt="Screenshot 2024-09-15 at 10 21 57 PM" src="https://github.com/user-attachments/assets/6ae62279-c91c-4749-bf68-15cc65a60f6b">
<img width="439" alt="Screenshot 2024-09-15 at 10 22 07 PM" src="https://github.com/user-attachments/assets/8981b97c-a3f2-4d9e-bfa5-8cbbd0516243">



---
