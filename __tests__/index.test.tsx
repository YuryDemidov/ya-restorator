import { shallow } from 'enzyme';

import Section from '../components/Section/Section';
import Title from '../components/Title/Title';
import App from '../pages/index';

describe('With Enzyme', () => {
  it('App shows "Ресторатор" in a <h1> tag', () => {
    const app = shallow(<App />);
    expect(app.find(Section).find(Title).html()).toContain('<h1');
    expect(app.find(Section).find(Title).html()).toContain('Ресторатор');
  });
});
