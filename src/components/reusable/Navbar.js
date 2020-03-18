import React from 'react'
import {Navbar, Icon, NavItem, Container} from 'react-materialize'
import { firebaseApp } from '../../firebase'
import logo from '../../assets/logo.png'

export default () => {
        return (
            <div style={{ background: "#222a45" }}>
                <Container>
                    <Navbar
                        alignLinks="right"
                        brand={
                            <a 
                              className="brand-logo" 
                              href="www.google.com"
                              style={{ padding: 8 }}  
                            >
                              <img src={logo} alt="Logo" height="40" />
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
