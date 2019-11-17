import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
global.fetch = require('jest-fetch-mock')
//simply json adapter
configure({ adapter: new Adapter() });