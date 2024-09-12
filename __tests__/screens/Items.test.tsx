import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { act } from 'react-test-renderer'; // Import act to handle async operations
import { useStores } from '../stores'; // Mock the useStores hook
import NavigationService from '../navigation/NavigationService.ts'; // Mock NavigationService
import UserItem from '../components/UserItem.tsx';
import Items from "../../src/screens/Items.tsx"; // Mock UserItem component

// Mock the useStores hook to control its output
jest.mock('../stores', () => ({
    useStores: () => ({
        mainStore: {
            getAllUsers: jest.fn(),
            allUsers: [{ id: '1', name: 'User 1' }, { id: '2', name: 'User 2' }],
            setActiveUser: jest.fn(),
        },
    }),
}));

// Mock NavigationService to prevent actual navigation
jest.mock('../navigation/NavigationService.ts', () => ({
    navigate: jest.fn(),
}));

// Mock UserItem component
jest.mock('../components/UserItem.tsx', () => 'UserItem');

describe('Items Screen', () => {
    it('renders correctly and displays user items', async () => {
        const { toJSON, getByText } = render(<Items />);

        // Check if the component renders correctly
        expect(toJSON()).toMatchSnapshot();

        // Check if user items are rendered
        await waitFor(() => {
            expect(getByText('User 1')).toBeTruthy();
            expect(getByText('User 2')).toBeTruthy();
        });
    });

    it('navigates to ItemDetail when a user item is pressed', async () => {
        const { getByText } = render(<Items />);

        // Simulate pressing a user item
        await act(async () => {
            // Find the first user item and simulate a press
            const userItem = getByText('User 1').closest('TouchableOpacity');
            userItem?.props.onPress();
        });

        // Verify that the navigation function was called
        expect(NavigationService.navigate).toHaveBeenCalledWith('ItemDetail');
    });
});
