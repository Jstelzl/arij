import React from 'react';

function Navbar() {

    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="">
                <img
                    src=""
                    className="mr-3 h-6 sm:h-9"
                    alt=""
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    ARIJ
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link
                    href="/navbars"
                    active={true}
                >
                    Personal Page
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Search
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Log Out
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navbar;