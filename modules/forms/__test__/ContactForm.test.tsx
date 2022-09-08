import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import ContactForm from '../ContactForm';

describe('Contact Form', () => {
    it('renders properly', () => {
        render(<ContactForm />);
        expect(screen.getByTestId('contact-form')).toBeInTheDocument();
    })

    it('has all necessary elements', () => {
        render(<ContactForm />);
        
        expect(screen.getByTestId('contact-form')).toHaveTextContent('First Name');
        expect(screen.getByTestId('contact-form')).toHaveTextContent('Last Name');
        expect(screen.getByTestId('contact-form')).toHaveTextContent('Email');
        expect(screen.getByTestId('contact-form')).toHaveTextContent('Message');
        expect(screen.getByTestId('contact-form')).toHaveTextContent('Send');
    })
})