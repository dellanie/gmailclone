import { Icon, IconButton } from "@material-ui/core";
import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater} from "@material-ui/icons";
import React from "react";
import "./mail.css"
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOpenMail } from "./features/mailSlice";

function Mail(){
    const history= useHistory();
    const selectedMail = useSelector(selectOpenMail);

    return( 
        <div className="mail">
            <div className="mailtools">
                <div className="mailtools_left">
                    <IconButton onClick={() =>history.push("/")} className="mailtool_back">
                        <ArrowBack/>
                    </IconButton>
                    <IconButton>
                        <MoveToInbox/>
                    </IconButton>
                    <IconButton>
                        <Error/>
                    </IconButton>
                    <IconButton>
                        <Delete/>
                    </IconButton>
                    <IconButton>
                        <Email/>
                    </IconButton>
                    <IconButton>
                        <WatchLater/>
                    </IconButton>
                    <IconButton>
                        <CheckCircle/>
                    </IconButton>
                    <IconButton>
                        <LabelImportant/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>

                </div>
                <div className="mailtools_right">
                    <IconButton>
                        <UnfoldMore/>
                    </IconButton>
                    <IconButton>
                        <Print/>
                    </IconButton>
                    <IconButton>
                        <ExitToApp/>
                    </IconButton>

                </div>
            </div>
            <div className="mailbody">
                <div className="mailbody_header">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportant className="mail_important"/>
                    <p>{selectedMail?.title}</p>
                    <p className="mailbody_time">{selectedMail?.time}</p>

                </div>
                <div className="mailbody_message">
                    <p>{selectedMail?.description}</p>

                </div>

            </div>
            
        </div>
    )
}

export default Mail;