import React from 'react'
import { Dropdown, Icon, Button } from 'react-materialize'

export default () => {
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
                                        height="100"
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
                                    Djavan
                                </div>
                                <div style={{ fontSize: 12, color: "gray "}}>6 min ago</div>
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
                                    <a href="w" style={{ color: "red"}}>
                                        Delete
                                    </a>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div>
                        Software Engineer, loves to teach CS, Sports Football, Table Tennis,
                        Basketball and Badminton
                    </div>
                </div>
            </div>
        </div>
    )
}