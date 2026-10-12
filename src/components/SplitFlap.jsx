import { useState, useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/+-#$';

const SplitFlap = ({ words = ['BUILDER', 'SOLVER', 'STUDENT', 'DEV'], prefix = "I'm" }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const currentWord = words[wordIndex] || 'BUILDER';
  const maxLen = Math.max(...words.map((w) => w.length));

  const [displayChars, setDisplayChars] = useState(() =>
    currentWord.padEnd(maxLen, ' ').split('')
  );
  const timerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targetWord = currentWord.padEnd(maxLen, ' ');

    if (prefersReducedMotion) {
      const timeout = setTimeout(() => {
        setDisplayChars(targetWord.split(''));
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 3500);
      return () => clearTimeout(timeout);
    }

    let iterations = 0;
    const maxIterations = 14;

    const interval = setInterval(() => {
      iterations += 1;
      setDisplayChars(() => {
        const next = [];
        for (let i = 0; i < maxLen; i++) {
          const targetChar = targetWord[i];
          if (iterations > 4 + i * 2) {
            next.push(targetChar);
          } else {
            const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
            next.push(randomChar);
          }
        }
        return next;
      });

      if (iterations >= maxIterations + maxLen * 2) {
        clearInterval(interval);
        timerRef.current = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 2800);
      }
    }, 60);

    return () => {
      clearInterval(interval);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [wordIndex, currentWord, maxLen, words.length]);

  return (
    <div className="split-flap-container" aria-label={`${prefix} ${currentWord}`}>
      {prefix && (
        <span className="split-flap-prefix">{prefix}</span>
      )}
      <div className="split-flap-board">
        {displayChars.map((char, idx) => (
          <div key={idx} className="split-flap-tile">
            <div className="split-flap-top">
              <span>{char === ' ' ? '\u00A0' : char}</span>
            </div>
            <div className="split-flap-bottom">
              <span>{char === ' ' ? '\u00A0' : char}</span>
            </div>
            <div className="split-flap-line" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SplitFlap;
