import React from 'react';
import { render } from '@testing-library/react-native';
import DetailItem from "../../src/components/DetailItem.tsx";

describe('DetailItem Component', () => {
    it('renders correctly with title and value', () => {
        const { toJSON, getByText } = render(<DetailItem title="Name" value="John Doe" />);

        // Check if the component renders correctly
        expect(toJSON()).toMatchSnapshot();

        // Check if the title and value are displayed
        expect(getByText('Name')).toBeTruthy();
        expect(getByText('John Doe')).toBeTruthy();
    });

    it('renders correctly when value is undefined', () => {
        const { toJSON, getByText } = render(<DetailItem title="Website" value={undefined} />);

        // Check if the component renders correctly
        expect(toJSON()).toMatchSnapshot();

        // Check if the title is displayed and value is not shown
        expect(getByText('Website')).toBeTruthy();
        // Ensure value is not present in the component
        expect(getByText('Website').props.children).toBeUndefined();
    });
});
