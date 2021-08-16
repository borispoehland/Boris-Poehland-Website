import '../styles/main.sass';
import type { AppProps } from 'next/app';
import Layout from '../src/components/Layout/Layout';
import NProgress from 'nprogress';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import { UIDReset } from 'react-uid';
import {
  useLoadingSpinner,
  usePassiveJqueryEventListeners,
} from '@utils/pagesHooks';
import { DefaultSeo } from 'next-seo';
import getDefaultSEO from '@data/defaultSEO';

NProgress.configure({ showSpinner: false, parent: '.page__progress' });

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useLoadingSpinner(router);

  usePassiveJqueryEventListeners();

  return (
    <>
      <Head>
        <title>Boris Pöhland | Web Developer | Usability Analyst</title>
      </Head>
      <DefaultSeo {...getDefaultSEO()} />
      <UIDReset prefix="uid_">
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </UIDReset>
    </>
  );
};

export default MyApp;
