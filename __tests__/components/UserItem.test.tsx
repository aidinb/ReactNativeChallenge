import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import UserItem from '../../src/components/UserItem'; // Ensure the correct import path
import { Item } from '../../src/utils/types'; // Import the Item type

describe('UserItem Component', () => {
    const mockOnPress = jest.fn(); // Mock function to track if it's called

    const user: Item = {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        address: {
            city: 'Gwenborough',
            geo: [{ lat: '1', lng: '1' }], // Assuming geo is an array of objects
            street: 'Kulas Light',
            suite: 'Apt. 556',
            zipcode: '92998-3874',
        },
        company: {
            bs: 'harness real-time e-markets',
            catchPhrase: 'Multi-layered client-server neural-net',
            name: 'Romaguera-Crona',
        },
    };

    it('renders correctly and displays user name', () => {
        const { toJSON, getByText } = render(<UserItem item={user} onPress={mockOnPress} />);

        expect(toJSON()).toMatchSnapshot();

        expect(getByText('Leanne Graham')).toBeTruthy();
    });

    it('calls onPress with the correct user when pressed', () => {
        const { getByText } = render(<UserItem item={user} onPress={mockOnPress} />);

        // Simulate pressing the TouchableOpacity
        fireEvent.press(getByText('Leanne Graham'));

        // Verify that the onPress callback was called with the correct item
        expect(mockOnPress).toHaveBeenCalledWith(user);
    });
});
