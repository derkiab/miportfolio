import React, { useEffect, useState } from 'react';
import { Chrono } from 'react-chrono';
import { useTranslation } from 'react-i18next';

const Timeline = () => {
  //THIS SOLUTION WAS MADE WITH AI; NEED REVISION AND DEEP UNDERSTANDING!
  const { t, i18n } = useTranslation();
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    // This function is called every time the language changes
    const handleLanguageChange = () => {
      setKey(Math.random()); // Update the key causing the component to re-render
    };

    // Listen for language changes
    i18n.on('languageChanged', handleLanguageChange);

    // Cleanup listener on unmount
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const items = [
    {
      title: "Oct 2023",
      cardTitle: t('myTakecareTitle'),
      cardBgColor: "black",
      cardSubtitle: t('myTakecareSubtitle'),
      cardDetailedText: t('myTakecareContent'),
    },
    {
      title: t('aprilShort'),
      cardTitle: t('mySwDevelopmentTitle'),
      cardSubtitle: t('mySwDevelopmentSubtitle'),
      cardDetailedText: t('mySwDevelopmentContent'),
    },
    {
      title: t('januaryShort'),
      cardTitle: t('myDataEngineeringTitle'),
      cardSubtitle: t('myDataEngineeringSubtitle'),
      cardDetailedText: t('myDataEngineeringContent'),
    }
  ];

  return (
    <Chrono
      items={items}
      mode="VERTICAL"
      useReadMore={false}
      theme={{
        primary: "#79979f",
        secondary: "rgba(15,23,42,0.8)",
        cardBgColor: "rgba(170,176,203,0.1)",
        cardForeColor: "white",
        titleColor: "#ced4f0",
        cardSubtitleColor: "#ced4f0",
        cardTitleColor: "#ced4f0",
        titleColorActive: "#eee1c8",
        detailsColor: "#eee1c8",
        cardDetailsColor: "#eee1c8",
      }}
      key={key}
      scrollable={{ scrollbar: true }}
      cardHeight={100}
      cardWidth={650}
      timelinePointDimension={14}
      hideControls={true}
      fontSizes={{
        cardSubtitle: '1.2rem',
        cardText: '1rem',
        cardTitle: '1.3rem',
        title: '0.9rem',
        cardDetailedText: '1.2rem',
      }}
    />
  );
};

export default Timeline;
