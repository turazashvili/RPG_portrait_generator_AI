export enum Universe {
  ForgottenRealms = 'Forgotten Realms (D&D)',
  LordOfTheRings = 'Lord of the Rings',
  StarWars = 'Star Wars',
  Cyberpunk = 'Cyberpunk',
  Warhammer40k = 'Warhammer 40,000',
  TheWitcher = 'The Witcher',
  ElderScrolls = 'The Elder Scrolls',
  CthulhuMythos = 'Cthulhu Mythos (1920s)',
  WorldOfWarcraft = 'World of Warcraft',
  Shadowrun = 'Shadowrun',
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  NonBinary = 'Non-Binary',
}

export interface CharacterProfile {
  name: string;
  universe: Universe;
  characterClass: string;
  race: string;
  gender: Gender;
  keyFeature: string;
}

export interface SavedPortrait {
  id: number;
  imageUrl: string;
  profile: CharacterProfile;
}

export interface UniverseData {
  races: string[];
  classes: string[];
  style: string;
}

export type UniverseDefinitions = {
  [key in Universe]: UniverseData;
};
