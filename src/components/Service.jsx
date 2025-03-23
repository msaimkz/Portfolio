import React, { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import services from "../data/services";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const serviceListRef = useRef([]);
  const serviceOverlayRef = useRef(null);

  useEffect(() => {
    const ServiceLists = serviceListRef.current;
    const ServiceOverlay = serviceOverlayRef.current;

    if (!ServiceLists.length) return;

    const handleMouseEnter = (event) => {
      const item = event.currentTarget;
      ServiceOverlay.style.top = item.offsetTop + "px";
      ServiceOverlay.style.height = item.offsetHeight + "px";

      ServiceLists.forEach((service) => service.classList.remove("active"));
      item.classList.add("active");
    };

    const handleMouseLeave = (event) => {
      const item = event.currentTarget;
      item.classList.remove("active");

      ServiceOverlay.style.top = ServiceLists[0].offsetTop + "px";
      ServiceOverlay.style.height = ServiceLists[0].offsetHeight + "px";
      ServiceLists[0].classList.add("active");
    };

    ServiceLists.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    // Set overlay to first item initially
    ServiceOverlay.style.top = ServiceLists[0].offsetTop + "px";
    ServiceOverlay.style.height = ServiceLists[0].offsetHeight + "px";
    ServiceLists[0].classList.add("active");

    
  }, []);

  return (
    <section className="services" id="services">
      <SectionHeader
        head="My Quality Services"
        about="We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers."
      />
      <div className="services-list-container">
        <div ref={serviceOverlayRef} className="service-overlay"></div>
        {services.map((service, index) => {
          return (
            <ServiceCard
              title={service.title}
              sno={service.sno}
              description={service.description}
              serviceListRef={serviceListRef}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Service;
