
import React, { Suspense } from "react";
import Spinner from "./Components/Spinner/Spinner";

const DeployFeedAndSidebar = React.lazy(() => import("./Components/DeployFeedAndSidebar/DeployFeedAndSidebar"));

function App() {
  return (
    <Suspense fallback={<div style={{minHeight: '100vh', minWidth: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Spinner /></div>}>
      <DeployFeedAndSidebar />
    </Suspense>
  );
}

export default App;
