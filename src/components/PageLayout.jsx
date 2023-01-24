import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
  const isAthenticated = useIsAuthenticated();

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <a className="navbar-brand"href="/">MSAL React Tutorial</a>
        { isAthenticated ? <span>Signed In</span> : <SignInButton />}
      </Navbar>
      <h5><center>Welcome to the Microsoft Authentication Library For React Turorial</center></h5>
      <br />
      <br />
      {props.children}
    </>
  );
};