import { SafeAreaView, StatusBar } from "react-native";
import * as React from "react";
import { useFocusEffect } from "@react-navigation/native";
import Box from "../components/box";
import Text from "../components/Text";
import ActionButton from "../components/action-button";
import { More,Fav, Hand, Voice  } from "../components/icons";
import theme from "../components/utils/theme";
import FavSolid from "../components/icons/FavSolid";

function DetailView() {

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("dark-content");
    }, []));

  return (
    <Box as={SafeAreaView} pl={16}>
      <Box>
        <Text fontSize={32} fontWeight="bold" pl={16}>Details</Text>
        <Text fontSize={18} fontStyle="italic" color="textLight" pl={16} mt={6}>Details</Text>
      </Box>
      <Box flexDirection="row" mt={8} p={16}>
        <ActionButton  mr={12} >
          <Voice  width={24} height={24} color={theme.colors.textLight} />
        </ActionButton>
        <ActionButton>
          <FavSolid color={theme.colors.red} width={24} height={24} />
        </ActionButton>
        <ActionButton ml="auto" >
          <Hand width={24} height={24} color={theme.colors.textLight} />
          <Text color="textLight">Türk İşaret Dili</Text>
        </ActionButton>
      </Box>
    </Box>
  );
}

export default DetailView;
