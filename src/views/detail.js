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
import LoaderText from "../components/LoaderText";

function DetailView({route}) {

  const keyword = route.params?.keyword
  // const keyword = 'milliyet'

  const [data, setData] = React.useState(null)

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
    }, [])
  )

  const getDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`)
    const data = await response.json()
    setData(data[0])
  }

  React.useEffect(() => {
    getDetailData()
  }, [])

  return (
    <Box as={SafeAreaView} >
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight="bold">
            {keyword}
          </Text>
          {data?.telaffuz || data?.lisan ? (
            <Text color="textLight" mt={6}>
              {data?.telaffuz && data?.telaffuz} {data?.lisan}
            </Text>
          ) : null}
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
          {data
            ? data.anlamlarListe.map(item => (
              <DetailSummaryItem
                key={item.anlam_sira}
                data={item}
                border={item.anlam_sira !== '1'}
              />
            ))
            : [1, 2, 3].map(index => (
              <DetailSummaryItem key={index} border={index !== 1}>
                <LoaderText />
                <LoaderText width={200} mt={10} />
              </DetailSummaryItem>
            ))}
        </Box>
      </Box>
    </Box>
  );
}

export default DetailView;
