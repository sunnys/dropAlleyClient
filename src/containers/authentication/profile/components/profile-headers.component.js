import React from 'react';
import Typography from '@material-ui/core/Typography';
import scss from './../profile.module.scss';
import ProfileAvatar from './profile-avatar.component'

class ProfileHeaders extends React.Component {
    render() {
        return (
            <div className={scss['portal-profile__header']}>
                <ProfileAvatar/>
                <div>
                    <Typography variant="headline" gutterBottom>
                        Profile / Christos
                    </Typography>
                    <Typography variant="subheading" gutterBottom>
                        Edit your perfonal information, change your password and set your privacy settings here.
                    </Typography>
                </div>
            </div>
        );
    }
}

export default ProfileHeaders;
