'use client';

import { useState,useEffect,useRef } from "react";
import Image from "next/image";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import {Play, Shuffle, SkipBack,Pause,SkipForward,Repeat,Volume2,Maximize2 } from 'lucide-react';
import {Track} from '@/types';


const currentTrack: Track = {
    title: "Memories",
    artist: "Herry Burr",
    albumArtUrl: "https://picsum.photos/seed/110/64/64",
    audioUrl: "/music/Maroon5-Memories.mp3",
    duration: "3:15",
    currentTime:"1:23",
    initialProgress: 1,
}


const formatTime = (time: number): string => {
    if (isNaN(time) || time < 0) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
};



export default function MusicPlayer () {

    const audioRef = useRef<HTMLAudioElement>(null);

    const [isPlaying, setIsPlaying]=useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0); 
    const [volume, setVolume] = useState(10); 

    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

    // Load Metadata and set up listeners
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Functions to update state from audio events
        // const setAudioData = () => {
        //     setDuration(audio.duration);
        //     setCurrentTime(audio.currentTime);
        // };
        const setAudioTime = () => setCurrentTime(audio.currentTime);

        if (audio.readyState >= 1) { // 1 means metadata is loaded (HAVE_METADATA)
        setDuration(audio.duration);
        setCurrentTime(audio.currentTime);
    }
        // Attach event listeners
       // audio.addEventListener('loadedmetadata', setAudioData);
        audio.addEventListener('timeupdate', setAudioTime);
        audio.addEventListener('ended', () => setIsPlaying(false));

        // Set initial volume
        audio.volume = volume / 100;

        // Cleanup function
        return () => {
           // audio.removeEventListener('loadedmetadata', setAudioData);
            audio.removeEventListener('timeupdate', setAudioTime);
            audio.removeEventListener('ended', () => setIsPlaying(false));
        };
    }, [volume]);

    // Effect to handle play/pause commands
    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.play().catch(error => {
                    if(error.name !== 'AbortError') {
                        console.error("Audio Playback Error:", error);
                    }
                })
            }else{
                audio.pause();
            }
        }
    }, [isPlaying]);

    // ----------------------
    // Handlers
    // ----------------------
    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleProgressChange = (value: number[]) => {
        const newProgress = value[0];
        const newTime = (newProgress / 100) * duration;
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
        }
    };

    const handleVolumeChange = (value: number[]) => {
        const newVolume = value[0];
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume / 100; 
        }
    };

    return (
        <div className="w-full max-w-md rounded-2xl bg-blue-500 shadow-lg p-6 space-y-4">

         {/* <audio ref={audioRef} src={currentTrack.audioUrl} preload="metadata" />  */}
         <audio 
                ref={audioRef} 
                src={currentTrack.audioUrl} 
                preload="metadata" 
                // ✅ Use onLoadedMetadata prop to reliably set duration state
                onLoadedMetadata={(e) => {
                    setDuration(e.currentTarget.duration);
                    setCurrentTime(e.currentTarget.currentTime);
                }}
            /> 

        {/* Current Track */}
        <div className="flex items-center gap-4">
          <Image
            src={currentTrack.albumArtUrl}
            alt={`${currentTrack.title} Ablum Art`}
            width={64}
            height={64}
            className="rounded-md"
            
          />
          <div>
            <p className="font-semibold text-lg">{currentTrack.title}</p>
            <p className="text-sm text-muted-foreground">{currentTrack.artist}</p>
          </div>
        </div>

        {/* Scrubber */}
        <div className="flex w-full items-center gap-2">
            <span className="text-xs text-muted-foreground">{formatTime(currentTime)}</span>
            <Slider 
                value={[progress]}
                max={100}
                step={0.1}
                onValueChange={handleProgressChange}
                defaultValue={[currentTrack.initialProgress]}
                 />
            <span className="text-xs text-muted-foreground">{formatTime(duration)}</span>
        </div>

        {/* Player Controls */}
        <div className="flex items-center justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
            >
              <Shuffle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" 
                onClick={() =>{
                    const audio=audioRef.current;
                    if(audio){
                        audio.currentTime -= 10
                    }
                 }}>
              <SkipBack className="h-6 w-6" />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="h-16 w-16 rounded-full bg-primary shadow-lg hover:bg-primary/90"
              onClick={handlePlayPause}
            >
              {isPlaying ? (
                <Pause className="h-8 w-8 text-primary-foreground fill-primary-foreground" />
              ) : (
                <Play className="h-8 w-8 text-primary-foreground fill-primary-foreground" />
              )}
            </Button>

            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" 
                onClick={() => {
                    const audio=audioRef.current;
                    if(audio) {
                        audio.currentTime +=10
                    }
            }}
            >         
              <SkipForward className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
            >
              <Repeat className="h-5 w-5" />
            </Button>
        </div>

        {/* Volume & Other Controls */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 w-full max-w-[120px]">
            <Volume2 className="h-5 w-5 text-muted-foreground" />
            <Slider defaultValue={[50]} 
                    value={[volume]}
                    max={100} 
                    step={1} 
                    onValueChange={handleVolumeChange}/>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Maximize2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
    )
}