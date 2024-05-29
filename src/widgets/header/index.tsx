import { Button, Container, Link } from '@radix-ui/themes';
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { AuthModal } from './auth-modal';
import logoSvg from './assets/logo.svg';
import styles from './index.module.scss';
import { LogoutModal } from './logout-modal';

type NavItem = {
  href: string;
  label: string;
};
const navItems: NavItem[] = [
  {
    href: `${import.meta.env.BASE_URL}/`,
    label: 'Главная',
  },
  {
    href: `${import.meta.env.BASE_URL}/about`,
    label: 'О нас',
  },
  {
    href: `${import.meta.env.BASE_URL}/guides`,
    label: 'Гайды',
  },
  {
    href: `${import.meta.env.BASE_URL}/reviews`,
    label: 'Отзывы',
  },
  {
    href: `${import.meta.env.BASE_URL}/contacts`,
    label: 'Контакты',
  },
];

type Props = {
  currentPath: string;
};

export const Header = ({ currentPath }: Props) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const firebaseConfig = {
      apiKey: import.meta.env.PUBLIC_API_KEY,
      authDomain: import.meta.env.PUBLIC_AUTH_DOMAIN,
      projectId: import.meta.env.PUBLIC_PROJECT_ID,
      storageBucket: import.meta.env.PUBLIC_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.PUBLIC_MESSAGING_SENDER_ID,
      appId: import.meta.env.PUBLIC_APP_ID,
    };

    const app = initializeApp(firebaseConfig);

    const firebaseAuth = getAuth(app);

    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user?.email) {
        setEmail(user.email);
      } else {
        setEmail('');
      }
    });

    return () => unsubscribe();
  }, []);

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
            {email ? (
              <LogoutModal>
                <Button
                  className={styles.button}
                  color='teal'
                  size='2'
                  variant='solid'
                >
                  {email}
                </Button>
              </LogoutModal>
            ) : (
              <AuthModal>
                <Button
                  className={styles.button}
                  color='teal'
                  size='2'
                  variant='solid'
                >
                  Войти
                </Button>
              </AuthModal>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
