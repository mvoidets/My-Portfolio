const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-transparent fixed-bottom">
      <div className=" d-flex justify-content-center align-items-center">
        <a href="https://github.com/mvoidets" target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src="/github-mark.png"alt="GitHub" width={50} height={50} />
        </a>
        <a href="https://www.linkedin.com/in/michelle-voidets-98360194/" target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src="/linkedin.png" alt="LinkedIn" width={50} height={50} />
        </a>
        
        <a href="https://stackoverflow.com/users/28201915/mvoid" target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src="/stackoverflow.png" alt="StackOverflow" width={50} height={50} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;


