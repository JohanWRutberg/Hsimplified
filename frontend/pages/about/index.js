import Head from "next/head";
import React from "react";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Hemp Simplified</title>
        <meta
          name="description"
          content="HempSimplified: About us, Discover luxurious, eco-friendly bamboo pillows and bedding. Experience unmatched comfort, breathability, and sustainability in every product."
        />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="About Us | Hemp Simplified" />
        <meta
          property="og:description"
          content="HempSimplified: About us, Discover luxurious, eco-friendly bamboo pillows and bedding. Experience unmatched comfort, breathability, and sustainability in every product."
        />
        <meta property="og:image" content="/img/about-og-image.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:title" content="About Us | Hemp Simplified" />
        <meta
          name="twitter:description"
          content="HempSimplified: About us, Discover luxurious, eco-friendly bamboo pillows and bedding. Experience unmatched comfort, breathability, and sustainability in every product."
        />
        <meta name="twitter:image" content="/img/about-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <div className="slugpage">
          <div className="container">
            <div className="leftblog_data_markdown pb-5">
              <>
                <div className="w-100 blogcontent">
                  <h1>About us</h1>
                  <h2>Who we are and what we do</h2>
                  <p>
                    Welcome to <b>Hemp Simplified</b>, your trusted source for everything related to hemp-based CBD
                    products, including CBD essential oils, candles, bath oils, lotions, body butter, gummies, and more.
                    Our mission is to help you discover the unparalleled benefits of CBD, so you can enhance your
                    wellness routine and live a more balanced, natural life.
                    <br />
                    At Hemp Simplified, we’re passionate about combining luxury with sustainability. CBD, derived from
                    hemp, offers a wide range of benefits, from relaxation and stress relief to skin nourishment and
                    pain management. Whether you're looking for CBD to improve your skincare routine, support your
                    body's natural healing, or unwind after a long day, we’ve got you covered.
                    <br />
                    The team behind Hemp Simplified is united by a shared passion for health and wellness, along with
                    expertise in their respective fields:
                    <br />
                    <br />
                    &#187; <b>Johan,</b> a software developer and test engineer, combines his technical expertise with a
                    keen interest in natural wellness to explore the world of hemp-derived CBD products. His analytical
                    approach ensures reliable advice and well-researched product recommendations to help you make the
                    best choices for your body and mind.
                    <br />
                    <br />
                    &#187; <b>Pernilla,</b> a skilled writer and communication specialist, is passionate about sharing
                    the transformative benefits of CBD for health and well-being. Her talent for storytelling brings
                    clarity and warmth to every article, making it easy for readers to understand how CBD products can
                    elevate their everyday routines.
                    <br />
                    <br />
                    Through in-depth articles, product reviews, and practical tips, we aim to guide you in enhancing
                    your wellness journey with CBD. Whether you're curious about the soothing benefits of CBD lotions,
                    the relaxation effects of CBD candles, or looking for the perfect CBD gummies, we’ve got the
                    information you need to make informed decisions.
                    <br />
                    <br />
                    Thank you for visiting Hemp Simplified. Together, let’s create a world where better wellness meets
                    sustainable living!
                  </p>
                </div>
              </>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
