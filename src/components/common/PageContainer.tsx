"use client";
import styled from "styled-components";

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 2rem 1rem;
  width: 100%;
  max-width: 960px;
`;
