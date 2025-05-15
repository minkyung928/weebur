import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  align-items: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  color: rgb(169, 176, 186);
`;

export const Divider = styled.div`
  width: 1px;
  height: 16px;
  background: rgb(229, 232, 235);
  cursor: default;
`;

export const Rating = styled.div<{ $active?: boolean }>`
  cursor: pointer;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  color: ${({ $active }) =>
    $active ? "rgb(32, 39, 49)" : "rgb(169, 176, 186)"};
`;
