import NextLink from '../../NextLink/NextLink';
import Image from 'next/image';
import NavToggler from './NavToggler';
import { Theme } from '../../../../@types/enums';
import { MouseEventHandler } from 'react';
import { navLogoWidth } from '../../../utils/css';

interface IProps {
  isOpen: boolean;
  onTogglerClick: MouseEventHandler;
  theme: Theme;
}

const logoSizes = `${navLogoWidth}`;

const NavbarNonCollapse = ({
  isOpen,
  onTogglerClick,
  theme,
}: IProps): JSX.Element => {
  return (
    <div className="navbar-non-collapse">
      <NextLink href="/" className="navbar-brand">
        <Image
          src={`/img/bp-${theme}.png`}
          width={912}
          height={169}
          sizes={logoSizes}
          quality={100}
          alt="Image of Boris Pöhland"
        />
      </NextLink>
      <NavToggler isOpen={isOpen} onClick={onTogglerClick} />
    </div>
  );
};

export default NavbarNonCollapse;