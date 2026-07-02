// Paleta da roda de emoções (inspirada em Plutchik).
// Mapeia cor -> família de emoção. Ajustar com base no material de design (design/roda-emocoes).

export type EmotionKey =
  | 'raiva'
  | 'medo'
  | 'tristeza'
  | 'alegria'
  | 'confianca'
  | 'nojo'
  | 'surpresa'
  | 'antecipacao';

export interface EmotionColor {
  key: EmotionKey;
  label: string;
  color: string;
  description: string;
}

export const EMOTION_WHEEL: EmotionColor[] = [
  { key: 'raiva', label: 'Raiva', color: '#D64545', description: 'Irritação, frustração, fúria' },
  { key: 'medo', label: 'Medo', color: '#6B4EA0', description: 'Ansiedade, apreensão, pavor' },
  { key: 'tristeza', label: 'Tristeza', color: '#3B6FA0', description: 'Melancolia, desânimo, luto' },
  { key: 'alegria', label: 'Alegria', color: '#E8B93B', description: 'Contentamento, felicidade, euforia' },
  { key: 'confianca', label: 'Confiança', color: '#4CA06E', description: 'Aceitação, admiração, segurança' },
  { key: 'nojo', label: 'Nojo', color: '#6E7F3B', description: 'Desagrado, aversão, repulsa' },
  { key: 'surpresa', label: 'Surpresa', color: '#3BA0A0', description: 'Espanto, distração, choque' },
  { key: 'antecipacao', label: 'Antecipação', color: '#E08A3B', description: 'Interesse, expectativa, vigilância' },
];

// Lembrete de acessibilidade: sempre exibir o `label` junto da cor.
// Nunca depender só da cor (daltonismo).
