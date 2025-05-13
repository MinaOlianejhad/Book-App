import styles from './Layout.module.css'

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="http://botostart.ir">Botostart | React.js</a>
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By Mina With Love💙</p>
      </footer>
    </>
  );
}

export default Layout;
