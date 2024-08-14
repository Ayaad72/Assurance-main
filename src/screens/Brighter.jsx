import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function Brighter() {
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls
        .start({
          x: "-100%",
          transition: { duration: 1, ease: "easeInOut" },
        })
        .then(() => {
          controls.start({
            x: "0%",
            transition: { duration: 0 },
          });
        });
    }, 5000);

    return () => clearInterval(interval);
  }, [controls]);

  const testimonials = [
    {
      text: "Your work and business vision have changed the trajectory of my life. You’ve impacted my legacy, how I walk, how I talk, how I live, parent, and love. I am different. I am free.",
      name: "Johnika Dreher",
      title: "Client, NFCC Member Agency Money Management International",
    },
    {
      text: "We realized that we had more expenses than income. My counselor helped me prioritize my expenses and informed me of options to handle my debt. She provided suggestions on how to balance our budget.",
      name: "LeAnne",
      title: "Apprisen Client",
    },
    {
      text: "My daughter referred me! This program will help me pay off the debt faster and free up some money to start putting toward my retirement fund.",
      name: "Deborah",
      title: "InCharge Debt Solutions Client",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#f0f4f8",
        padding: "40px 20px",
      }}
      className="nfcc-block layout-testimonial no-pad-top-bottom"
    >
      <div
        className="container-2023"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* Image on the Left */}
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <img
            className="main-img"
            src="https://www.nfcc.org/wp-content/uploads/2023/04/happy-mom-daughter-23.png"
            alt="Happy mom and daughter"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
            loading="lazy"
          />
        </div>

        {/* Text and Testimonials on the Right */}
        <div style={{ flex: "1", paddingLeft: "20px" }}>
          <h3
            style={{
              fontSize: "28px",
              marginBottom: "20px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Creating a plan today
            <span style={{ color: "#0085AD" }}> for a brighter tomorrow.</span>
          </h3>

          {/* Testimonial Slider */}
          <div
            className="layout-testimonial__slider"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <motion.div
              className="slider-track"
              style={{ display: "flex", gap: "20px" }}
              animate={controls}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="layout-testimonial__slider-item"
                  style={{
                    minWidth: "100%",
                    padding: "20px",
                    background: "#ffffff",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p
                    style={{
                      fontStyle: "italic",
                      marginBottom: "10px",
                      color: "#555",
                    }}
                  >
                    "{testimonial.text}"
                  </p>
                  <div style={{ fontWeight: "bold", color: "#333" }}>
                    {testimonial.name}
                  </div>
                  <div style={{ color: "#777" }}>{testimonial.title}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brighter;
