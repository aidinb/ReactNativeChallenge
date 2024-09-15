import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import Items from '../../src/screens/Items.tsx';
import NavigationService from '../../src/navigation/NavigationService.ts';

// Mock NavigationService
jest.mock('../../src/navigation/NavigationService.ts', () => ({
    navigate: jest.fn(),
}));

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
        fireEvent.press(getByText('User 1'));

        // Verify that the navigation function was called
        await waitFor(() => {
            expect(NavigationService.navigate).toHaveBeenCalledWith('ItemDetail');
        });
    });
});
