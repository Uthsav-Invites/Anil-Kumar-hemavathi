import { WeddingEvent } from './types';

export const COLORS = {
  primary: '#800000', // Deep Maroon
  secondary: '#FFD700', // Gold
  accent: '#FF8C00', // Dark Orange/Saffron
  background: '#FDF5E6', // Old Lace
  text: '#4A0E0E', // Darker Maroon for text
};

export const WEDDING_DATE = new Date('2026-11-19T02:00:00+05:30');

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: 'reception',
    name: 'Reception & Dinner',
    date: 'Wednesday, November 18, 2026',
    time: '07:00 PM onwards',
    venue: 'P.S. Parems Function Hall, 4 Roads, Gangavaram Mandal, Chittoor Dist.',
    description: 'We cordially invite you to celebrate this joyous evening with dinner and bestow your heartfelt blessings upon the couple.',
    icon: '🥂',
    color: '#FFD700'
  },
  {
    id: 'muhurtham',
    name: 'Subha Muhurtham',
    date: 'Thursday, November 19, 2026',
    time: 'Bet. 2:00 AM & 3:00 AM (Subha Kanya Lagnam)',
    venue: 'P.S. Parems Function Hall, 4 Roads, Gangavaram Mandal, Chittoor Dist.',
    description: 'The sacred moment of union where Chi. D. Anil Kumar & Chi.La.Sou. P. Hemavathi tie the knot in Subha Kanya Lagnam in the divine presence of family and elders.',
    icon: '🔥',
    color: '#800000'
  }
];


export const SLOKAS = [
  "శ్రీరస్తు శుభమస్తు కళ్యాణమస్తు ॥ శ్రీ లక్ష్మీ వేంకటేశ్వర స్వామి ప్రసన్నమ్ ॥",
  "వాగర్థావివ సంపృక్తౌ వాగర్థప్రతిపత్తయే । జగతః పితరౌ వందే పార్వతీపరమేశ్వరౌ ॥",
  "స్వస్తిశ్రీ పరాభవనామ సం|| కార్తీక మాసం శుక్ల ఏకాదశి గురువారం ఉ॥పూ॥ 2.00 - 3.00 గంటల మధ్య శుభ కన్య లగ్నమందు",
  "వక్రతుండ మహాకాయ సూర్యకోటి సమప్రభ । నిర్విఘ్నం కురు మే దేవ సర్వకార్యేషు సర్వదా ॥"
];

export const HORIZONTAL_IMAGES = [
  { url: '/a.jpeg' },
  { url: '/b.jpeg' },
  { url: '/c.jpeg' },
  { url: '/d.jpeg' },
  { url: '/e.jpeg' },
  { url: '/f.jpeg' },
  { url: '/g.jpeg' },

];
