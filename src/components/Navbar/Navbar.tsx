import { Navbar as BootstrapNavbar } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { sTheme } from '../../store';
import { useCloseNavAutomatically, useSetMobileNavTop } from './hooks';
import NavbarCollapse from './subcomponents/NavbarCollapse';
import NavbarNonCollapse from './subcomponents/NavbarNonCollapse';

interface IProps extends HasClassName {}

const Navbar = ({ className }: IProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useRecoilValue(sTheme);

  const computedOnce = useRef({
    closeMenu: (): void => setIsOpen(false),
    toggleMenu: (): void => setIsOpen((prevState): boolean => !prevState),
  });

  useCloseNavAutomatically(computedOnce.current.closeMenu);

  useSetMobileNavTop();

  return (
    <BootstrapNavbar className={className} expand="md" expanded={isOpen}>
      <NavbarNonCollapse
        isOpen={isOpen}
        onTogglerClick={computedOnce.current.toggleMenu}
        theme={theme}
      />
      <NavbarCollapse />
    </BootstrapNavbar>
  );
};

export default Navbar;
