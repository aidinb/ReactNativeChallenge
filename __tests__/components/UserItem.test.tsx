import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import UserItem from "../../src/components/UserItem.tsx";

describe('UserItem Component', () => {
    const mockOnPress = jest.fn(); // Mock function to track if it's called

    const user = {
        id: 1,
        parentId: 0,
        imagePath: 'path/to/image.png',
        name: 'John Doe',
    };

    it('renders correctly and displays user name', () => {
        const { toJSON, getByText } = render(<UserItem item={user} onPress={mockOnPress} />);

        // Check if the component renders correctly
        expect(toJSON()).toMatchSnapshot();

        // Check if user name is displayed
        expect(getByText('John Doe')).toBeTruthy();
    });

    it('calls onPress with the correct user when pressed', () => {
        const { getByText } = render(<UserItem item={user} onPress={mockOnPress} />);

        // Simulate pressing the TouchableOpacity
        fireEvent.press(getByText('John Doe'));

        // Verify that the onPress callback was called with the correct item
        expect(mockOnPress).toHaveBeenCalledWith(user);
    });
});
