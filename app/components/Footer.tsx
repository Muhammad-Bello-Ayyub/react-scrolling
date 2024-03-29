import styles from './styles.module.css';

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      &copy; devmab, {new Date().getFullYear()}
    </footer>
  )
}

export default Footer;