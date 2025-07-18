// src/components/Features.tsx
type Feature = {
  emoji: string;
  text: string;
};

const features: Feature[] = [
  {emoji: "🔍", text: "Fast tab search by title or URL"},
  {emoji: "🗂️", text: "Tab grouping by browser window"},
  {emoji: "⚡", text: "Quick switch and close actions"},
  {emoji: "🚨", text: "Highlight duplicate tabs"},
  {emoji: "🔥", text: "Drag & drop to move tabs"}
];

export default function Features() {
  return (
    <ul>
      {features.map((f, idx) => (
        <li key={idx}>{f.emoji} {f.text}</li>
      ))}
    </ul>
  );
}
