import Input from "../Input";
import searchQueryParamName from "../searchQueryParamName";
import { Wrapper } from "./styled";
import {
  useQueryParams,
  useReplaceQueryParams,
} from "../../../useSearchParams";

export default () => {
  const query = useQueryParams(searchQueryParamName);
  const replaceQueryParams = useReplaceQueryParams();

  const onInputChange = ({ target }) => {
    replaceQueryParams({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
