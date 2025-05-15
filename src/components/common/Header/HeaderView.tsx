import Link from "next/link";
import styled from "styled-components";

interface Props {
  shrink: boolean;
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
}

export default function HeaderView({
  shrink,
  isFocused,
  onFocus,
  onBlur,
}: Props) {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo href="/">Weebur</Logo>
      </LogoContainer>
      <Form>
        <SearchInputWrapper>
          <SearchInput
            className={shrink ? "" : "shrink"}
            // value={inputValue}
            // onChange={(e) => setInputValue(e.target.value)}
            placeholder="찾고 싶은 상품을 검색해보세요"
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {(!shrink || isFocused) && (
            <SearchButton type="submit">검색</SearchButton>
          )}
        </SearchInputWrapper>
      </Form>
    </HeaderContainer>
  );
}

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #000;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 80%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  transition: all 150ms ease;
  background-color: #fff;
  padding: 0 0.5rem 0 1rem;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  transition: all 0.3s ease;
  border: none;
  outline: none;

  background: transparent;

  &.shrink {
    width: 100%;
    height: 80px;
    font-size: 0.875rem;
    border-color: #ccc;

    &:focus {
      width: 100%;
      height: 56px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  height: 32px;
  padding: 0 12px;
  font-size: 0.875rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 1000px;
  cursor: pointer;

  transition: none;

  &:hover {
    background-color: #333;
  }
`;
