import Image from "next/image";
import styled from "styled-components";
import MessageIcon from "../../icons/MessageIcon";

export interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  rating: number;
  reviews: unknown[];
}

export interface ProductItemProps {
  product: Product;
  isGridView: boolean;
}

export default function ProductItem({ product, isGridView }: ProductItemProps) {
  return (
    <Wrapper $isGridView={isGridView}>
      <ImageWrapper $isGridView={isGridView}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </ImageWrapper>
      <InfoColumn $isGridView={isGridView}>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <Rating>⭐{product.rating}</Rating>
        <Reviews>
          <MessageIcon />
          후기 {product.reviews.length}
        </Reviews>
      </InfoColumn>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $isGridView: boolean }>`
  display: flex;
  flex-direction: ${({ $isGridView }) => ($isGridView ? "column" : "row")};
  gap: 12px;
`;

const ImageWrapper = styled.div<{ $isGridView: boolean }>`
  position: relative;
  width: ${({ $isGridView }) => ($isGridView ? "100%" : "20% ")};
  height: 150px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 15px;
  font-weight: 600;
  line-height: 22.05px;
`;

const Description = styled.h3`
  font-size: 14px;
  color: #555;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  line-height: 1.4;
  max-height: 2.8em;
  flex: 1;
`;

const Rating = styled.div`
  color: red;
`;

const Reviews = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;

const InfoColumn = styled.div<{ $isGridView: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`;
