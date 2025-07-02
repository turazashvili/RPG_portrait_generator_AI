import { Universe, Gender, UniverseDefinitions } from './types';

export const GENDER_OPTIONS = Object.values(Gender);
export const UNIVERSE_OPTIONS = Object.values(Universe);

export const UNIVERSE_DATA: UniverseDefinitions = {
  [Universe.ForgottenRealms]: {
    races: ['Human', 'Elf', 'Dwarf', 'Halfling', 'Dragonborn', 'Tiefling', 'Gnome', 'Half-Orc'],
    classes: ['Fighter', 'Wizard', 'Rogue', 'Cleric', 'Ranger', 'Barbarian', 'Paladin', 'Sorcerer', 'Warlock', 'Monk', 'Druid', 'Bard'],
    style: 'classic high fantasy, Dungeons & Dragons art style, detailed digital painting'
  },
  [Universe.LordOfTheRings]: {
    races: ['Man', 'Elf', 'Dwarf', 'Hobbit', 'Orc'],
    classes: ['Ranger of the North', 'Elven Archer', 'Dwarven Warrior', 'Wizard (Istari)', 'Rider of Rohan', 'Gondorian Soldier'],
    style: 'epic, gritty, realistic fantasy, inspired by the films of Peter Jackson, muted and natural color palette'
  },
  [Universe.StarWars]: {
    races: ['Human', 'Twi\'lek', 'Wookiee', 'Zabrak', 'Rodian', 'Mon Calamari', 'Chiss', 'Trandoshan'],
    classes: ['Jedi Knight', 'Sith Lord', 'Bounty Hunter', 'Smuggler', 'Republic Trooper', 'Imperial Agent', 'Mandalorian Warrior'],
    style: 'sci-fi fantasy, Star Wars concept art style, cinematic, used future aesthetic'
  },
  [Universe.Cyberpunk]: {
    races: ['Human (Baseline)', 'Augmented Human', 'Full-Borg', 'Android'],
    classes: ['Netrunner', 'Solo (Mercenary)', 'Techie', 'Corporate', 'Fixer (Dealer)', 'Rockerboy'],
    style: 'neon-drenched, dystopian, futuristic, cybernetic enhancements, gritty, high-tech low-life, Blade Runner aesthetic'
  },
  [Universe.Warhammer40k]: {
    races: ['Human', 'Space Marine', 'Eldar', 'Ork', 'T\'au', 'Necron'],
    classes: ['Imperial Guardsman', 'Commissar', 'Inquisitor', 'Astartes Captain', 'Farseer', 'Warboss', 'Fire Warrior', 'Overlord'],
    style: 'grimdark science fantasy, gothic architecture, baroque and ornate armor, epic scale, dark and gritty'
  },
  [Universe.TheWitcher]: {
    races: ['Human', 'Witcher', 'Elf (Aen Seidhe)', 'Dwarf'],
    classes: ['Monster Slayer (Witcher)', 'Sorceress', 'Knight', 'Scoia\'tael Archer', 'Skellige Raider', 'Mage'],
    style: 'dark medieval fantasy, Slavic folklore inspiration, realistic and gritty, muted color palette, detailed leather and steel'
  },
  [Universe.ElderScrolls]: {
    races: ['Nord', 'Imperial', 'Breton', 'Redguard', 'High Elf (Altmer)', 'Wood Elf (Bosmer)', 'Dark Elf (Dunmer)', 'Orc (Orsimer)', 'Khajiit', 'Argonian'],
    classes: ['Dragonborn', 'Battlemage', 'Nightblade', 'Crusader', 'Spellsword', 'Thief', 'Companion Warrior', 'Mage of Winterhold'],
    style: 'high fantasy, vibrant, detailed, unique racial designs, inspired by Skyrim and Oblivion concept art'
  },
  [Universe.CthulhuMythos]: {
    races: ['Human'],
    classes: ['Investigator', 'Professor', 'Cultist', 'Detective', 'Doctor', 'Journalist', 'Librarian'],
    style: '1920s horror, lovecraftian, cosmic dread, sepia tones, film noir lighting, sense of unease and mystery'
  },
  [Universe.WorldOfWarcraft]: {
    races: ['Human', 'Orc', 'Night Elf', 'Undead (Forsaken)', 'Tauren', 'Gnome', 'Troll', 'Dwarf', 'Blood Elf', 'Draenei'],
    classes: ['Warrior', 'Mage', 'Warlock', 'Priest', 'Druid', 'Hunter', 'Shaman', 'Death Knight', 'Paladin', 'Rogue'],
    style: 'stylized high fantasy, vibrant and bold colors, exaggerated proportions, epic armor sets, Blizzard Entertainment art style'
  },
  [Universe.Shadowrun]: {
    races: ['Human', 'Elf', 'Dwarf', 'Ork', 'Troll'],
    classes: ['Street Samurai', 'Decker (Hacker)', 'Rigger', 'Mage', 'Shaman', 'Face (Diplomat)'],
    style: 'cyberpunk meets fantasy, neon lights and magic spells, high-tech gear with fantasy creatures, urban decay'
  }
};
