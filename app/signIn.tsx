import useTokenStore from "@/store/useTokenStore";
import {
  Box,
  Button,
  ButtonText,
  Input,
  InputField,
  useToken,
  View,
} from "@gluestack-ui/themed";
import React from "react";

/** - 燈入頁 */
export default function SignIn() {
  const { setToken } = useTokenStore();
  return (
    <View flex={1} px={4} py={4}>
      <Box h={"$1/3"}></Box>
      <Input
        variant="outline"
        size="lg"
        isDisabled={false}
        mt={10}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="請輸入帳號" placeholderTextColor={"#ccc"} />
      </Input>

      <Input
        variant="outline"
        mt={10}
        size="lg"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="請輸入密碼" placeholderTextColor={"#ccc"} />
      </Input>

      <Button
        mt={10}
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        onPress={() => {
          setToken("123");
        }}
      >
        <ButtonText>登入 </ButtonText>
      </Button>
      <Box h={"$1/3"} />
    </View>
  );
}
