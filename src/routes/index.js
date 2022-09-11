import React from "react";
import { BrowserRouter } from "react-router-dom";

import { useAuthentication } from "../authentication";
// login route
import PostLoginRoutes from "./postLoginRoutes";
import PreLoginRoutes from "./preLoginRoutes";

const AppRoutes = () => {
  const { isUserSignedIn } = useAuthentication(); // check user has auth info or not 

  return (
    <BrowserRouter>
      {/* <AuthTesting /> */}
      {/* {isUserSignedIn() ? <PostLoginRoutes /> : <PreLoginRoutes />} */}

      {isUserSignedIn() ? (
        <PostLoginRoutes />
      ) : (
        <PreLoginRoutes isUserSignedIn={isUserSignedIn()} /> // Passed props to check user is signed or not
      )}
    </BrowserRouter>
  );
};

export default AppRoutes;
