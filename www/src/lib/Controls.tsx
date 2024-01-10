import { Center, HStack } from "@chakra-ui/react";
import { Refresh } from "@emotion-icons/heroicons-outline/Refresh";
import { QuestionCircle } from "@emotion-icons/fa-solid/QuestionCircle";
import { List } from "@emotion-icons/entypo/List";

import IconButton from "./components/IconButton";
import useMulaneyQuote from "./hooks/useMulaneyQuote";
import useView, { ViewEnum } from "./hooks/useView";

const Controls = () => {
  const { quote, delayedFetch } = useMulaneyQuote();
  const { view, setView } = useView();

  const handleViewClick = (newView: ViewEnum) => {
    if (view === newView) {
      setView(null);
    } else {
      setView(newView);
    }
  };

  return (
    <Center my={6}>
      <HStack spacing={4}>
        <IconButton
          label="How to Use"
          aria-label="How to Use"
          icon={<QuestionCircle />}
          onClick={() => handleViewClick(ViewEnum.HOW_TO_USE)}
          isActive={view === ViewEnum.HOW_TO_USE}
        />
        <IconButton
          label="List Quotes"
          aria-label="List Quotes"
          icon={<List />}
          onClick={() => handleViewClick(ViewEnum.QUOTE_LIST)}
          isActive={view === ViewEnum.QUOTE_LIST}
        />
        <IconButton
          label="Refresh"
          aria-label="Refresh"
          icon={<Refresh />}
          onClick={() => delayedFetch(Math.random() * 1000)}
          disabled={quote === null}
        />
      </HStack>
    </Center>
  );
};

export default Controls;
