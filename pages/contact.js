import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import ContactInfos from "@/components/contact-infos";
import GoogleMap from "@/components/google-map";
import ContactForm from "@/components/contact-form";
import PageBanner from "@/components/page-banner";
import SearchContextProvider from "context/search-context";
import MenuContextProvider from "context/menu-context";
import HeaderOne from "@/components/header-one";
const ContactPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Contact Page">
          <HeaderOne />
          <PageBanner title="Contact Us" name="Contact" />
          <ContactForm />
          <GoogleMap extraClass="contact-page" />
          <ContactInfos />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ContactPage;
