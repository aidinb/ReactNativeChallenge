import React from 'react';
import { render } from '@testing-library/react-native';
import Main from '../../src/screens/Main'; // Adjust path if needed

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
        expect(image.props.source).toEqual(require('../../src/assets/reactnativelogo.png'));
    });
});
