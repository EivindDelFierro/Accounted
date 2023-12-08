import React from "react";
import NavigationContainer from "./NavigationContainer";
import DashboardContainer from "./DashboardContainer";

export default function MainContainer(): React.ReactNode {
  const [selectedNavigation, setSelectedNavigation] = "Home";
  
  switch (selectedNavigation) {
    case 'home':
  }



  return (
    <div>
      <h1>This is the main MainContainer</h1>
      <NavigationContainer target={selectedNavigation}></NavigationContainer>
      {if (selectedNavigation === 'home') <DashboardContainer></DashboardContainer>}
    </div>
  );
}
