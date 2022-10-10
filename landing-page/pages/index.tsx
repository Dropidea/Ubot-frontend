import React from 'react';
import useTranslation from 'next-translate/useTranslation';
const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1> {t('about:header')} </h1>
      <h1 style={{ textAlign: 'center' }}>{t('common:greeting')}</h1>
    </>)
}

export default Home;
