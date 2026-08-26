import re

# Update NavBar.tsx
with open('src/components/layout/NavBar.tsx', 'r', encoding='utf-8') as f:
    nav_content = f.read()

# Add components
components_code = """
const CaretIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-primary mr-2 shrink-0">
    <path d="M8 5v14l11-7z"/>
  </svg>
)

const NavLink = ({ to, children, className }: { to: string, children: React.ReactNode, className?: string }) => {
  const location = useLocation();
  const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);
  return (
    <Link to={to} className={className || `py-2 transition-all flex items-center ${isActive ? 'text-primary font-bold' : 'text-white hover:text-primary hover:opacity-80'}`}>
      {isActive && <CaretIcon />}
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children, onClick, className }: { to: string, children: React.ReactNode, onClick: () => void, className?: string }) => {
  const location = useLocation();
  const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);
  return (
    <Link to={to} className={className || `block text-2xl font-semibold tracking-wide transition-all duration-300 hover:scale-110 flex items-center justify-center ${isActive ? 'text-primary scale-110' : 'text-white hover:text-primary'}`} onClick={onClick}>
      {isActive && <CaretIcon />}
      {children}
    </Link>
  );
};
"""

nav_content = nav_content.replace('const NavBar = () => {', components_code + '\nconst NavBar = () => {')

# Remove getLinkClass and getMobileLinkClass
nav_content = re.sub(r'  const getLinkClass =.*?};', '', nav_content, flags=re.DOTALL)
nav_content = re.sub(r'  const getMobileLinkClass =.*?};', '', nav_content, flags=re.DOTALL)

# Replace <Link to="..." className={getLinkClass('...', ...)}>...</Link>
# e.g. <Link to="/about" className={getLinkClass('/about', true)}>About <ChevronDown /></Link>
nav_content = re.sub(
    r'<Link to="(.*?)" className=\{getLinkClass\((.*?)\)\}\s*>(.*?)</Link>',
    r'<NavLink to="\1">\3</NavLink>',
    nav_content
)

# Replace <Link to="..." className={getMobileLinkClass('...')} onClick={closeMenu}>...</Link>
nav_content = re.sub(
    r'<Link to="(.*?)" className=\{getMobileLinkClass\((.*?)\)\} onClick=\{closeMenu\}\s*>(.*?)</Link>',
    r'<MobileNavLink to="\1" onClick={closeMenu}>\3</MobileNavLink>',
    nav_content
)

with open('src/components/layout/NavBar.tsx', 'w', encoding='utf-8') as f:
    f.write(nav_content)


# Update Footer.tsx
with open('src/components/layout/Footer.tsx', 'r', encoding='utf-8') as f:
    footer_content = f.read()

# Make sure useLocation is imported
if 'useLocation' not in footer_content:
    footer_content = footer_content.replace("import { Link } from 'react-router-dom'", "import { Link, useLocation } from 'react-router-dom'")

footer_components_code = """
const CaretIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-primary mr-1.5 shrink-0">
    <path d="M8 5v14l11-7z"/>
  </svg>
)

const FooterLink = ({ to, children }: { to: string, children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);
  return (
    <Link to={to} className={`flex items-center hover:text-white transition-colors ${isActive ? 'text-primary font-bold' : ''}`}>
      {isActive && <CaretIcon />}
      {children}
    </Link>
  );
};
"""

footer_content = footer_content.replace('const Footer = () => {', footer_components_code + '\nconst Footer = () => {')

# Replace <Link to="/..." className="hover:text-white transition-colors">...</Link>
footer_content = re.sub(
    r'<Link to="(.*?)" className="hover:text-white transition-colors"\s*>(.*?)</Link>',
    r'<FooterLink to="\1">\2</FooterLink>',
    footer_content
)

with open('src/components/layout/Footer.tsx', 'w', encoding='utf-8') as f:
    f.write(footer_content)

print("Done updating links")
