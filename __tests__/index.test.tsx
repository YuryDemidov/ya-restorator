import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '~p/index';
import { Section } from '~c/Section/Section';
import { Hero } from '~c/Hero/Hero';
import { Title } from '~c/Title/Title';
import { Faq, faqList } from '~c/Faq/Faq';

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

    // FIXME
    //  Не работает, потому что Title не находится в shallow-копии App, а внутри каждого компонента отдельно
    //  Плюс, количество секций захардкожено как 1
    // describe('h2', () => {
    //   const titlesH2 = titles.filterWhere((wrap) => {
    //     return wrap.prop('level') === 'h2';
    //   });
    //
    //   it('Количество заголовков h2 совпадает с общим количеством секций на странице', () => {
    //     expect(titlesH2.length).toEqual(1);
    //   });
    // });
  });

  describe('Компонент FAQ', () => {
    const faq = mount(<Faq />);
    const faqTitle = faq.find('Title');

    describe('Заголовок', () => {
      it('Только один в компоненте', () => {
        expect(faqTitle.length).toEqual(1);
      });

      it('Содержит правильный текст', () => {
        expect(faqTitle.text()).toEqual('Частые вопросы (FAQ)');
      });
    });

    describe('Список', () => {
      it('Содержит правильное количество пар вопрос-ответ', () => {
        expect(faq.find('FaqItem').length).toEqual(faqList.length);
      });
    });

    // FIXME
    //  Не работает симуляция клика с изменением стейта
    // describe('Элемент списка', () => {
    //   const faqFirstItem = faq.find('FaqItem').first();
    //   const firstItemTrigger = faqFirstItem.find('button');
    //   const setState = jest.fn();
    //   const useStateSpy = jest.spyOn(React, 'useState');
    //   // @ts-ignore
    //   useStateSpy.mockImplementation((init) => [init, setState]);
    //
    //   it('При нажатии на вопрос раскрывает ответ', () => {
    //     firstItemTrigger.simulate('click', { currentTarget: firstItemTrigger.getDOMNode() });
    //     expect(setState).toHaveBeenCalledTimes(1);
    //   });
    //
    //   it('При повторном нажатии на вопрос скрывает ответ', () => {});
    // });
  });
});
