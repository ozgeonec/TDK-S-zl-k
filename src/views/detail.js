import { SafeAreaView, StatusBar, ScrollView } from "react-native";
import * as React from "react";
import { useFocusEffect } from "@react-navigation/native";
import Box from "../components/box";
import Text from "../components/Text";
import ActionButton from "../components/action-button";
import { More, Fav, Hand, Voice } from "../components/icons";
import theme from "../components/utils/theme";
import FavSolid from "../components/icons/FavSolid";
import DetailSummaryItem from "../components/detailSummaryItem";
import DetailSummaryTitle from "../components/detailSummaryTitle";
import DetailSummary from "../components/detailSummary";

function DetailView() {

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("dark-content");
    }, []));

  return (
    <Box as={SafeAreaView} >
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight="bold">Details</Text>
          <Text fontSize={18} fontStyle="italic" color="textLight"  mt={6}>Details</Text>
        </Box>
        <Box flexDirection="row" mt={8} >
          <ActionButton mr={12}>
            <Voice width={24} height={24} color={theme.colors.red} />
          </ActionButton>
          <ActionButton>
            <FavSolid color={theme.colors.red} width={24} height={24} />
          </ActionButton>
          <ActionButton ml="auto">
            <Hand width={24} height={24} color={theme.colors.textLight} />
            <Text color="textLight">Türk İşaret Dili</Text>
          </ActionButton>
        </Box>
        <Box pt={20}>
          <DetailSummaryItem>
            <DetailSummaryTitle>
              Yazma
            </DetailSummaryTitle>
            <DetailSummary>
              "Kağıt, kalem"
            </DetailSummary>
          </DetailSummaryItem>
        </Box>
      </Box>
    </Box>
  );
}

export default DetailView;
