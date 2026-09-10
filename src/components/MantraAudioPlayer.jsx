import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MantraAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const oscillatorsRef = useRef([]);

  const stopSound = () => {
    oscillatorsRef.current.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // ignore if already stopped
      }
    });
    oscillatorsRef.current = [];
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(0, audioCtxRef.current.currentTime);
    }
  };

  const playOmDrone = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(isMuted ? 0.0001 : 0.15, ctx.currentTime + 2);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Sacred Om frequency: 136.1 Hz (C#3) and natural harmonics
      const frequencies = [136.1, 272.2, 408.3, 68.05];
      const oscs = [];

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.type = idx === 0 ? 'sine' : idx === 3 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Gentle subtle vibrato (LFO)
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.2 + idx * 0.05, ctx.currentTime);
        lfoGain.gain.setValueAtTime(1.2, ctx.currentTime);
        lfo.connect(osc.frequency);
        lfo.start();

        const vol = idx === 0 ? 0.7 : idx === 1 ? 0.3 : idx === 2 ? 0.15 : 0.4;
        oscGain.gain.setValueAtTime(vol, ctx.currentTime);

        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
        oscs.push(osc, lfo);
      });

      oscillatorsRef.current = oscs;
    } catch (err) {
      console.error("Audio initialization error:", err);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopSound();
      setIsPlaying(false);
    } else {
      playOmDrone();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!gainNodeRef.current || !audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (!isMuted) {
      gainNodeRef.current.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.1);
      setIsMuted(true);
    } else {
      gainNodeRef.current.gain.setTargetAtTime(0.15, ctx.currentTime, 0.1);
      setIsMuted(false);
    }
  };

  useEffect(() => {
    return () => {
      stopSound();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center gap-2">
      <button
        onClick={togglePlay}
        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-lg font-hindi text-sm transition-all duration-300 transform hover:scale-105 border ${
          isPlaying
            ? 'bg-gradient-to-r from-saffron to-gold text-maroon font-bold border-gold shadow-[0_0_15px_rgba(255,153,51,0.5)]'
            : 'bg-white/95 dark:bg-darkcard/95 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 backdrop-blur-sm'
        }`}
        title={isPlaying ? "वैदिक ओंकार ध्वनि रोकें" : "शांत वैदिक ओंकार ध्वनि शुरू करें"}
      >
        <span className="text-base">{isPlaying ? '🕉️' : '🪷'}</span>
        <span className="hidden sm:inline">
          {isPlaying ? 'ओंकार ध्वनि चालू' : 'वैदिक शांति ध्वनि'}
        </span>
        {isPlaying && (
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-maroon opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-maroon"></span>
          </span>
        )}
      </button>

      {isPlaying && (
        <button
          onClick={toggleMute}
          className="p-2.5 rounded-full bg-white/90 dark:bg-darkcard/90 text-maroon dark:text-saffron shadow-md hover:bg-saffron/20 border border-gray-200 dark:border-gray-700 transition"
          title={isMuted ? "अनम्यूट करें" : "म्यूट करें"}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      )}
    </div>
  );
};

export default MantraAudioPlayer;
