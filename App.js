import React from "react";
// import { DrawerNavigator } from "./components/Drawer";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { Stackshit } from "./components/Stack";
import { View } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import SignUpScreen from "./components/screen/SignUp";
import SignInScreen from "./components/screen/Login";

const CLERK_PUBLISHABLE_KEY =
  "pk_test_ZG9taW5hbnQtdG9hZC03Ni5jbGVyay5hY2NvdW50cy5kZXYk";

export default function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <PaperProvider>
        <SignedIn>
          <NavigationContainer>
            <Stackshit></Stackshit>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <SignUpScreen />
          <SignInScreen />
        </SignedOut>
      </PaperProvider>
    </ClerkProvider>
  );
}
