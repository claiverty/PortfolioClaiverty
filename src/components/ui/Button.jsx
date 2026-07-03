export default function Button({ children, href, variant = 'primary', icon: Icon, external = false, ...props }) {
  const classNames = ['button', `button--${variant}`].join(' ');
  const content = (
    <>
      <span>{children}</span>
      {Icon ? <Icon aria-hidden="true" size={17} /> : null}
    </>
  );

  if (href) {
    return (
      <a
        className={classNames}
        href={href}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classNames} {...props}>
      {content}
    </button>
  );
}
