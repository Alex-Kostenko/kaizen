"use client";
import { IProduct } from "@/products";
import CheckoutPage from "@/sections/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  TextSection,
  TopHeader,
  Text,
  Container,
  SubHeader,
  Error,
  Empty,
} from "./style";
import { useEffect, useState } from "react";
import Button from "../Button";
import Link from "next/link";

const stripePromise = loadStripe(
  "pk_test_51Q5MVHK3Qri9t8WuOL0RIOeGPgwuCKuXJ9EEIJcSMBbtZ5Ncq4dafZ25Yk0PBxU2Vkc4Bej2Kn4Q8ImebWJTMx0D00vrX1OB9z"
);
const ElementsProvider = () => {
  const [items, setItems] = useState<{ data: IProduct[] }>({ data: [] });
  const total = items.data
    .map((item) => item.amount)
    .reduce((acc, cur) => acc + cur, 0);
  const updateItems = () => {
    const items: { data: IProduct[] } = JSON.parse(
      localStorage.getItem("basket") || '{"data": []}'
    );
    setItems(items);
  };

  useEffect(() => {
    updateItems();

    const handleStorageChange = () => {
      updateItems();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const currency = { symbol: "$", currency: "usd" };

  return (
    <>
      {!items.data.length && (
        <Empty>
          <SubHeader>OOPS!</SubHeader>
          <Error>looks like your cart is empty</Error>
          <Button theme="pay" onClick={close}>
            <Link href="/#services">GO TO THE SERVICES</Link>
          </Button>
        </Empty>
      )}
      {!!total && (
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: Math.round(total * 100),
            currency: currency.currency,
          }}
        >
          <Container>
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
          </Container>
        </Elements>
      )}
    </>
  );
};

export default ElementsProvider;
