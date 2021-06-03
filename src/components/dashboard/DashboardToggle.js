import React, { useCallback } from 'react';
import { Button, Drawer, Icon, Alert } from 'rsuite';
import Dashboard from '.';
import { useModelState ,useMediaQuery} from '../../misc/custom-hooks';
import { auth } from '../../misc/firebase';

const DashboardToggle = () =>{
    const {isOpen,close,open} = useModelState();
    const isMobile = useMediaQuery('(max-width: 992px)');

    const onSignOut = useCallback(() => {
        auth.signOut();
        Alert.info('Signed out', 4000);
        close();
    },[close])
    return (
        <>
          <Button black color = "blue" onClick={open}>
              <Icon icon = "dashboard"/> Dashboard
          </Button>
          <Drawer full={isMobile} show ={isOpen} onHide={close} placement="left">
             <Dashboard onSignOut = {onSignOut}/>
          </Drawer>
        </>
    );
};

export default DashboardToggle;