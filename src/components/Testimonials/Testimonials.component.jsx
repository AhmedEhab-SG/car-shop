import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import testimonial1 from "../../assets/images/testimonials/testimonial1.jpg";
import testimonial2 from "../../assets/images/testimonials/testimonial2.jpg";
import testimonial3 from "../../assets/images/testimonials/testimonial3.jpg";
import testimonial4 from "../../assets/images/testimonials/testimonial4.jpg";
import classes from "./Testimonials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import SectionContainer from "../SectionContainer/SectionContainer.component";

const reviewArr = [
  {
    id: "0",
    name: "Marwan Sayed",
    location: "ِCairo",
    review: `"I bought a car from this website and it was an amazing experience! The payment enquiry was easy and the price was in range "`,
    img: testimonial1,
  },
  {
    id: "1",
    name: "Omar Zayed",
    location: "Giza",
    review: `"I got my car from my the nearst branch, It was in a great condition as it was market on the this website"`,
    img: testimonial2,
  },
  {
    id: "2",
    name: "Muhammad Ali",
    location: "Luxor",
    review: `"I had an issue with the payment but the customer support team was every friendly and they solved my problem in no time"`,
    img: testimonial3,
  },
  {
    id: "3",
    name: "Aisha",
    location: "Alexandira",
    review: `"The car was better than i imagined, Highly recommend this website you will find you dream car here!"`,
    img: testimonial4,
  },
];

const reviewElement = reviewArr.map((reviewItems) => {
  return (
    <SwiperSlide key={reviewItems.id} className={classes.allTestimonialsBox}>
      <span className={classes.quotesIcon}>
        <FontAwesomeIcon icon={faQuoteRight} />
      </span>
      <p>{reviewItems.review}</p>
      <div className={classes.allTestimonialsBoxName}>
        <div className={classes.allTestimonialsBoxNameProfile}>
          <img src={reviewItems.img} alt="user_img" />
          <span>
            <h4>{reviewItems.name}</h4>
            <p>{reviewItems.location}</p>
          </span>
        </div>
      </div>
    </SwiperSlide>
  );
});

const Testimonials = () => {
  return (
    <section className={classes.testimonialsSection}>
      <SectionContainer>
        <div className={classes.testimonialsContent}>
          <div className={classes.testimonialsContentTitle}>
            <h4>Reviewed by People</h4>
            <h2>Client's Testimonials</h2>
            <p>
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you.
            </p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: "4000", disableOnInteraction: false }}
            className={classes.allTestimonials}
          >
            {reviewElement}
          </Swiper>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Testimonials;
