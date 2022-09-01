import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import MainLayout from '../MainLayout';

describe('Main Layout', () => {
    it('renders properly', () => {
        render(<MainLayout />);
        expect(screen.getByTestId('main-layout')).toBeInTheDocument();
    })

    it('has all necessary children', () => {
        render(<MainLayout />);
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
        expect(screen.getByTestId('main-container')).toBeInTheDocument();
    })
})