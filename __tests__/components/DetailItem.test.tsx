import React from 'react';
import { render } from '@testing-library/react-native';
import DetailItem from '../../src/components/DetailItem';

describe('DetailItem Component', () => {
    it('renders correctly with title and value', () => {
        const { toJSON, getByText } = render(
            <DetailItem title="Test Title" value="Test Value" />
        );

        // Check if the component renders correctly
        expect(toJSON()).toMatchSnapshot();

        // Check if title and value are displayed
        expect(getByText('Test Title')).toBeTruthy();
        expect(getByText('Test Value')).toBeTruthy();
    });

    it('does not render anything if title is missing', () => {
        const { toJSON } = render(<DetailItem title="" value="Test Value" />);

        // Ensure component returns null
        expect(toJSON()).toBeNull();
    });

    it('does not render anything if value is missing', () => {
        const { toJSON } = render(<DetailItem title="Test Title" value="" />);

        // Ensure component returns null
        expect(toJSON()).toBeNull();
    });

    it('does not render anything if both title and value are missing', () => {
        const { toJSON } = render(<DetailItem title="" value="" />);

        // Ensure component returns null
        expect(toJSON()).toBeNull();
    });
});
