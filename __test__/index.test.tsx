import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from '../pages/index'

describe('Main Page', () => {
    it('loads properly', () => {
        render(<Home />);
        expect(screen.getByTestId('home-page')).toBeInTheDocument();
    })
    it('has all necessary elements', () => {
        render(<Home />);
        expect(screen.getByTestId('home-page')).toHaveTextContent("Hi! I'm Remy!");
        expect(screen.getByTestId('home-page')).toHaveTextContent('Front-End Developer');
        expect(screen.getByTestId('home-page')).toHaveTextContent('Technologies');
        expect(screen.getByTestId('home-page')).toHaveTextContent('Languages');
    })
})