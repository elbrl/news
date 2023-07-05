import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screen/Home";
import { DetailsScreen } from "./screen/Details";

const Stack = createNativeStackNavigator();

export function Stackshit() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

{
  /* <Stack.Screen name="Comments" component={CommentsScreen} /> */
}
