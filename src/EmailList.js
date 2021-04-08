import { Checkbox, IconButton } from "@material-ui/core"
import { ArrowDropDown, ChevronLeft, ChevronRight, KeyboardHide, MoreVert, Settings } from "@material-ui/icons"
import React, { useEffect, useState } from "react"
import "./emaillist.css"
import RedoIcon from "@material-ui/icons/Redo";
import InboxIcon from "@material-ui/icons/Inbox";
import Section from "./Section"
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailRow from "./EmailRow"
import { db } from "./firebase";
function EmailList(){
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection("emails")
        .orderBy("timestamp","desc")
        .onSnapshot((snapshot) => 
         setEmails(snapshot.docs.map(doc => ({
            id:doc.id,
            data: doc.data(),
            })))
        )
    })
    return(
        <div className="emaillist">
            <div className="emaillist_setting">
                <div className="emaillist_settingleft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDown/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>

                </div>

                

                <div className="emaillist_settingsright">
                    <IconButton>
                        <ChevronLeft/>
                    </IconButton>
                    <IconButton>
                        <ChevronRight/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHide/>
                    </IconButton>
                    <IconButton>
                        <Settings/>
                    </IconButton>
                 </div>
            </div>
            <div className="emaillist_sections">
                <Section Icon={InboxIcon} title="Primary" color="red" selected/>
                <Section Icon={PeopleIcon} title="Social" color="blue" selected/>
                <Section Icon={LocalOfferIcon} title="Promotion" color="green" selected/>

            </div>
            <div className="emaillist_list">
                {emails.map(({id,data:{ to, subject,message, tiemstamp}}) =>(
                    <EmailRow
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(tiemstamp?.seconds * 1000).toUTCString()}
                    
                    />
                ))}
                <EmailRow
                    title="Twitch"
                    subject="Hey"
                    description="First mail"
                    time="10pm"
                />
            </div>

        </div>
    )
}

export default EmailList;