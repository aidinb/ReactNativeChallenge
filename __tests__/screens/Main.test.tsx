import React from 'react';
import { render } from '@testing-library/react-native';
import Main from "../../src/screens/Main.tsx"; // Use @testing-library/react-native

describe('Main Screen', () => {
    it('renders correctly', () => {
        const { toJSON } = render(<Main />);
        expect(toJSON()).toMatchSnapshot();
    });

    it('contains a welcome text', () => {
        const { getByText } = render(<Main />);
        const welcomeText = getByText('Welcome');
        expect(welcomeText).toBeTruthy();
    });

    it('contains an image with the correct source', () => {
        const { getByTestId } = render(<Main />);
        const image = getByTestId('logo-image');
        expect(image.props.source).toEqual(require('../assets/browse-cuisines.png'));
    });
});
