import NextLink from '@components/NextLink/NextLink';
import Image from 'next/image';
import NavToggler from './NavToggler';
import { ETheme } from '@enums';
import { MouseEventHandler } from 'react';
import { navLogoWidth } from '@utils/css';

interface IProps {
  onTogglerClick: MouseEventHandler;
  theme: ETheme;
}

const width = 1148;
const height = 1359;

const NavbarNonCollapse = ({ onTogglerClick, theme }: IProps): JSX.Element => {
  return (
    <div className="navbar-non-collapse">
      <NextLink href="/" className="navbar-brand">
        <Image
          src={`/img/bp-${theme}.png`}
          alt="Logo of Boris Pöhland"
          layout="fill"
          quality={100}
          priority
          sizes={navLogoWidth}
        />
      </NextLink>
      <NavToggler onClick={onTogglerClick} />
    </div>
  );
};

export default NavbarNonCollapse;
