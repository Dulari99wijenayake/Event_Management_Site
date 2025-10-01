
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: string): TimeLeft | null => {
  const difference = +new Date(targetDate) - +new Date();
  let timeLeft: TimeLeft | null = null;

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const TimerDisplay: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-lg p-4 w-24 h-24 md:w-32 md:h-32">
        <span className="text-4xl md:text-5xl font-bold text-primary">{String(value).padStart(2, '0')}</span>
        <span className="text-sm md:text-base uppercase tracking-wider">{label}</span>
    </div>
);

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <div className="text-center text-2xl font-bold text-secondary">The event has started!</div>;
  }

  return (
    <div className="flex justify-center space-x-2 md:space-x-4">
      <TimerDisplay value={timeLeft.days} label="Days" />
      <TimerDisplay value={timeLeft.hours} label="Hours" />
      <TimerDisplay value={timeLeft.minutes} label="Minutes" />
      <TimerDisplay value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
