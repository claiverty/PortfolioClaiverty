export default function Button({
  children,
  href,
  variant = 'primary',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  external = false,
  ...props
}) {
  const classNames = ['button', `button--${variant}`, className].filter(Boolean).join(' ');
  const content = (
    <>
      {Icon && iconPosition === 'left' ? <Icon aria-hidden="true" size={17} /> : null}
      <span>{children}</span>
      {Icon && iconPosition === 'right' ? <Icon aria-hidden="true" size={17} /> : null}
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
