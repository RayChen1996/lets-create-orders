import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Button, ButtonText, SafeAreaView } from "@gluestack-ui/themed";
import useTokenStore from "@/store/useTokenStore";

export default function TabOneScreen() {
  const { removeToken } = useTokenStore();

  return (
    <SafeAreaView>
      <View>
        <Button
          mt={10}
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={() => {
            removeToken?.();
          }}
        >
          <ButtonText>登出 </ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
}
