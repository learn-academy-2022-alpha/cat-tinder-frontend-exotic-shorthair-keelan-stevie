// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import NotFound from './NotFound'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})


describe("When NotFound renders", () => {
    it("displays a heading", () => {
      const notFound = shallow(<NotFound />)
      const notFoundHeading = notFound.find("h1").text()
      expect(notFoundHeading).toEqual("404 PAGE NOT FOUND1")
    })
  })


//   Test Suites: 2 passed, 2 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        7.949 s