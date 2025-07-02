import React, { useState, useCallback, useEffect } from 'react';
import type { CharacterProfile, SavedPortrait } from './types';
import { Universe, Gender } from './types';
import { generateCharacterPortrait } from './services/geminiService';
import Header from './components/Header';
import CharacterForm from './components/CharacterForm';
import PortraitDisplay from './components/PortraitDisplay';
import { UNIVERSE_DATA } from './constants';
import SavedPortraitsGallery from './components/SavedPortraitsGallery';

const App: React.FC = () => {
  const defaultUniverse = Universe.ForgottenRealms;
  const defaultUniverseData = UNIVERSE_DATA[defaultUniverse];

  const [profile, setProfile] = useState<CharacterProfile>({
    name: 'Aelar',
    universe: defaultUniverse,
    race: defaultUniverseData.races[1], // Elf
    characterClass: defaultUniverseData.classes[4], // Ranger
    gender: Gender.Male,
    keyFeature: 'a glowing silver arrow',
  });
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [savedPortraits, setSavedPortraits] = useState<SavedPortrait[]>([]);

  useEffect(() => {
    try {
      const storedPortraits = localStorage.getItem('rpg-portrait-gallery');
      if (storedPortraits) {
        setSavedPortraits(JSON.parse(storedPortraits));
      }
    } catch (e) {
      console.error("Failed to load or parse portraits from local storage:", e);
      setSavedPortraits([]);
    }
  }, []);

  const handleGenerate = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imageUrl = await generateCharacterPortrait(profile);
      setGeneratedImage(imageUrl);
      
      const newPortrait: SavedPortrait = {
        id: Date.now(),
        imageUrl,
        profile,
      };

      setSavedPortraits(prev => {
        const updatedPortraits = [newPortrait, ...prev];
        try {
          localStorage.setItem('rpg-portrait-gallery', JSON.stringify(updatedPortraits));
        } catch (e) {
           console.error("Failed to save portrait to local storage", e);
           setError("Portrait generated but failed to save to your gallery.");
        }
        return updatedPortraits;
      });

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [profile]);

  const handleViewPortrait = (portrait: SavedPortrait) => {
    setProfile(portrait.profile);
    setGeneratedImage(portrait.imageUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadPortrait = (imageUrl: string, name: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${name.replace(/\s+/g, '_').toLowerCase()}_portrait.jpeg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const handleDeletePortrait = (id: number) => {
    setSavedPortraits(prev => {
      const updatedPortraits = prev.filter(p => p.id !== id);
       try {
        localStorage.setItem('rpg-portrait-gallery', JSON.stringify(updatedPortraits));
      } catch (e) {
         console.error("Failed to update local storage after deletion", e);
      }
      return updatedPortraits;
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto max-w-7xl">
        <Header />
        <main className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <CharacterForm
              profile={profile}
              setProfile={setProfile}
              onSubmit={handleGenerate}
              isLoading={isLoading}
            />
          </div>
          <div className="lg:col-span-3">
            <PortraitDisplay
              image={generatedImage}
              isLoading={isLoading}
              error={error}
            />
          </div>
        </main>
        <SavedPortraitsGallery
          portraits={savedPortraits}
          onView={handleViewPortrait}
          onDownload={handleDownloadPortrait}
          onDelete={handleDeletePortrait}
        />
      </div>
    </div>
  );
};

export default App;
