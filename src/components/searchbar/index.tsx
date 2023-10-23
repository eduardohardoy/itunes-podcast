import { useState, useCallback, ChangeEvent, useEffect } from "react";
import { FaSearch, FaChevronLeft } from "react-icons/fa";
import {
  IconContainer,
  Input,
  InputContainer,
  SearchbarContainer,
} from "./styled";
import { useDebounce } from "../../custom-hooks/use-debounce";

interface SearchbarProps {
  canNavigateBack?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
  onNavigateBack?: () => void;
}

const Searchbar: React.FC<SearchbarProps> = ({
  canNavigateBack = false,
  disabled,
  onChange,
  onNavigateBack,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const debouncedValue = useDebounce(inputValue, 500);

  useEffect(() => {
    if (debouncedValue) {
      onChange(debouncedValue);
    }
  }, [debouncedValue, onChange]);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    []
  );

  return (
    <SearchbarContainer>
      {canNavigateBack && (
        <IconContainer onClick={onNavigateBack}>
          <FaChevronLeft />
        </IconContainer>
      )}
      <InputContainer>
        <FaSearch color="white" cursor="pointer" />
        <Input disabled={disabled} onChange={handleInputChange} />
      </InputContainer>
    </SearchbarContainer>
  );
};

export default Searchbar;
