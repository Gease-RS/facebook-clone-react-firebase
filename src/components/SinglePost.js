import React, {useState, useEffect} from 'react'
import { userRef } from '../firebase'
import { Dropdown, Icon, Button } from 'react-materialize'
import moment from 'moment'
import deletePost from '../api/deletePost'

export default ({details, myUID}) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    useEffect(() => {
        const getName = () => {
            userRef.child(details.createdBy).once('value', snap => {
                setFirstName(snap.val()['firstName'])
                setLastName(snap.val()['lastName'])
            })
        }
        if (details && details.createdBy) {
            getName()
        }
    }, [])

    const onPostDelete = (event, postKey)  => {
        event.preventDefault()
        const result = deletePost(postKey)
        console.log(result)
    }

    return(
        <div>
            <div className="outerBox m10">
                <div>
                    <div>
                        <div style={{ display: "flex", marginBottm: 10 }}>
                            <div>
                                <div style={{
                                    width: 40,
                                    height: 40,
                                    borderradius: 30,
                                    overflow: "hidden"
                                }}
                                >
                                    <img
                                        src="https://marmelab.com/react-admin-demo/#/customers"
                                        alt="profile photo"
                                        height="100%"
                                    />
                                </div>
                            </div>
                            <div style={{ marginLeft: 10, flex: 1 }}>
                                <div 
                                  style={{ 
                                    color: "#385898",
                                    fontWeight: 600
                                  }}
                                >
                                    {firstName} {lastName}
                                </div>
                                <div style={{ fontSize: 12, color: "gray "}}>
                               
                                </div>
                            </div>
                    
                                 <div>
                                    <Dropdown
                                        options={{
                                            aligment: "left",
                                            autoTrigger: true,
                                            closeOnClick: true,
                                            constrainWidth: true,
                                            container: null,
                                            coverTrigger: true,
                                            hover: false,
                                            inDuration: 150,
                                            onCloseEnd: null,
                                            onCloseStart: null,
                                            onOpenEnd: null,
                                            onOpenStart: null,
                                            outDuration: 250
                                        }}
                                        trigger={
                                            <Button flat node="button">
                                                <Icon>more_vert</Icon>
                                            </Button>
                                        }
                                    >
                                        <a href="w" style={{ color: "black"}}>
                                            Edit
                                        </a>
                                        <a 
                                         href="w" 
                                         style={{ color: "rblack"}} 
                                         onClick={(event) => {
                                             onPostDelete(event,details.postKey)
                                        }}
                                        >
                                            Delete
                                        </a>
                                    </Dropdown>
                                </div>
               
                        </div>
                    </div>
                    <div>
                        {details && details.content ? details.content : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}