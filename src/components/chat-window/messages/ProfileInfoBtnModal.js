import React from 'react';
import { Button, Modal } from 'rsuite';
import { useModelState } from '../../../misc/custom-hooks';
import ProfileAvatar from '../../dashboard/ProfileAvatar';


const ProfileInfoBtnModal = ({profile, ...btnProps}) =>{
    const shortName = profile.name.split(' ')[0];
    const {isOpen,open,close} = useModelState();
    const {name,avatar,createdAt} = profile;
    const memberSince = new Date(createdAt).toLocaleDateString();
    return (
         <>
            <Button {...btnProps} onClick={open}>
                {shortName}
            </Button>
            <Modal show={isOpen} onHide={close}>
                <Modal.Header>
                    <Modal.Title>
                        {shortName} profile
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                <ProfileAvatar src={avatar} name = {profile.name}
                className="width-200 height-200 img-fullsize font-huge"
                />
                <h4 className="mt-2">{name}</h4>
                <p>Member since {memberSince} </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button block onClick={close}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
         </>
    );
}

export default ProfileInfoBtnModal;