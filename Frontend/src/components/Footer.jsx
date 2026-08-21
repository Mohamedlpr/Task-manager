import GitHubButton from "react-github-btn";

function Footer() {
  return (
    <footer>
      <div>
        <GitHubButton
          href="https://github.com/Mohamedlpr"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-size="large"
          aria-label="Follow @Mohamedlpr on GitHub"
        >
          Follow @Mohamedlpr
        </GitHubButton>
        <GitHubButton
          href="https://github.com/Mohamedlpr/Task-manager"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          aria-label="Star Mohamedlpr/Task-manager on GitHub"
        >
          Star
        </GitHubButton>
      </div>
      <p>&copy; {new Date().getFullYear()} TaskManager</p>
    </footer>
  );
}

export default Footer;
