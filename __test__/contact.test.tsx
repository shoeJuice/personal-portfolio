import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Contact from '../pages/contact';

describe('contact page', () => {
    it('renders properly', () => {
        render(<Contact />);
        expect(screen.getByTestId('contact-page')).toBeInTheDocument();
    })

    it('has all necessary elements', () => {
        render(<Contact />);
        expect(screen.getByTestId('contact-page')).toHaveTextContent('Leave a message!')
        expect(screen.getByTestId('contact-form')).toBeInTheDocument();
    })
})