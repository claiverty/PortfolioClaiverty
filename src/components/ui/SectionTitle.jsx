export default function SectionTitle({ id, title, accent = '.', align = 'left', className = '' }) {
  return (
    <div
      className={['section-title', align === 'center' ? 'center' : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      <h2 id={id}>
        {title}
        {accent ? <span>{accent}</span> : null}
      </h2>
    </div>
  );
}
