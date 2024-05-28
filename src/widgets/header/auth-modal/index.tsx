import {
  AlertDialog,
  Box,
  Button,
  Flex,
  IconButton,
  Tabs,
  Text,
  TextField,
  Theme,
} from '@radix-ui/themes';
import {
  useEffect,
  useState,
  type FormEventHandler,
  type ReactNode,
} from 'react';
import {
  getAuth,
  type Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import styles from './index.module.scss';

// type LoginForm = {
//   mail: string;
//   password: string;
// };
// type CreateForm = {
//   mail: string;
//   newPassword: string;
//   newPasswordConfirm: string;
// };

type Props = {
  children: ReactNode;
};

export const AuthModal = ({ children }: Props) => {
  const [auth, setAuth] = useState<Auth | null>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [confirmError, setConfirmError] = useState(' ');
  const [loginError, setLoginError] = useState(' ');
  const [createError, setCreateError] = useState(' ');

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

  const onLogin: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const mail = data.get('mail') as string;
    const password = data.get('password') as string;

    if (!auth || !mail || !password) {
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, mail, password);
    } catch (error) {
      setLoginError(
        `Ошибка авторизации ${typeof error === 'object' && error !== null && 'code' in error ? error.code : ''}\nПопробуйте перезагрузить страницу и попробовать снова.`,
      );
    }
  };

  const onCreate: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const mail = data.get('mail') as string;
    const password = data.get('newPassword') as string;
    const passwordConfirm = data.get('newPasswordConfirm') as string;

    if (!auth || !mail || !password || !passwordConfirm) {
      return;
    }

    if (password !== passwordConfirm) {
      setConfirmError('Пароли не совпадают');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, mail, password);
    } catch (error) {
      setCreateError(
        `Ошибка регистрации ${typeof error === 'object' && error !== null && 'code' in error ? error.code : ''}\nПопробуйте перезагрузить страницу и попробовать снова.`,
      );
    }
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
          <Tabs.Root defaultValue='login'>
            <Tabs.List size='2'>
              <Tabs.Trigger className={styles.tabTrigger} value='login'>
                Войти
              </Tabs.Trigger>
              <Tabs.Trigger className={styles.tabTrigger} value='signup'>
                Создать аккаунт
              </Tabs.Trigger>
            </Tabs.List>

            <Box pt='16px'>
              <Tabs.Content value='login'>
                <AlertDialog.Description
                  className={styles.preWrap}
                  mb='8px'
                  color='red'
                  size='2'
                >
                  {loginError}
                </AlertDialog.Description>

                <form className={styles.form} onSubmit={onLogin}>
                  <Flex asChild direction='column' gap='8px' flexGrow='1'>
                    <label>
                      <Text as='p' size='2' weight='medium'>
                        Ваша почта
                      </Text>
                      <TextField.Root
                        size='3'
                        variant='surface'
                        placeholder='example@mail.com'
                        name='mail'
                        autoComplete='email'
                        inputMode='email'
                        type='email'
                        required
                      />
                    </label>
                  </Flex>
                  <Flex asChild direction='column' gap='8px' flexGrow='1'>
                    <label>
                      <Text as='p' size='2' weight='medium'>
                        Пароль
                      </Text>
                      <TextField.Root
                        size='3'
                        variant='surface'
                        autoComplete='current-password'
                        name='password'
                        inputMode='text'
                        type={isPasswordVisible ? 'text' : 'password'}
                        required
                      >
                        <TextField.Slot side='right'>
                          <IconButton
                            type='button'
                            size='1'
                            variant='ghost'
                            onClick={() =>
                              setIsPasswordVisible(!isPasswordVisible)
                            }
                          >
                            {isPasswordVisible ? (
                              <EyeOpenIcon />
                            ) : (
                              <EyeNoneIcon />
                            )}
                          </IconButton>
                        </TextField.Slot>
                      </TextField.Root>
                    </label>
                  </Flex>

                  <Flex gap='3' mt='4' justify='end'>
                    <AlertDialog.Cancel>
                      <Button size='3' variant='soft' color='gray'>
                        Отмена
                      </Button>
                    </AlertDialog.Cancel>

                    <Button size='3' variant='outline' type='submit'>
                      Отправить
                    </Button>
                  </Flex>
                </form>
              </Tabs.Content>

              <Tabs.Content value='signup'>
                <AlertDialog.Description
                  className={styles.preWrap}
                  mb='8px'
                  color='red'
                  size='2'
                >
                  {createError}
                </AlertDialog.Description>

                <form className={styles.form} onSubmit={onCreate}>
                  <Flex asChild direction='column' gap='8px' flexGrow='1'>
                    <label>
                      <Text as='p' size='2' weight='medium'>
                        Ваша почта
                      </Text>
                      <TextField.Root
                        size='3'
                        variant='surface'
                        placeholder='example@mail.com'
                        name='mail'
                        autoComplete='email'
                        inputMode='email'
                        type='email'
                        required
                      />
                    </label>
                  </Flex>
                  <Flex asChild direction='column' gap='8px' flexGrow='1'>
                    <label>
                      <Text as='p' size='2' weight='medium'>
                        Придумайте пароль
                      </Text>
                      <Text as='p' size='1' weight='regular' color='gray'>
                        Минимум 8 символов
                      </Text>
                      <TextField.Root
                        size='3'
                        variant='surface'
                        autoComplete='new-password'
                        name='newPassword'
                        minLength={8}
                        inputMode='text'
                        type={isNewPasswordVisible ? 'text' : 'password'}
                        required
                      >
                        <TextField.Slot side='right'>
                          <IconButton
                            type='button'
                            size='1'
                            variant='ghost'
                            onClick={() =>
                              setIsNewPasswordVisible(!isNewPasswordVisible)
                            }
                          >
                            {isNewPasswordVisible ? (
                              <EyeOpenIcon />
                            ) : (
                              <EyeNoneIcon />
                            )}
                          </IconButton>
                        </TextField.Slot>
                      </TextField.Root>
                    </label>
                  </Flex>
                  <Flex asChild direction='column' gap='8px' flexGrow='1'>
                    <label>
                      <Text as='p' size='2' weight='medium'>
                        Повторите пароль
                      </Text>
                      <TextField.Root
                        size='3'
                        variant='surface'
                        autoComplete='new-password'
                        name='newPasswordConfirm'
                        inputMode='text'
                        type='password'
                        required
                      />
                      <Text as='p' size='1' color='red' weight='regular'>
                        {confirmError}
                      </Text>
                    </label>
                  </Flex>

                  <Flex gap='3' mt='4' justify='end'>
                    <AlertDialog.Cancel>
                      <Button size='3' variant='soft' color='gray'>
                        Отмена
                      </Button>
                    </AlertDialog.Cancel>

                    <Button size='3' variant='outline' type='submit'>
                      Отправить
                    </Button>
                  </Flex>
                </form>
              </Tabs.Content>
            </Box>
          </Tabs.Root>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </Theme>
  );
};
