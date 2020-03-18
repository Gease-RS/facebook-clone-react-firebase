import React from 'react'
import { Dropdown, Button, Icon } from 'react-materialize'

export default () => {
    return(
        <div>
            <div className="outerBox">
                <div>
                    <div>
                        <div style={{ display: "flex", marginBottom: 10 }}>
                            <div>
                                <div style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 30,
                                        overflow: "hidden"
                                    }}
                                >
                                    <img src="https://pixabay.com/pt/photos/avatar-senhora-mulher-feminino-1687700/" alt="Logo" height="40" />
                                </div>
                            </div>
                            <div style={{ marginLeft: 10, flex: 1}}>Duque de Caxias</div>
                            <div style={{ cursost: "pointer"}}>
                                <Icon>edit</Icon>
                            </div>
                        </div>
                        <div style={{ borderTop: "1px solid lightgray"}}>
                            <div style={{ color: "darkblue", fontFamily: "fantasy", marginTop: 10}}>
                                About me:
                            </div>
                            <div style={{ fontSize: 12}}>
                                Software Engineer, loves to teach CS, Sports Football, Table Tennis,
                                Basketball and Badminton
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}