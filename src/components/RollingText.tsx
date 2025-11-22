"use client";

interface RollingTextProps {
  text: string;
}

export default function RollingText({ text }: RollingTextProps) {
  const letters = text.split("");

  return (
    <span className="rolling-text-container">
      {letters.map((letter, index) => (
        <span
          key={index}
          className="rolling-letter"
          style={{
            animationDelay: `${index * 0.03}s`,
          }}
        >
          <span className="letter-wrapper">
            <span className="letter-original">{letter === ' ' ? '\u00A0' : letter}</span>
            <span className="letter-duplicate">{letter === ' ' ? '\u00A0' : letter}</span>
          </span>
        </span>
      ))}
    </span>
  );
}

