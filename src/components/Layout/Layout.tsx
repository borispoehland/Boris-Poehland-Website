import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Footer from '../Footer/Footer';
import Image from 'next/legacy/image';
import ScrollToTopButton from '@components/ScrollToTopButton/ScrollToTopButton';
import Navbar from '@components/Navbar/Navbar';
import { useDarkModeOnSpecificTimeRange } from '@utils/pagesHooks';

interface IProps extends HasChildren {}

const Layout = ({ children }: IProps): JSX.Element => {
  useDarkModeOnSpecificTimeRange('18:00', '17:59');

  return (
    <div className="page">
      <div className="page__progress" />
      <Navbar className="page__navbar" />
      <Breadcrumbs className="page__breadcrumbs" />
      <div className="page__content">{children}</div>
      <div className="page__scroll-up">
        <ScrollToTopButton />
      </div>
      <Footer className="page__footer" />
      <div className="page__bottom-waves">
        <Image src="/img/wave.svg" alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Layout;
