import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './index.js';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Footer />, div)
})

it('renders footer with correct text', () => {
    const items = [{ text: 'Guidelines' }, {text: 'Search:'}]
    const { getByText } = render(<Footer />)
    getByText(items[0].text)
    getByText(items[1].text)
})