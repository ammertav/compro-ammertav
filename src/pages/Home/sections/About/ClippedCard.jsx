import "./ClippedCard.css";

function SingleCard() {
  const cardPath =
"M 26,0 L 78,0 C 94,0 87,19 104,19 L 156,19 C 172,19 166,0 182,0 L 234,0 Q 260,0 260,26 L 260,220 Q 260,240 234,240 L 26,240 Q 0,240 0,220 L 0,26 Q 0,0 26,0 Z";

  return (
    <div
      className="clipped-card"
      style={{
        clipPath: `path('${cardPath}')`,
      }}
    >
      <div className="glow-effect"></div>
    </div>
  );
}

export default function ClippedCard() {
  return (
    <div className="card-column">
        <SingleCard />
        <SingleCard />
        <SingleCard />

    </div>
  );
}