import React from 'react';
import Section from '../components/Section/Section';
import Header from '../components/Header/Header';
import Title from '../components/Title/Title';
import Faq from '../components/Faq/Faq';

export default function Home() {
  return (
    <>
      <Header />
      <Section>
        <Title level="h1">Ресторатор</Title>
      </Section>
      <Section>
        <Title level="h2">Частые вопросы (FAQ)</Title>
        <Faq />
      </Section>
    </>
  );
}
