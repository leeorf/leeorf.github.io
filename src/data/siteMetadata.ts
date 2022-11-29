import {
  defaultSiteDescription,
  defaultSiteTitle,
  siteImagePath,
  siteURL,
} from '../constants/siteMeta';
import { SiteMetadata, SiteMetaDataKey } from '../types/SiteMetadata';

export const siteMetadata: SiteMetadata = {
  [SiteMetaDataKey.title]: defaultSiteTitle,
  [SiteMetaDataKey.description]: defaultSiteDescription,
  [SiteMetaDataKey.siteUrl]: siteURL,
  [SiteMetaDataKey.image]: siteImagePath,
};
