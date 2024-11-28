"use client";

import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import {
  Container,
  TextSection,
  TopHeader,
  Text,
  SubHeader,
  Description,
  Afterword,
  TextWrapper,
  ButtonWrapper,
} from "./style";
import success from "/public/images/success.jpeg";
import arrow from "/public/icons/right_arrow_violet.svg";
import donut from "/public/covers/donut.svg";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import { Suspense } from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const params = useSearchParams();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetch(`/api/payment_meta?${params.toString()}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [params]);

  return (
    <>
      <Header />
      <main style={{ background: "var(--main-color)", paddingBottom: 110 }}>
        <TextWrapper>
          <TextSection>
            <TopHeader>
              KAI<span>ZEN</span>
            </TopHeader>
            <Text>
              Improving your health through mindful choices is at the heart of
              our philosophy, where zest for life grows by prioritizing
              nutrition. Elevate your well-being with our holistic approach,
              nurturing your body and soul through the principles of lifelong
              improvement. Transform yourself with Kaizen.
            </Text>
          </TextSection>
        </TextWrapper>
        <Container>
          <Image src={donut} className="cover_img" alt={""} />
          <article>
            <SubHeader>THANK YOU FOR PURCHASING OUR SERVICE!</SubHeader>
            <Description>
              We are glad that you have decided to take a step towards improving
              your health and well-being. Our specialist will contact you
              shortly to begin working on your request.
            </Description>
            <Afterword>
              If you have any questions, do not hesitate to contact us - we are
              here to support you on your journey to your best well-being!
            </Afterword>
          </article>
          <Image src={success} alt="" />
        </Container>
        <ButtonWrapper>
          <Button theme="ghost-invert" style={{ alignSelf: "end" }} isLink>
            <Link href={"/"}>
              RETURN TO HOME{" "}
              <Image src={arrow} alt={""} width={20} height={20} />
            </Link>
          </Button>
        </ButtonWrapper>
      </main>
      <Footer />
    </>
  );
};

const SuspenseWrapper = (Component: React.ComponentType) => {
  return function WrappedComponent() {
    return (
      <Suspense>
        <Component />
      </Suspense>
    );
  };
};

export default SuspenseWrapper(page);
