export default function SectionTitle({ id, title }) {
  return (
    <div className="section-title">
      <h2 id={id}>
        {title}
        <span>.</span>
      </h2>
    </div>
  );
}
