"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="medium"
        background="fluid"
        cardStyle="glass-elevated"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Mainkai Café"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "plain",
      }}
      title="Your Cozy Escape by the River ☕"
      description="Experience fresh coffee, artisan breakfast, and a relaxing atmosphere overlooking the Main River in Frankfurt."
      buttons={[
        {
          text: "View Menu",
          href: "#menu",
        },
        {
          text: "Reserve a Table",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-woman-drinking-tea-cafe_1303-25721.jpg?_wi=1"
      imageAlt="elegant cafe riverside frankfurt main river view"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="About Mainkai Café"
      description={[
        "Mainkai Café & Bistro is a stylish retreat located directly on the banks of the Main River in Frankfurt.",
        "We offer fresh breakfast, specialty coffee, and handcrafted desserts in an inviting space perfect for friends, work, or leisure.",
        "With a capacity of up to 40 guests, we are the ideal destination for special occasions, gift vouchers, and memorable riverside moments.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          tag: "Location",
          title: "Riverside View",
          subtitle: "Best in town",
          description: "Unmatched views of the Main river while you sip your coffee.",
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-table-with-drinks_1122-458.jpg",
          imageAlt: "cafe interior detail rustic warm atmosphere",
        },
        {
          tag: "Quality",
          title: "Fresh Ingredients",
          subtitle: "From local sources",
          description: "Every dish is prepared fresh daily with quality local produce.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-drinking-tea-cafe_1303-25721.jpg?_wi=2",
          imageAlt: "cafe interior detail rustic warm atmosphere",
        },
        {
          tag: "Dietary",
          title: "Inclusive Menu",
          subtitle: "Vegan & GF friendly",
          description: "Vegetarian, vegan, and gluten-free options are always available.",
          imageSrc: "http://img.b2bpic.net/free-photo/baked-two-eggs-with-ham-cheese-round-bowl-two-pieces-brown-healthy-bread-side_343596-1548.jpg?_wi=1",
          imageAlt: "cafe interior detail rustic warm atmosphere",
        },
      ]}
      title="Why Visit Mainkai?"
      description="We take pride in our riverside location and fresh, high-quality ingredients."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Espresso",
          price: "2.90€",
          variant: "Hot Drink",
          imageSrc: "http://img.b2bpic.net/free-photo/baked-two-eggs-with-ham-cheese-round-bowl-two-pieces-brown-healthy-bread-side_343596-1548.jpg?_wi=2",
        },
        {
          id: "2",
          name: "Cappuccino",
          price: "3.80€",
          variant: "Hot Drink",
          imageSrc: "http://img.b2bpic.net/free-photo/hot-latte-art-coffee-table-filtered-image-processed-vintage_1232-2210.jpg",
        },
        {
          id: "3",
          name: "Earl Grey Tea",
          price: "3.50€",
          variant: "Tea",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-recipe-book-still-life-concept_23-2149056054.jpg",
        },
        {
          id: "4",
          name: "Fresh Croissant",
          price: "2.50€",
          variant: "Breakfast",
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-baked-cookies-with-citrus-fruit_23-2147956819.jpg",
        },
        {
          id: "5",
          name: "Avocado Toast",
          price: "9.50€",
          variant: "Breakfast",
          imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-person-making-drip-coffee_53876-30607.jpg",
        },
        {
          id: "6",
          name: "Vegan Breakfast Bowl",
          price: "11.90€",
          variant: "Breakfast",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-dessert-plate_23-2151971372.jpg",
        },
      ]}
      title="Our Menu"
      description="Handcrafted coffee, fine teas, and fresh breakfast items."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Mainkai Atmosphere"
      description={[
        "Captured moments from our bistro.",
        "Enjoy the cozy indoor seating or the refreshing riverside ambiance of our café.",
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="The best spot by the Main! Coffee is exceptional and the view is unmatched. Definitely my favorite breakfast place in Frankfurt."
      rating={5}
      author="Sarah Miller"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-asian-woman-apron-barista-giving-you-cup-coffee-working-cafe-serving_1258-199256.jpg",
          alt: "Sarah",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-with-disposable-coffee-cup_107420-12311.jpg",
          alt: "Mark",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-lifestyle-portrait-happy-carefree-black-woman-enjoying-coffee-break-paris_273443-1396.jpg",
          alt: "Elena",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-counter_1170-668.jpg",
          alt: "Tom",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiley-beautiful-woman-enjoying-coffee_23-2148317286.jpg",
          alt: "Sophie",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Reservations"
      title="Book Your Table"
      description="Planning a visit? Send us a reservation request or contact us for group bookings."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/two-smiling-women-talking-table-cafe_171337-19613.jpg"
      logoText="Mainkai Café"
      columns={[
        {
          title: "Contact",
          items: [
            {
              label: "Mainkai 15, Frankfurt",
              href: "#",
            },
            {
              label: "+49 69 260 975 65",
              href: "tel:+496926097565",
            },
            {
              label: "kontakt@mainkaicafe.de",
              href: "mailto:kontakt@mainkaicafe.de",
            },
          ],
        },
        {
          title: "Hours",
          items: [
            {
              label: "Mon – Sun: 09:00 – 21:00",
              href: "#",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Instagram",
              href: "https://www.instagram.com/mainkaicafe",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
