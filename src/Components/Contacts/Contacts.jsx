import PropTypes from "prop-types";

import styles from './Contacts.module.css';

const Contacts = ({ children }) => <main className={styles.container}>{children}</main>;

Contacts.propTypes = {
  children: PropTypes.node,
}

export default Contacts;