import React, { FC } from "react";
import { AuthForm } from "@/modules/Auth";
import { Container } from "@/layout";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  return (
    <Container>
      <h2>Home Page</h2>
      <AuthForm />
    </Container>
  );
};
