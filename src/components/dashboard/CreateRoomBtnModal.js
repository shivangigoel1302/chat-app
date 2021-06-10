import React, { useCallback, useRef, useState } from 'react';
import { Alert, Button, ControlLabel, Form, FormControl, FormGroup, Icon, Modal, Schema } from 'rsuite';
import firebase from 'firebase/app';
import { useModelState } from '../../misc/custom-hooks';

import { database } from '../../misc/firebase';

const {StringType} = Schema.Types;
const model = Schema.Model({
    name: StringType().isRequired('chat name is required'),
    description: StringType().isRequired('description is required'),
})

const INITIAL_FORM ={
    name:'',
    description:''
}

const CreateRoomBtnModal = () =>{
    const {isOpen,open,close} = useModelState();

    const[formValue,setformValue] = useState(INITIAL_FORM);
    const [isLoading,setisLoading] = useState(false);
    const formRef = useRef();
    const onFormChange = useCallback((value)=>{
       setformValue(value);
    },[]);

    const onSubmit = async () =>{
         if(!formRef.current.check()){
             return;
         }

         setisLoading(true);

         const newRoomdata ={
             ...formValue,
             createdAt: firebase.database.ServerValue.TIMESTAMP
         }

         try{
             await database.ref('rooms').push(newRoomdata);
             Alert.info(`${formValue.name} has been created`,4000);
             setisLoading(false);
             setformValue(INITIAL_FORM);
             close();
         }catch(err){
             setisLoading(false);
             Alert.error(err.message,4000);
         }
    }


    return(
       <div className="mt-1">
           <Button block color ="green" onClick={open}>
               <Icon icon = "creative"/>Create new chat room
           </Button>
           <Modal show={isOpen} onHide={close}>
               <Modal.Header>
                   <Modal.Title>
                       New chat room
                   </Modal.Title>
               </Modal.Header>
               <Modal.Body>
                   <Form fluid onChange={onFormChange} formValue={formValue}
                   model ={model}
                   ref={formRef}>
                       <FormGroup>
                           <ControlLabel>Room name</ControlLabel>
                           <FormControl name ="name" placeholder="enter char room name..."/>
                       </FormGroup>

                       <FormGroup>
                           <ControlLabel>Description</ControlLabel>
                           <FormControl componentClass ="textarea" rows ={5} name ="description" placeholder="enter char room description..."/>
                       </FormGroup>
                   </Form>
               
               </Modal.Body>
               <Modal.Footer>
                   <Button BLOCK appearance="primary" onClick={onSubmit} disabled={isLoading}>
                     Create new chat room
                   </Button>
               </Modal.Footer>
           </Modal>
       </div> 
    );
}

export default CreateRoomBtnModal;