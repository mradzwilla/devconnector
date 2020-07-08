import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({ profile: {
  bio,
  skills,
  user: { name }
}}) => (
    <div class="profile-about bg-light p-2">
      {bio && (
        <Fragment>
          <h2 class="text-primary">
            {name.trim().split(' ')[0]}
            {name.trim().split(' ')[0].slice(-1) === 's' ? "'" : "'s"} Bio
          </h2>
          <p>
            {bio}
          </p>
          <div class="line"></div>
        </Fragment>

      )}
      {skills.length > 0 && (
        <Fragment>
          <h2 class="text-primary">Skill Set</h2>
          <div class="skills">
            {skills.map((skill, index) => <div key={index} class="p-1"><i class="fas fa-check"></i> {skill}</div>)}
          </div>
        </Fragment>
      )}
    </div>
  );

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileAbout;
