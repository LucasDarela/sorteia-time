"use client"

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Drawing() {
  const [playerText, setPlayerText] = useState("");
  const [teamAName, setTeamAName] = useState("Vermelho");
  const [teamBName, setTeamBName] = useState("Azul");
  const [teamA, setTeamA] = useState<string[]>([]);
  const [teamB, setTeamB] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const parsePlayers = (): string[] => {
    return playerText
      .split("\n")
      .map((name) => name.trim())
      .filter((name) => name !== "");
  };

  const shuffleTeams = () => {
    const players = parsePlayers();
    const shuffled = [...players].sort(() => 0.5 - Math.random());
    const half = Math.ceil(shuffled.length / 2);
    setTeamA(shuffled.slice(0, half));
    setTeamB(shuffled.slice(half));
    setOpen(true); 
  };

  return (
    <main className="p-6 max-w-4xl mx-auto h-screen">
      <div className='mb-10'>
      <h1 className="text-2xl font-bold my-6 text-center">Sorteador de Times</h1>
      <p className='text-sm text-gray-500 text-center'>Personalize o nome das equipes e adicione o nome dos jogadores.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div>
          <label htmlFor='TeamAName' className="font-medium block">Time {teamAName}:</label>
          <Input id="TeamAName" value={teamAName} onChange={(e) => setTeamAName(e.target.value)} />
        </div>
        <div>
          <label htmlFor='TeamBName' className="font-medium block">Time {teamBName}:</label>
          <Input id="TeamBName" value={teamBName} onChange={(e) => setTeamBName(e.target.value)} />
        </div>
      </div>
      <div className="mb-10">
        <label htmlFor='Text-area' className="font-medium block mb-2">Jogadores (um por linha):</label>
        <Textarea id="Text-area"
          rows={10}
          value={playerText}
          onChange={(e) => setPlayerText(e.target.value)}
          placeholder={`Um(a) participante por linha. Ex:\nJoão\nMaria\nCarlos\nAna...`}
          className="w-full"
        />
      </div>
      <div className='w-full text-center'>
      <Button onClick={shuffleTeams} className="mb-6">
        Sortear Times
      </Button>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Times Sorteados</DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">{teamAName}</h3>
              <ul className="list-disc list-inside">
                {teamA.map((name, i) => (
                  <li key={i}>{name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{teamBName}</h3>
              <ul className="list-disc list-inside">
                {teamB.map((name, i) => (
                  <li key={i}>{name}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full text-center mt-4">
            <Button onClick={shuffleTeams} variant="outline">
              Sortear Novamente
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
    
  );
}