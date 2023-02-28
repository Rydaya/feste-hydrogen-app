import {type EnhancedMenu} from '~/lib/utils';
import {Link} from '~/components/Link';
import {IconSearch, IconMenu, IconBag, IconLogo} from '~/components/Icon';
import {Drawer, useDrawer} from '~/components/Drawer';
import type {LayoutData} from '../root';

export function Layout({
  children,
  layout,
}: {
  children: React.ReactNode;
  layout: LayoutData;
}) {
  return (
    <div className="flex flex-col min-h-screen antialiased">
      <Header menu={layout?.headerMenu} />
      <main
        role="main"
        id="mainContent"
        className="flex-grow px-2.5 sm:px-5 md:px-10 py-14 md:py-20"
      >
        {children}
      </main>
    </div>
  );
}

function Header({menu}: {menu?: EnhancedMenu}) {
  const {
    isOpen: isCartOpen,
    openDrawer: openCart,
    closeDrawer: closeCart,
  } = useDrawer();

  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      {menu && (
        <MenuDrawer isOpen={isMenuOpen} onClose={closeMenu} menu={menu} />
      )}
      <DesktopHeader menu={menu} openCart={openCart} />
      <MobileHeader openMenu={openMenu} openCart={openCart} />
    </>
  );
}

function CartDrawer({isOpen, onClose}: {isOpen: boolean; onClose: () => void}) {
  return (
    <Drawer open={isOpen} onClose={onClose} heading="Cart" openFrom="left">
      <div className="grid pl-8 pt-10">
        <div className="grid mobile">
          <div className='mb-5'>
            Looks like you haven&rsquo;t added anything yet, let&rsquo;s get you
            started!
          </div>
          <Link className="bg-fill border border-textBase w-fit font-bold py-2 px-4 rounded" to="/" onClick={onClose}>
            Continue shopping
          </Link>
        </div>
      </div>
    </Drawer>
  );
}

export function MenuDrawer({
  isOpen,
  onClose,
  menu,
}: {
  isOpen: boolean;
  onClose: () => void;
  menu: EnhancedMenu;
}) {
  return (
    <Drawer open={isOpen} onClose={onClose} openFrom="left" heading="Menu">
      <div className="grid mobile">
        <MenuMobileNav menu={menu} onClose={onClose} />
      </div>
    </Drawer>
  );
}

function MenuMobileNav({
  menu,
  onClose,
}: {
  menu: EnhancedMenu;
  onClose: () => void;
}) {
  return (
    <nav className="grid gap-4 pl-8 pt-10">
      {(menu?.items || []).map((item) => (
        <span key={item.id} className="block">
          <Link to="#" target={item.target} onClick={onClose}>
            <div className="uppercase font-medium text-s">{item.title}</div>
          </Link>
        </span>
      ))}
    </nav>
  );
}

function MobileHeader({
  openCart,
  openMenu,
}: {
  openCart: () => void;
  openMenu: () => void;
}) {
  return (
    <header
      role="banner"
      className="flex md:hidden items-center justify-between w-full sticky z-40 top-0 transition px-5 py-4 bg-fill"
    >
      <Link className="" to="/">
        <IconLogo width="180" height="48" />
      </Link>

      <div className="flex items-center justify-end w-full gap-8">
        <IconSearch />
        <button
          onClick={openCart}
          className="relative flex items-center justify-center w-8 h-8"
        >
          <IconBag />
        </button>
        <button
          onClick={openMenu}
          className="relative flex items-center justify-center w-8 h-8"
        >
          <IconMenu />
        </button>
      </div>
    </header>
  );
}

function DesktopHeader({
  menu,
  openCart,
}: {
  openCart: () => void;
  menu?: EnhancedMenu;
}) {
  return (
    <header
      role="banner"
      className="hidden md:flex justify-between items-center sticky z-40 top-0 w-full transition px-10 py-6 bg-fill"
    >
      <div className="flex">
        <Link className="font-bold" to="/" prefetch="intent">
          <IconLogo />
        </Link>
      </div>
      <div className="flex gap-4 lg:gap-8 items-center">
        <nav className="flex gap-5 lg:gap-9">
          {(menu?.items || []).map((item) => (
            <Link
              key={item.id}
              to="#"
              target={item.target}
              prefetch="intent"
              className="uppercase font-sansSerif font-medium"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <IconSearch />
        <button
          onClick={openCart}
          className="relative flex items-center justify-center w-8 h-8"
        >
          <IconBag />
        </button>
      </div>
    </header>
  );
}
