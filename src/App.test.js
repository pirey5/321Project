import { render, screen, waitFor } from '@testing-library/react';
import ChoreTable from './App';
import React from 'react'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import express from 'express';
Enzyme.configure({ adapter: new Adapter() })

import enableHooks from 'jest-react-hooks-shallow';
enableHooks(jest);

test('ChoreTable renders.', async() => {
	const renderTable = render(<ChoreTable />)
	expect(renderTable)
})

test('ChoreTable div is valid (body, header, inputs).', async() => {
	render(<ChoreTable />)
	const data = await waitFor(() => screen.getByTestId('body'));
	const header = await waitFor(() => screen.getByTestId('header'));
	const input = await waitFor(() => screen.getByTestId('inputs'));
	expect(data).toBeInTheDocument();
	expect(header).toBeInTheDocument();
	expect(input).toBeInTheDocument();
})

test('ChoreTable headers are visible.', async() => {
	render(<ChoreTable />)

	expect(screen.getByText('Chore Name')).toBeInTheDocument();
	expect(screen.getByText('Assigned To')).toBeInTheDocument();
	expect(screen.getByText('Description')).toBeInTheDocument();
	expect(screen.getByText('Operation')).toBeInTheDocument();
})

// I fucking give up.
/*test('Testing.', async() => {
	wrapper = Enzyme.shallow(<ChoreTable />)
	expect(true)
})*/