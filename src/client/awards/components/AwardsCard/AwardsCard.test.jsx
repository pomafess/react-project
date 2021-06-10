import { render } from '@testing-library/react';
import React from 'react';
import AwardsCard from './AwardsCard';

describe('AwardsCard', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<AwardsCard {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('AwardsCard')).toBeTruthy();
    });
});
