import 'server-only';

const dictionaries = {
  fr: () => import('./fr.json').then((module) => module.default),
  nl: () => import('./nl.json').then((module) => module.default),
  en: () => import('./en.json').then((module) => module.default),
  de: () => import('./de.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'fr' | 'nl' | 'en' | 'de') => {
  // Par défaut, si une langue non supportée est passée, on retourne le français
  return dictionaries[locale] ? dictionaries[locale]() : dictionaries.fr();
};
