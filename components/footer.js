
const links = [
  { href: '/join', label: 'Join Us' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
  { href: '/conduct', label: 'Code of Conduct' },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const footer = () => (
    <footer className='footer'>
        <div className="columns">
            <div className="column">
                <div className="title is-4 red has-text-centered">
                    <h1>Join</h1>
                </div>
            </div>
            <div className="column">
                <div className="title is-4 red has-text-centered">
                    <h1>Code of Conduct</h1>
                </div>
            </div>
            <div className="column">
                <div className="title is-4 red has-text-centered">
                    <h1>Resources</h1>
                </div>
            </div>
            <div className="column">
                <div className="title is-4 red has-text-centered">
                    <h1>Contact Us</h1>
                </div>
            </div>
          <div class="columns">
            <div class="column">
                Copyright {new Date().getFullYear()} Code For Greensboro
            </div>
            </div>
        </div>
    </footer>
);

export default footer;
