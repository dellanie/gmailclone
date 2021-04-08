import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import "./sendmail.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase";

function SendMail(){
    const {register, handleSubmit, watch, errors} = useForm();

    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        db.collection("emails").add(
            {
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        dispatch(closeSendMessage());
    };

    return(
        <div className="sendmail">
            <div className="sendmail_header">            
                <h3>New Message</h3>
                <CloseIcon className="sendMail_close" onClick={() => dispatch(closeSendMessage())} />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name="to"  
                    placeholder="To" 
                    type="email" 
                    ref={register({required: true})}
                />
                {errors.to && <p className="sendmail_error">To is Required!</p>}
                
                <input name="subject" 
                    placeholder="Subject" 
                    type="text" 
                    ref={register({required: true})}/>
                    {errors.subject && <p className="sendmail_error">Subject is Required!</p>}
                
                <input 
                    name="message" 
                    placeholder="Message" 
                    type="text" 
                    className="sendmail_message" 
                    ref={register({required:true})}/>
                    {errors.message && <p className="sendmail_error">Message is Required!</p>}

                <div className="sendmail_options">
                    <Button type="submit" className="sendmail_send" variant="contained" color="primary">Send</Button>

                </div>
            </form>


        </div>

        

    )
}
export default SendMail;