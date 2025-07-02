import React from 'react';
import type { CharacterProfile } from '../types';
import { Universe } from '../types';
import { UNIVERSE_OPTIONS, GENDER_OPTIONS, UNIVERSE_DATA } from '../constants';
import Input from './ui/Input';
import Select from './ui/Select';
import Button from './ui/Button';

interface CharacterFormProps {
  profile: CharacterProfile;
  setProfile: React.Dispatch<React.SetStateAction<CharacterProfile>>;
  onSubmit: () => void;
  isLoading: boolean;
}

const CharacterForm: React.FC<CharacterFormProps> = ({ profile, setProfile, onSubmit, isLoading }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'universe') {
      const newUniverse = value as Universe;
      const newUniverseData = UNIVERSE_DATA[newUniverse];
      setProfile(prev => ({
        ...prev,
        universe: newUniverse,
        race: newUniverseData.races[0],
        characterClass: newUniverseData.classes[0],
      }));
    } else {
      setProfile(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const currentUniverseData = UNIVERSE_DATA[profile.universe];

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800/50 p-6 rounded-lg shadow-lg backdrop-blur-sm space-y-6 border border-gray-700">
      <h2 className="text-2xl font-semibold text-amber-300 border-b border-gray-600 pb-3">Character Details</h2>
      
      <Input
        label="Name"
        name="name"
        value={profile.name}
        onChange={handleChange}
        placeholder="e.g., Elara Nightwind"
      />
      
      <Select
        label="Universe"
        name="universe"
        value={profile.universe}
        onChange={handleChange}
        options={UNIVERSE_OPTIONS}
      />

      <Select
        label="Race"
        name="race"
        value={profile.race}
        onChange={handleChange}
        options={currentUniverseData.races}
      />
      
      <Select
        label="Class"
        name="characterClass"
        value={profile.characterClass}
        onChange={handleChange}
        options={currentUniverseData.classes}
      />

      <Select
        label="Gender"
        name="gender"
        value={profile.gender}
        onChange={handleChange}
        options={GENDER_OPTIONS}
      />
      
      <Input
        label="Key Feature or Accessory"
        name="keyFeature"
        value={profile.keyFeature}
        onChange={handleChange}
        placeholder="e.g., an ancient, glowing grimoire"
      />

      <div className="pt-4">
        <Button type="submit" disabled={isLoading} fullWidth>
          {isLoading ? 'Summoning...' : 'Generate Portrait'}
        </Button>
      </div>
    </form>
  );
};

export default CharacterForm;
