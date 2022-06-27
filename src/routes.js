import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import CategoryPosts from "./pages/CategoryPosts";
import Seach from "./pages/Seach";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: "Detalhes",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#232630",
          },
        }}
      />

      <Stack.Screen
        name="Category"
        component={CategoryPosts}
        options={{
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#232630",
          },
        }}
      />

      <Stack.Screen
        name="Seach"
        component={Seach}
        options={{
          title: "Procurando algo?",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#232630",
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
