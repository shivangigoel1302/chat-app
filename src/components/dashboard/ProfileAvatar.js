import React from 'react';
import { Avatar } from 'rsuite';
import { getNameInititals } from '../../misc/helpers';

const ProfileAvatar = ({name, ...avatarProps}) =>{
    return (
      <Avatar circle {...avatarProps}>
          {getNameInititals(name)}
      </Avatar>
    );
}
export default ProfileAvatar