import { Button, Container, Link } from '@radix-ui/themes';
import logoSvg from './assets/logo.svg';
import styles from './index.module.scss';

type NavItem = {
  href: string;
  label: string;
};
const navItems: NavItem[] = [
  {
    href: '/',
    label: 'Главная',
  },
  {
    href: '/about',
    label: 'О нас',
  },
  {
    href: '/guides',
    label: 'Гайды',
  },
  {
    href: '/reviews',
    label: 'Отзывы',
  },
  {
    href: '/contacts',
    label: 'Контакты',
  },
];

type Props = {
  currentPath: string;
};
export const Header = ({ currentPath }: Props) => {
  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.content}>
          <img {...logoSvg} alt='Wanderlust' />
          <nav>
            <ul className={styles.navList}>
              {navItems.map((item) => {
                const isCurrent =
                  currentPath === '/'
                    ? currentPath === item.href
                    : currentPath.startsWith(item.href) && item.href !== '/';
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      size='3'
                      weight='medium'
                      underline='hover'
                      color={isCurrent ? undefined : 'gray'}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className={styles.actions}>
            <Button
              className={styles.button}
              color='teal'
              size='2'
              variant='solid'
            >
              Войти
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
