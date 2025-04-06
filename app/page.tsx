"use client"

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [playersPerSide, setPlayersPerSide] = useState<number>(0);
  const [playerNames, setPlayerNames] = useState<string[]>([]);
  const [teamA, setTeamA] = useState<string[]>([]);
  const [teamB, setTeamB] = useState<string[]>([]);
  const [teamAName, setTeamAName] = useState<string>('Time Vermelho');
  const [teamBName, setTeamBName] = useState<string>('Time Azul');

  const totalPlayers = playersPerSide * 2;

  const handleChangeName = (index: number, name: string) => {
    const newNames = [...playerNames];
    newNames[index] = name;
    setPlayerNames(newNames);
  };

  const shuffleTeams = () => {
    const allPlayers = [...playerNames];
    const shuffled = allPlayers.sort(() => 0.5 - Math.random());
    setTeamA(shuffled.slice(0, playersPerSide));
    setTeamB(shuffled.slice(playersPerSide, totalPlayers));
  };

  return (
    <main className="text-center p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold my-8">Sorteio de Times de Futebol</h1>

      <div className="mb-4">
        <label className="block font-medium mb-2">Número de jogadores por time (linha):</label>
        <Input
          type="number"
          min={1}
          value={playersPerSide || ''}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (isNaN(value) || value <= 0) {
              setPlayersPerSide(0);
              setPlayerNames([]);
              setTeamA([]);
              setTeamB([]);
              return;
            }
          
            setPlayersPerSide(value);
            setPlayerNames(Array(value * 2).fill(''));
            setTeamA([]);
            setTeamB([]);
          }}
          className="w-full"
        />
      </div>

      {playerNames.length > 0 && (
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Jogadores</h2>
          {playerNames.map((name, index) => (
            <Input
              key={index}
              placeholder={`Jogador ${index + 1}`}
              value={name}
              onChange={(e) => handleChangeName(index, e.target.value)}
              className="mb-2"
            />
          ))}
        </div>
      )}

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-2">Nome do {teamAName}:</label>
          <Input value={teamAName} onChange={(e) => setTeamAName(e.target.value)} />
        </div>
        <div>
          <label className="block font-medium mb-2">Nome do {teamBName}:</label>
          <Input value={teamBName} onChange={(e) => setTeamBName(e.target.value)} />
        </div>
      </div>

      <Button onClick={shuffleTeams} className="my-6">
        Sortear Times
      </Button>

      {teamA.length > 0 && teamB.length > 0 && (
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">{teamAName}</h3>
            <ul className="list-disc list-inside">
              <li className="font-bold">Goleiro</li>
              {teamA.map((name, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">{teamBName}</h3>
            <ul className="list-disc list-inside">
              <li className="font-bold">Goleiro</li>
              {teamB.map((name, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </main>
  );
}
