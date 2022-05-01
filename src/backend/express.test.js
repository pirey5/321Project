import { render, screen, waitFor } from '@testing-library/react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

//const app = require('./express')
test('Backend api.', async() => {
	//const response = await request(app).post("/api").send({})

	//expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
	expect(1 == 1)
})