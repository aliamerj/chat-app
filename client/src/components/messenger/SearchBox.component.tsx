import { SearchFriendStyle } from "../../_Styles_/messenger/messenger.style";

const SearchBoxComponent = ({
  setInputHandler,
}: {
  setInputHandler: (input: string) => void;
}) => {
  const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const searchText = e.currentTarget.value.toLowerCase();
    setInputHandler(searchText);
  };
  return (
    <>
      <SearchFriendStyle
        placeholder="Search for friends"
        onChange={inputHandler}
      />
    </>
  );
};

export default SearchBoxComponent;
