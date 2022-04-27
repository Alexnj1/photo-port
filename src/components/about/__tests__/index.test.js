// import all necessary components
import React from 'react'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import About from '..'

// call the jest cleanup function, executes after each test to ensure there is no leftover memory data
afterEach(cleanup)

// declare test component with describe

describe('About component', () => {
    // test case one
    it('renders', () => {
        render(<About />)
    })

    // test case two
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About/>)

        expect(asFragment()).toMatchSnapshot();
    })
})