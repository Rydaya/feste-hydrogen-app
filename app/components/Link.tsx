import {
  Link as RemixLink,
  NavLink as RemixNavLink,
  type NavLinkProps as RemixNavLinkProps,
  type LinkProps as RemixLinkProps,
  useMatches,
} from '@remix-run/react';

type LinkProps = Omit<RemixLinkProps, 'className'> & {
  className?: RemixNavLinkProps['className'] | RemixLinkProps['className'];
};

export function Link(props: LinkProps) {
  const {to, className, ...resOfProps} = props;
  const [root] = useMatches();
  const selectedLocale = root.data?.selectedLocale;

  let toWithLocale = to;

  if (typeof to === 'string') {
    toWithLocale = selectedLocale ? `${selectedLocale.pathPrefix}${to}` : to;
  }

  if (typeof className === 'function') {
    return (
      <RemixNavLink to={toWithLocale} className={className} {...resOfProps} />
    );
  }

  return <RemixLink to={toWithLocale} className={className} {...resOfProps} />;
}
