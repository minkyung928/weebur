import { SkeletonProductItemProps } from "@/types/products.types";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

export default function SkeletonPostType({
  isGridView,
}: SkeletonProductItemProps) {
  return (
    <Wrapper $isGridView={isGridView}>
      <ImageWrapper $isGridView={isGridView}>
        <Skeleton width="100%" height="100%" />
      </ImageWrapper>
      <ContentWrapper $isGridView={isGridView}>
        <Skeleton height={20} width="80%" />
        <Skeleton height={14} width="100%" count={2} />
        <Meta>
          <Skeleton width={40} height={12} />
          <Skeleton width={60} height={12} />
        </Meta>
      </ContentWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div<{ $isGridView: boolean }>`
  display: flex;
  flex-direction: ${({ $isGridView }) => ($isGridView ? "column" : "row")};
  gap: 12px;
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 8px;
`;

export const ImageWrapper = styled.div<{ $isGridView: boolean }>`
  position: relative;
  width: ${({ $isGridView }) => ($isGridView ? "100%" : "30%")};
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
`;

export const ContentWrapper = styled.div<{ $isGridView: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  padding-top: ${({ $isGridView }) => ($isGridView ? "8px" : "0")};
`;

export const Meta = styled.div`
  display: flex;
  gap: 8px;
`;
