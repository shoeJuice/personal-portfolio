import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Contact from '../contact';

describe('contact page', () => {
    it('renders properly', () => {
        render(<Contact />);
        expect(screen.getByTestId('contact-page')).toBeInTheDocument();
    })

    it('has all necessary elements', () => {
        render(<Contact />);
        expect(screen.getByTestId('contact-page')).toHaveTextContent('Contact Us!')
        expect(screen.getByTestId('contact-form')).toBeInTheDocument();
    })
})