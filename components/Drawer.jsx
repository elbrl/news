import { createDrawerNavigator } from "@react-navigation/drawer";
import { Tabshit } from "./Tab";

const Drawer = createDrawerNavigator();

export function Drawershit() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Tab" component={Tabshit} />
    </Drawer.Navigator>
  );
}
