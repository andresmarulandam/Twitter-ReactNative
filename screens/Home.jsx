import { useEffect } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import List from "./List";
import Create from "./Create";
import Profile from "./Profile";

import globalStyles from "../App.styles";

const Tab = createBottomTabNavigator();

const data = [
  {
    id: "1",
    content: "Aliquip consectetur velit fugiat sunt nulla veniam nostrud.",
    createdAt: "2023-10-27",
    user: {
      username: "johndoe",
      name: "John Doe",
    },
  },
  {
    id: "2",
    content:
      "Amet dolor in ut ea ullamco anim nostrud cillum non sint aliqua est minim ut. Incididunt adipisicing anim ut nulla magna. Minim velit voluptate dolore est laborum aliqua anim. Proident id aute laborum aliqua incididunt consectetur Lorem duis consequat veniam nostrud.",
    createdAt: "2023-10-27",
    user: {
      username: "johndoe",
      name: "John Doe",
    },
  },
  {
    id: "3",
    content:
      "Aliqua minim id nisi voluptate consectetur nostrud. Duis et dolore adipisicing deserunt esse consequat tempor ad fugiat aliqua aliquip anim. Cillum duis occaecat adipisicing ea ut velit aute.",
    createdAt: "2023-10-27",
    user: {
      username: "johndoe",
      name: "John Doe",
    },
  },
  {
    id: "4",
    content:
      "Fugiat deserunt est elit non duis tempor cupidatat laboris laboris dolore mollit adipisicing. Voluptate irure adipisicing quis eiusmod do duis do elit cupidatat consectetur.",
    createdAt: "2023-10-27",
    user: {
      username: "johndoe",
      name: "John Doe",
    },
  },
  {
    id: "5",
    content: "Hello world 2",
    createdAt: "2023-10-27",
    user: {
      username: "johndoe",
      name: "John Doe",
    },
  },
  {
    id: "6",
    content: "Hello world 2",
    createdAt: "2023-10-27",
    user: {
      username: "johndoe",
      name: "John Doe",
    },
  },
  {
    id: "7",
    content: "Hello world 2",
    createdAt: "2023-10-27",
    user: {
      username: "johndoe",
      name: "John Doe",
    },
  },
];

const LogoTitle = () => (
  <Image
    source={require("../assets/logo.png")}
    style={[globalStyles.logo.small]}
  />
);

export default function Home({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => <LogoTitle {...props} />,
    });
  }, [navigation]);

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
