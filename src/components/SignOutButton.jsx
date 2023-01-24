import React from "react";
import { useMsal } from "@azure/msal-react";
import Button from "react-bootstrap/Button";

/**
 * Renders a button which, when selected, will open a popup for logout
 */
export const SignOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = (logoutType) => {
    switch (logoutType) {
      case "popup":
        instance.logoutPopup({
          postLogoutRedirectUri: "/",
          mainWindowRedirectUri: "/" // redirects the top level app after logout
        });
        break;

      case "redirect":
        instance.logoutRedirect({
          postLogoutRedirectUri: "/",
          mainWindowRedirectUri: "/" // redirects the top level app after logout
        });
        break;

      default:
        break;
    }
  }

  return (
    <>
      <Button variant="secondary" className="ml-auto" onClick={() => handleLogout("popup")}>
        Sign out using Popup
      </Button>
      <Button variant="secondary" className="ml-auto" onClick={() => handleLogout("redirect")}>
        Sign out using Redirect
      </Button>
    </>
  );

}
