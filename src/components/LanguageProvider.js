import React from 'react'
import { useTranslation } from 'react-i18next';
import { LanguageContext } from './LanguageContext';

export const LanguageProvider = ({ children }) => {
    const { i18n } = useTranslation();

    return (
        <LanguageContext.Provider value={{ i18n }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider