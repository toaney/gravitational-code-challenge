import React from 'react';
import Header from './index.js';
import { render, cleanup } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

afterEach(cleanup);

it("header renders with the correct text", ()=>{
    const items = [{ text: 'Hacker News' }, {text: 'new'}, {text: 'submit'}, {text: 'login'}]
    const history = createMemoryHistory();

    const { container, getByText } = render(
        <Router history={history}>
            <Header />
        </Router>
    )

    // verify header loaded with correct text
    getByText(items[0].text)
    getByText(items[1].text)
    getByText(items[2].text)
    getByText(items[3].text)
})