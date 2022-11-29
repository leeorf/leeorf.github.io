import React from 'react';
import { Helmet } from 'react-helmet';
import {
  siteImagePath,
  siteURL,
  windowNamePrefix,
  windowNameSeparator,
} from '../../constants/siteMeta';
import { OgType } from '../../types/OpenGraph';

type SEOProps = {
  title: string;
  description: string;
  type?: OgType;
  baseURL?: string;
  imagePath?: string;
};

export const SEO = (props: SEOProps): React.ReactElement => {
  const {
    title,
    description,
    type = OgType.website,
    baseURL = siteURL,
    imagePath = siteImagePath,
  } = props;

  const { pathname } = window.location;

  const extendedTitle = `${windowNamePrefix} ${windowNameSeparator} ${title}`;

  const bannerURL = `${baseURL}${imagePath}`;

  const pageURL = `${baseURL}${pathname}`;

  return (
    <Helmet
      title={extendedTitle}
      htmlAttributes={{
        lang: 'pt-BR',
      }}
    >
      <meta name="description" content={description} />
      <meta name="image" content={bannerURL} />

      <meta property="og:title" content={extendedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageURL} />
      <meta property="og:type" content={type} />
    </Helmet>
  );
};
