import React from 'react';
import { Profile as ProfileType } from '../../types/Profile';
import { Profile } from '../elements/Profile';
import { PageLayout } from '../layout/PageLayout';

type AboutScreenProps = {
  profile: ProfileType;
};

export const AboutScreen = (props: AboutScreenProps): React.ReactElement => {
  const { profile } = props;

  return (
    <PageLayout>
      <Profile profile={profile} />
    </PageLayout>
  );
};
