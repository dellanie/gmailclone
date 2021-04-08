import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportant } from "@material-ui/icons";
import React from "react";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import "./emailrow.css"
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

function EmailRow ({id,title,subject,description,time }){
    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(
            selectMail({
                id,
                title,
                subject,
                description,
                time,
            })
        );

        history.push("/mail");
    };

    return(
        <div  onClick={() => history.push("/mail")} className="emailrow">
            <div className="emailrowoptions">
                <Checkbox/>
                <IconButton>
                    <StarBorderOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportant/>
                </IconButton>
            </div>

            <h3>
                {title}
            </h3>
            <div className="emailrow_message">
                <h4>
                    {subject}{" "}
                    <span className="emailrow-description">
                        {description}
                    </span>
                </h4>
            </div>
            <p className="emailrow_time">
                    {time}
            </p>
        </div>
    )

}

export default EmailRow