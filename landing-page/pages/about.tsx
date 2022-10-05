import useTranslation from 'next-translate/useTranslation';
export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <h1> {t('common:greeting')} </h1>
      <h1> {t('about:header')} </h1>
    </>
  );
}
