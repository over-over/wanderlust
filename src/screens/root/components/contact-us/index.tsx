import {
  Container,
  Section,
  Heading,
  Text,
  TextField,
  TextArea,
  Flex,
  Button,
} from '@radix-ui/themes';
import styles from './index.module.scss';

export const ContactUs = () => {
  return (
    <Section className={styles.root}>
      <div className={styles.graphic}>
        <div className={styles.graphicTop} />
        <div className={styles.graphicMain} />
      </div>
      <Container>
        <div className={styles.formContent}>
          <Heading size='9' weight='bold' mb='24px'>
            Свяжитесь с&nbsp;нами
          </Heading>
          <Text as='p' size='6' weight='medium' mb='48px'>
            Мы постараемся ответить на все ваши вопросы максимально оперативно
          </Text>
          <form
            className={styles.form}
            action='mailto:test@gmail.com?subject=Связь с Wanderlust'
            method='post'
            encType='text/plain'
            acceptCharset='utf-8'
          >
            <Flex asChild direction='column' gap='8px' flexGrow='1'>
              <label>
                <Text as='p' size='3' weight='medium'>
                  Как вас зовут
                </Text>
                <TextField.Root
                  size='3'
                  variant='surface'
                  placeholder='Ваше имя'
                  name='name'
                  autoComplete='name'
                  inputMode='text'
                  type='text'
                  required
                />
              </label>
            </Flex>
            <Flex asChild direction='column' gap='8px' flexGrow='1'>
              <label>
                <Text as='p' size='3' weight='medium'>
                  Email
                </Text>
                <TextField.Root
                  size='3'
                  variant='surface'
                  placeholder='example@mail.com'
                  autoComplete='email'
                  name='email'
                  inputMode='email'
                  type='email'
                  required
                />
              </label>
            </Flex>
            <Flex asChild direction='column' gap='8px' width='100%'>
              <label>
                <Text as='p' size='3' weight='medium'>
                  Ваше сообщение
                </Text>
                <TextArea
                  className={styles.textarea}
                  size='3'
                  resize='none'
                  variant='surface'
                  placeholder='Можете не стесняться'
                  inputMode='text'
                  name='message'
                  required
                  maxLength={200}
                />
              </label>
            </Flex>
            <Button
              className={styles.submit}
              size='4'
              variant='outline'
              type='submit'
            >
              Отправить
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  );
};

export default ContactUs;
