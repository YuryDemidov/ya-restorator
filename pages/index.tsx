import React from 'react';
import Section from '../components/Section/Section';
import Title from '../components/Title/Title';
import Faq from '../components/Faq/Faq';

export default function Home() {
  return (
    <>
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
