import React from 'react'
import {Navbar, Icon, NavItem, Container} from 'react-materialize'
import { firebaseApp } from '../../firebase'

export default () => {
        return (
            <div style={{ background: "royalBlue" }}>
                <Container>
                    <Navbar
                        alignLinks="right"
                        brand={
                            <a className="brand-logo" href="www.google.com">
                                Logo
                            </a>
                        }
                        className="custom-navbar"
                        menuIcon={<Icon>menu</Icon>}
                        options={{
                            draggable: true,
                            edge: 'left',
                            inDuration: 250,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            outDuration: 200,
                            preventScrolling: true
                        }}
                    >
                        <NavItem 
                            href="components.html" 
                            onClick={event => {
                                event.preventDefault()
                                firebaseApp.auth().signOut()
                            }}
                        >
                            Log out
                        </NavItem>
                    </Navbar>
                </Container>
            </div>
        )
}
