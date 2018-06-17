import React from 'react';
import Typography from '@material-ui/core/Typography';
import scss from './../profile.module.scss';

class ProfileAvatar extends React.Component {
    render() {
        return (
            <img alt="avatar" src="assets/images/avatars/male/16.jpg" className={scss['portal-profile__header-avatar']} />
        );
    }
}

export default ProfileAvatar;
