import React from 'react'; 

export const ProfileDescription = ({currentProfile}) => {
    return (
        <div>
            <div className="profile__description">
                    About me: {currentProfile.aboutMe ? currentProfile.aboutMe : 'no info'}
                </div>
                <div className="profile__description">
                    Looking for a job: {currentProfile.lookingForAJob ? 'yes' : 'no'}
                </div>
                <div className="profile__description">
                    Description for looking a job: {currentProfile.lookingForAJobDescription ? currentProfile.lookingForAJobDescription : 'no info'}
                </div>
                <div className="profile__description">
                    Facebook: {currentProfile.contacts.facebook ? currentProfile.contacts.facebook : 'no info'}
                </div>
                <div className="profile__description">
                    Github for looking a job: {currentProfile.contacts.github ? currentProfile.contacts.github : 'no info'}
                </div>
                <div className="profile__description">
                    Instagram: {currentProfile.contacts.instagram ? currentProfile.contacts.instagram : 'no info'}
                </div>
                <div className="profile__description">
                    MainLink: {currentProfile.contacts.mainLink? currentProfile.contacts.mainLink : 'no info'}
                </div>
                <div className="profile__description">
                    Twitter: {currentProfile.contacts.twitter ? currentProfile.contacts.twitter : 'no info'}
                </div>
                <div className="profile__description">
                    Vk: {currentProfile.contacts.vk ? currentProfile.contacts.vk : 'no info'}
                </div>
                <div className="profile__description">
                    Website: {currentProfile.contacts.website ? currentProfile.contacts.website : 'no info'}
                </div>
                <div className="profile__description">
                    Youtube: {currentProfile.contacts.youtube ? currentProfile.contacts.youtube : 'no info'}
                </div>
        </div>
    )
}