import { HeaderViewProps } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function HeaderView({
  shrink,
  isFocused,
  onFocus,
  onBlur,
  handleSubmit,
  inputValue,
  onChange,
}: HeaderViewProps) {
  return (
    <HeaderContainer>
      <LogoContainer href="/">
        <Image
          src="https://cdn.weebur.com/assets/bi/logo.svg"
          width={124}
          height={23}
          alt="logo"
        />
      </LogoContainer>
      <Form onSubmit={handleSubmit}>
        <SearchInputWrapper className={shrink ? "shrink" : ""}>
          <SearchInput
            // className={shrink ? "shrink" : ""}
            placeholder="찾고 싶은 상품을 검색해보세요"
            onFocus={onFocus}
            onBlur={onBlur}
            value={inputValue}
            onChange={onChange}
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

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 50px;
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

  &.shrink {
    max-width: 400px; /* shrink일 때 줄어들게 하고 싶다면 */
    padding: 0 0.25rem;
    background-color: #f9f9f9;
  }
`;

export const SearchInput = styled.input`
  /* flex: 1; */
  transition: all 0.3s ease;
  border: none;
  outline: none;
  background: transparent;
  width: 100%;

  &.shrink {
    font-size: 0.875rem;
    border-color: #ccc;

    /* &:focus {
      width: 100%;
      height: 56px;
    } */
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
