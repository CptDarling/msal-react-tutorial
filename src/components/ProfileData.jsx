import React from "react";

/**
 * Renders information about the user obtained from Microsoft Graph
 */
export const ProfileData = (props) => {
  // console.log(props);
  return (
    <div id="profile-div">
      <h2>Profile Data</h2>
      <ul>
        <li><strong>First Name: </strong> {props.graphData.givenName}</li>
        <li><strong>Last Name: </strong> {props.graphData.surname}</li>
        <li><strong>Job Title:</strong> {props.graphData.jobTitle}</li>
        <li><strong>Email: </strong> {props.graphData.userPrincipalName}</li>
        <li><strong>Business Phone:</strong> {props.graphData.businessPhones ? props.graphData.businessPhones[0] : ""}</li>
        <li><strong>Preferred Language:</strong> {props.graphData.preferredLanguage}</li>
        <li><strong>Id: </strong> {props.graphData.id}</li>
      </ul>
    </div>
  )
};