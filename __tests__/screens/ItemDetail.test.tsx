import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import ItemDetail from '../../src/screens/ItemDetail.tsx'; // Import ItemDetail from the correct path


describe('ItemDetail Screen', () => {
    it('renders correctly and displays user details', async () => {
        const { toJSON, getByText } = render(<ItemDetail />);

        // Check if the component renders correctly
        expect(toJSON()).toMatchSnapshot();

        // Check if user details are displayed
        await waitFor(() => {
            expect(getByText('Name')).toBeTruthy();
            expect(getByText('John Doe')).toBeTruthy();
            expect(getByText('Email')).toBeTruthy();
            expect(getByText('john@example.com')).toBeTruthy();
            expect(getByText('Website')).toBeTruthy();
            expect(getByText('www.example.com')).toBeTruthy();
            expect(getByText('Phone')).toBeTruthy();
            expect(getByText('123-456-7890')).toBeTruthy();
            expect(getByText('Street')).toBeTruthy();
            expect(getByText('123 Main St')).toBeTruthy();
            expect(getByText('Suite')).toBeTruthy();
            expect(getByText('Apt 4B')).toBeTruthy();
            expect(getByText('City')).toBeTruthy();
            expect(getByText('Sample City')).toBeTruthy();
            expect(getByText('Zipcode')).toBeTruthy();
            expect(getByText('12345')).toBeTruthy();
            expect(getByText('Company Name')).toBeTruthy();
            expect(getByText('Sample Company')).toBeTruthy();
            expect(getByText('CatchPhrase')).toBeTruthy();
            expect(getByText('We do things!')).toBeTruthy();
            expect(getByText('Business')).toBeTruthy();
            expect(getByText('Business Solutions')).toBeTruthy();
        });
    });
});
