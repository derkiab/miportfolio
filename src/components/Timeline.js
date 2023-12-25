import React from 'react'
import { Chrono } from 'react-chrono';

const items = [
  {
    title: "Oct 2023",
    cardTitle: "CEO de TakeCare",
    cardBgColor: "black",
    cardSubtitle: "Proyecto de emprendimiento innovador IDEA e Innova",
    cardDetailedText: "Adjudicación de fondo concursable de la UCSC",

  },
  {
    title: "Abr 2023",
    cardTitle: "Desarrollador de Software",
    cardSubtitle: "Dirección de Investigación UCSC",
    cardDetailedText: "Desarrollo de aplicación web con Laravel 10",

  },
  {
    title: "Ene 2023",
    cardTitle: "Ingeniero de datos",
    cardSubtitle: "Soc. Pesquera Landes S.A.",
    cardDetailedText: "Tratamiento de datos en Data Factory en la nube de Azure, Microsoft Dataverse, Data Lake Gen v2 y SQL Server on-premises. Implementación de pipelines. Generación de reportes en PowerBi. Automatización de procesos con Power Automate y Inteligencia Artificial. ",

  }
];

const VerticalTimeline = () => {
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

export default VerticalTimeline;