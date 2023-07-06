import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsScreen } from "./screen/Details";
import { Drawershit } from "./Drawer";
import { CommentScreen } from "./screen/Comments";

const Stack = createNativeStackNavigator();

export function Stackshit() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drawer" component={Drawershit} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Comments" component={CommentScreen} />
    </Stack.Navigator>
  );
}

{
  /* <Stack.Screen name="Comments" component={CommentsScreen} /> */
}
