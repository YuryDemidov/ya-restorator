import { shallow } from 'enzyme';

import Section from '../components/Section/Section';
import Title from '../components/Title/Title';
import App from '../pages/index';

describe('Базовые тесты', () => {
  const app = shallow(<App />);
  const section = app.find(Section);
  const titles = section.find(Title);

  describe('Нужные заголовки', () => {
    describe('h1', () => {
      const titlesH1 = titles.filterWhere((wrap) => {
        return wrap.prop('level') === 'h1';
      });

      it('На странице есть только один h1', () => {
        expect(titlesH1.length).toEqual(1);
      });
      it('На странице есть h1 с текстом "Ресторатор"', () => {
        expect(titlesH1.dive().find('h1').text()).toEqual('Ресторатор');
      });
    });

    describe('h2', () => {
      const titlesH2 = titles.filterWhere((wrap) => {
        return wrap.prop('level') === 'h2';
      });

      it('Количество заголовков h2 совпадает с общим количеством секций на странице', () => {
        expect(titlesH2.length).toEqual(1);
      });

      it('На странице есть h2 для блока "Частые вопросы (FAQ)"', () => {
        expect(titlesH2.dive().find('h2').text()).toEqual('Частые вопросы (FAQ)');
      });
    });
  });
});
