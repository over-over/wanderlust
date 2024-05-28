import { AlertDialog, Button, Flex, Theme } from '@radix-ui/themes';
import { useEffect, useState, type ReactNode } from 'react';
import { getAuth, type Auth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import styles from './index.module.scss';

type Props = {
  children: ReactNode;
};

export const LogoutModal = ({ children }: Props) => {
  const [auth, setAuth] = useState<Auth | null>(null);

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

    setAuth(getAuth(app));
  }, []);

  const onLogout = () => {
    auth?.signOut();
  };

  return (
    <Theme
      appearance='light'
      accentColor='teal'
      grayColor='slate'
      radius='large'
      scaling='100%'
      className={styles.theme}
      panelBackground='solid'
    >
      <AlertDialog.Root>
        <AlertDialog.Trigger>{children}</AlertDialog.Trigger>
        <AlertDialog.Content maxWidth='450px'>
          <AlertDialog.Title>Выход из аккаунта</AlertDialog.Title>
          <AlertDialog.Description size='3'>
            Вы уверены что хотите выйти? Если да, то вы в любой момент можете
            авторизоваться снова.
          </AlertDialog.Description>

          <Flex gap='3' mt='4' justify='end'>
            <AlertDialog.Cancel>
              <Button variant='soft' color='gray'>
                Отмена
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant='ghost' onClick={onLogout}>
                Выйти
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </Theme>
  );
};
