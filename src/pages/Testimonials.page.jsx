import Footer from "../components/Footer/Footer.component";
import HeroPages from "../components/HeroPages/HeroPages.component";
import Testimonials from "../components/Testimonials/Testimonials.component";
import BuyBanner from "../components/BuyBanner/BuyBanner.component";

const TestimonialsPage = () => {
  return (
    <section className="testimonial-page">
      <HeroPages name="Testimonials" />
      <Testimonials />
      <BuyBanner />
      <Footer />
    </section>
  );
};

export default TestimonialsPage;
