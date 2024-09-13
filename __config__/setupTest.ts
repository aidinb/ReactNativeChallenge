import 'react-native';

// Reset all mock function calls and data for a clean test environment
beforeEach(() => {
    jest.resetAllMocks();
});

// Mock the `axios` module
jest.mock('axios', () => {
    // Create a mock instance for axios
    const instance = {
        get: jest.fn(),
        post: jest.fn(),
        // Mock other axios methods if needed
        create: jest.fn().mockReturnThis(), // Mock `create` to return the mock instance itself
    };

    // Return the instance as the default export
    return {
        ...instance,
        create: jest.fn().mockReturnValue(instance), // Ensure `create` returns the mock instance
    };
});

// Mock the '@react-navigation/native' module
jest.mock('@react-navigation/native', () => {
    return {
        // Mock the 'NavigationContainer' component
        NavigationContainer: jest.fn().mockReturnValue(null),
        // Mock the 'useFocusEffect' hook
        useFocusEffect: jest.fn(),
        // Mock the 'createNavigationContainerRef' function
        createNavigationContainerRef: jest.fn(() => ({
            isReady: jest.fn().mockReturnValue(true), // Adjust as needed
            navigate: jest.fn(),
            goBack: jest.fn(),
            canGoBack: jest.fn().mockReturnValue(true),
            dispatch: jest.fn(),
        })),
        // Add any other navigation-related mocks if needed
    };
});

// Mock file for @react-navigation/bottom-tabs
jest.mock('@react-navigation/bottom-tabs', () => {
    return {
        createBottomTabNavigator: jest.fn(() => ({
            Navigator: jest.fn().mockImplementation(({ children }) => children),
            Screen: jest.fn().mockImplementation(({ children }) => children),
        })),
    };
});


// Mock the '@react-navigation/stack' module
jest.mock('@react-navigation/stack', () => {
    return {
        // Mock the 'createStackNavigator' function
        createStackNavigator: jest.fn().mockReturnValue({
            Navigator: jest.fn(),
            Screen: jest.fn(),
        }),
        // Mock any other stack navigator-related methods or components if needed
    };
});

// Mock the useStores hook to control its output
jest.mock('../src/stores', () => ({
    useStores: () => ({
        mainStore: {
            user: {
                name: 'John Doe',
                email: 'john@example.com',
                website: 'www.example.com',
                phone: '123-456-7890',
                address: {
                    street: '123 Main St',
                    suite: 'Apt 4B',
                    city: 'Sample City',
                    zipcode: '12345',
                },
                company: {
                    name: 'Sample Company',
                    catchPhrase: 'We do things!',
                    bs: 'Business Solutions',
                },
            },
            getAllUsers: jest.fn(),
            allUsers: [{ id: '1', name: 'User 1' }, { id: '2', name: 'User 2' }],
            setActiveUser: jest.fn(),
        },
    }),
}));

