import { shallow } from 'enzyme';

import { Section } from '~c/Section/Section';
import { Hero } from '~c/Hero/Hero';
import { Title } from '~c/Title/Title';
import App from '~p/index';

describe('Базовые тесты', () => {
  const app = shallow(<App />);
  const section = app.find(Section);
  const hero = app.find(Hero);
  const titles = section.find(Title);
  const heroTitle = hero.dive().find(Title);

  describe('Нужные заголовки', () => {
    describe('h1', () => {
      const titlesH1 = heroTitle.filterWhere((wrap) => {
        return wrap.prop('level') === 'h1';
      });

      it('На странице есть только один h1', () => {
        expect(titlesH1.length).toEqual(1);
      });

      it('На странице есть h1 с текстом "Подключите ресторан к сервису Яндекс.Еда"', () => {
        expect(titlesH1.dive().find('h1').text()).toEqual('Подключите ресторан к сервису Яндекс.Еда');
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
