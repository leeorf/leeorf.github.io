import React from 'react';
import { Profile as ProfileType } from '../../types/Profile';
import { Profile } from '../elements/Profile';
import { PageLayout } from '../layout/PageLayout';
import { SEO } from '../shared/SEO';

type AboutScreenProps = {
  profile: ProfileType;
};

export const AboutScreen = (props: AboutScreenProps): React.ReactElement => {
  const { profile } = props;

  const summary =
    profile.summary && profile.summary.length ? profile.summary[0] : '';

  return (
    <PageLayout>
      <SEO
        title={profile.position}
        description={`${profile.firstName} ${profile.lastName}. ${profile.position}. ${summary}`}
      />
      <Profile profile={profile} />
    </PageLayout>
  );
};
