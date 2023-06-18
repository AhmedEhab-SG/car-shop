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
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{ delay: "4000", disableOnInteraction: false }}
            className={classes.allTestimonials}
          >
            <SwiperSlide className={classes.allTestimonialsBox}>
              <span className={classes.quotesIcon}>
                <FontAwesomeIcon icon={faQuoteRight} />
              </span>
              <p>
                "I bought a car from this website and it was an amazing
                experience! The payment enquiry was easy and the price was in
                range "
              </p>
              <div className={classes.allTestimonialsBoxName}>
                <div className={classes.allTestimonialsBoxNameProfile}>
                  <img src={testimonial1} alt="user_img" />
                  <span>
                    <h4>Marwan Sayed</h4>
                    <p>Cairo</p>
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className={classes.allTestimonialsBox}>
              <span className={classes.quotesIcon}>
                <FontAwesomeIcon icon={faQuoteRight} />
              </span>
              <p>
                "I got my car from my the nearst branch, It was in a great
                condition as it was market on the this website"
              </p>
              <div className={classes.allTestimonialsBoxName}>
                <div className={classes.allTestimonialsBoxNameProfile}>
                  <img src={testimonial2} alt="user_img" />
                  <span>
                    <h4>Omar Zayed</h4>
                    <p>Giza</p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={classes.allTestimonialsBox}>
              <span className={classes.quotesIcon}>
                <FontAwesomeIcon icon={faQuoteRight} />
              </span>
              <p>
                "I had an issue with the payment but the customer support team
                was every friendly and they solved my problem in no time"
              </p>
              <div className={classes.allTestimonialsBoxName}>
                <div className={classes.allTestimonialsBoxNameProfile}>
                  <img src={testimonial3} alt="user_img" />
                  <span>
                    <h4>Muhammad Ali</h4>
                    <p>Luxor</p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={classes.allTestimonialsBox}>
              <span className={classes.quotesIcon}>
                <FontAwesomeIcon icon={faQuoteRight} />
              </span>
              <p>
                "The car was better than i imagined, Highly recommend this
                website you will find you dream car here!"
              </p>
              <div className={classes.allTestimonialsBoxName}>
                <div className={classes.allTestimonialsBoxNameProfile}>
                  <img src={testimonial4} alt="user_img" />
                  <span>
                    <h4>Aisha</h4>
                    <p>Alexandira</p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Testimonials;
