import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { useStores } from '../stores'; // Mock the useStores hook
import DetailItem from '../components/DetailItem.tsx';
import ItemDetail from "../../src/screens/ItemDetail.tsx"; // Mock DetailItem component

// Mock the useStores hook to control its output
jest.mock('../stores', () => ({
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
        },
    }),
}));

// Mock DetailItem component
jest.mock('../components/DetailItem.tsx', () => 'DetailItem');

describe('ItemDetail Screen', () => {
    it('renders correctly and displays user details', async () => {
        const { toJSON, getByText } = render(<ItemDetail />);

        // Check if the component renders correctly
        expect(toJSON()).toMatchSnapshot();

        // Check if user details are displayed
        await waitFor(() => {
            expect(getByText('Name: John Doe')).toBeTruthy();
            expect(getByText('Email: john@example.com')).toBeTruthy();
            expect(getByText('Website: www.example.com')).toBeTruthy();
            expect(getByText('Phone: 123-456-7890')).toBeTruthy();
            expect(getByText('Street: 123 Main St')).toBeTruthy();
            expect(getByText('Suite: Apt 4B')).toBeTruthy();
            expect(getByText('City: Sample City')).toBeTruthy();
            expect(getByText('Zipcode: 12345')).toBeTruthy();
            expect(getByText('Company Name: Sample Company')).toBeTruthy();
            expect(getByText('CatchPhrase: We do things!')).toBeTruthy();
            expect(getByText('Business: Business Solutions')).toBeTruthy();
        });
    });
});
