export default function GlassCard({ as: Component = 'div', className = '', children, ...props }) {
  return (
    <Component className={['glass-card', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </Component>
  );
}
