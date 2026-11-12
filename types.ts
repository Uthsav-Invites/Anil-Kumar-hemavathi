
export interface WeddingEvent {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  icon: string;
  color: string;
}

export interface RSVPData {
  name: string;
  attending: boolean;
  guests: number;
  message: string;
}

export enum Section {
  HERO = 'hero',
  CEREMONIES = 'ceremonies',
  STORY = 'story',
  BLESSING = 'blessing',
  GALLERY = 'gallery',
  RSVP = 'rsvp'
}
