import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

const originalConsoleError = global.console.error

global.console.error = (...args) => {
  const propTypeFailures = [/Failed prop type/, /Warning: Received/]

  if (propTypeFailures.some(p => p.test(args[0]))) {
    throw new Error(args[0])
  }

  originalConsoleError(...args)
}
