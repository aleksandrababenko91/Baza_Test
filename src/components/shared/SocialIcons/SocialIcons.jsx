import clsx from "clsx";
import { Icon } from "../Icon/Icon";
import styles from "./SocialIcons.module.scss";

const SocialIcons = ({ classNameCustom }) => {
  return (
    <div className={clsx(styles.list, classNameCustom)}>
      <a
        href="https://www.linkedin.com/company/baza-trainee-ukraine/"
        target="_blank"
        className={styles.link}
      >
        <Icon name="linkedin" width={48} height={48} className={styles.icon} />
      </a>
      <a href="https://www.facebook.com/BazaIT/" target="_blank">
        <Icon name="facebook" width={48} height={48} className={styles.icon} />
      </a>
      <a href="https://t.me/+CBXkAJlsCy83ZDYy" target="_blank">
        <Icon name="telegram" width={48} height={48} className={styles.icon} />
      </a>
    </div>
  );
};

export default SocialIcons;
