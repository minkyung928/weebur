import styled from "styled-components";

export const Grid = styled.div<{ $isGridView: boolean }>`
  display: grid;
  grid-template-columns: ${({ $isGridView }) =>
    $isGridView ? "repeat(4, 1fr)" : "1fr"};
  gap: 20px;
`;

export const SearchForm = styled.form`
  margin: 1rem 0;
`;

export const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid #ccc;
  width: 300px;
`;

export const SortButton = styled.button`
  background: #eee;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 8px;
`;

export const ResultSummary = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
`;

export const ProductListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const NoResultHeader = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

export const NoResultList = styled.ul`
  font-weight: 400;
  font-size: 14px;
  list-style: disc;
  padding-left: 50px;
  text-align: left;
`;

export const NoResultContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 40px;
`;
