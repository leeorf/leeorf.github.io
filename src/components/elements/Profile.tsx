import React from 'react';
import { FiMonitor, FiMapPin } from 'react-icons/fi';

import { Profile as ProfileType } from '../../types/Profile';
import { Avatar } from '../shared/Avatar';
import { SocialLinks } from '../shared/SocialLinks';
import { Tags } from '../shared/Tags';
import { Greeting } from './Greeting';

type ProfileProps = {
  profile: ProfileType;
};

export const Profile = (props: ProfileProps): React.ReactElement => {
  const { profile } = props;

  const avatarElement = profile.avatar ? (
    <div className="mr-0 mb-6 sm:mr-6 sm:mb-0">
      <Avatar
        avatar={profile.avatar}
        className="w-64 h-64 rounded-full overflow-hidden"
        imgClassName="w-64 h-64 rounded-full overflow-hidden"
      />
    </div>
  ) : null;

  const fullName = [profile.firstName || '', profile.lastName || ''].join(' ');

  const fullNameElement = (
    <h1 className="uppercase font-extrabold text-3xl">{fullName}</h1>
  );

  const positionElement = profile.position ? (
    <p className="text-gray-500 flex items-center">
      <span className="mr-1">
        <FiMonitor className="w-4 h-4" />
      </span>
      {profile.position}
    </p>
  ) : null;

  const summaryLine = profile.summary?.length
    ? profile.summary.join(' | ')
    : null;

  const summaryElement = summaryLine ? (
    <p className="text-xs">{summaryLine}</p>
  ) : null;

  const locationElement = profile.location ? (
    <p className="text-gray-500 flex items-center">
      <span className="mr-1">
        <FiMapPin />
      </span>
      {profile.location}
    </p>
  ) : null;

  const tagsElement = profile.tags?.length ? (
    <div>
      <Tags tags={profile.tags} />
    </div>
  ) : null;

  const socialLinksElement = profile.socialLinks?.length ? (
    <SocialLinks links={profile.socialLinks} />
  ) : null;

  return (
    <>
      <div className="flex flex-col items-center sm:flex-row mb-12">
        {avatarElement}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
          {fullNameElement}
          {positionElement}
          {summaryElement}
          {locationElement}
          {tagsElement}
          {socialLinksElement}
        </div>
      </div>

      <div>
        <Greeting />
      </div>
    </>
  );
};
