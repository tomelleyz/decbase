export default function ServiceCard({ bgColor, icon, cardTitle }) {
  return (
    <div
      className="service-card"
      style={{ backgroundColor: bgColor === "brown" ? "#CAA892" : "#FFFFFF" }}
    >
      <img src={icon} alt="interior design icon" />
      <div>
        <h4 style={{ color: bgColor === "brown" ? "#FFFFFF" : "#212121" }}>
          {cardTitle}
        </h4>
        <p style={{ color: bgColor === "brown" ? "#FFFFFF" : "#646464" }}>
          Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod tempor
          incididunt ut labore.
        </p>
      </div>
    </div>
  );
}
