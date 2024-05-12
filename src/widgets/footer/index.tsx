import { Container, Link, Text } from '@radix-ui/themes';
import styles from './index.module.scss';
import logoColdSvg from './assets/logo-cold.svg';
import logoTextSvg from './assets/logo-text.svg';
import telegramSvg from './assets/telegram.svg';
import youtubeSvg from './assets/youtube.svg';
import vkSvg from './assets/vk.svg';

type Props = {
  telegramLink?: string;
  youtubeLink?: string;
  vkLink?: string;
  policyLink?: string;
};

export const Footer = ({
  telegramLink,
  youtubeLink,
  vkLink,
  policyLink,
}: Props) => {
  return (
    <footer className={styles.root}>
      <div className={styles.social}>
        <Container>
          <div className={styles.socialContent}>
            <div className={styles.logoContent}>
              <img {...logoColdSvg} alt='Иконка сайта' />
              <img {...logoTextSvg} alt='Wanderlust' />
            </div>
            <address className={styles.links}>
              <ul className={styles.linkList}>
                <Link href={telegramLink} rel='me' target='_blank'>
                  <li className={styles.linkItem}>
                    <img {...telegramSvg} alt='Профиль в Telegram' />
                  </li>
                </Link>
                <Link href={youtubeLink} rel='me' target='_blank'>
                  <li className={styles.linkItem}>
                    <img {...youtubeSvg} alt='Профиль в Youtube' />
                  </li>
                </Link>
                <Link href={vkLink} rel='me' target='_blank'>
                  <li className={styles.linkItem}>
                    <img {...vkSvg} alt='Профиль в VK' />
                  </li>
                </Link>
              </ul>
            </address>
          </div>
        </Container>
      </div>
      <div className={styles.info}>
        <Container>
          <div className={styles.infoContent}>
            <div className={styles.copyright}>
              <Text className={styles.text} size='2' weight='regular'>
                © 2024
              </Text>
              <Text className={styles.text} size='2' weight='regular'>
                Все права защищены
              </Text>
            </div>
            <Link
              className={styles.text}
              href={policyLink}
              underline='always'
              target='_blank'
              rel='policy'
              size='2'
              weight='regular'
            >
              Политика конфиденциальности
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
