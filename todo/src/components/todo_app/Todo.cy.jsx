import React from 'react'
import Todo from './Todo'

describe('<Todo />', () => {
  it('renders', () => {
    cy.mount(<Todo />)
  })
})