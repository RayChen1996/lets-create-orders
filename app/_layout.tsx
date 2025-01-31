import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/components/useColorScheme";
import useTokenStore from "@/store/useTokenStore";
import SignIn from "./signIn";
import { ThemeProvider } from "@rneui/themed";
import { SafeAreaView } from "react-native";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { Providers } from "@/provider/TanStack";

import { config } from "@gluestack-ui/config";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  // const colorScheme = useColorScheme();
  // const { token } = useTokenStore();
  return (
    <GluestackUIProvider config={config}>
      <ThemeProvider>
        <Providers>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </Providers>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
