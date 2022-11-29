export enum SiteMetaDataKey {
  title = 'title',
  description = 'description',
  image = 'image',
  siteUrl = 'siteUrl',
}

export type SiteMetadata = Record<SiteMetaDataKey, unknown>;
