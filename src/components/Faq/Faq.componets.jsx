import { useState } from "react";
import classes from "./Faq.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import SectionContainer from "../SectionContainer/SectionContainer.component";
const Faq = () => {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? classes.activeAnswer : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? classes.activeQuestion : "";
  };

  return (
    <section className={classes.faqSection}>
      <SectionContainer>
        <div className={classes.faqContent}>
          <div className={classes.faqContentTitle}>
            <h5>FAQ</h5>
            <h2>Frequently Asked Questions</h2>
            <p>
              Frequently Asked Questions About the Car Shop, Our Website:
              Answers to Common Concerns and Inquiries.
            </p>
          </div>

          <div className={classes.allQuestions}>
            <div className={classes.faqBox}>
              <div
                id="q1"
                onClick={() => openQ("q1")}
                className={`${classes.faqBoxQuestion}  ${getClassQuestion(
                  "q1"
                )}`}
              >
                <p>1. What is special about our car shop services?</p>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
              <div
                id="q1"
                onClick={() => openQ("q1")}
                className={`${classes.faqBoxAnswer} ${getClassAnswer("q1")}`}
              >
                Our Car Shop services is important as it helps find the best
                deal that fits your budget and requirements, ensuring you get
                the most value for your money. By comparing various options, you
                can find deals that offer lower prices, additional services, or
                better car models. You can find car shop deals by researching
                online and comparing prices from different shop companies.
              </div>
            </div>
            <div className={classes.faqBox}>
              <div
                id="q2"
                onClick={() => openQ("q2")}
                className={`${classes.faqBoxQuestion} ${getClassQuestion(
                  "q2"
                )}`}
              >
                <p>2. How do I find the car shop deals?</p>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
              <div
                id="q2"
                onClick={() => openQ("q2")}
                className={`${classes.faqBoxAnswer} ${getClassAnswer("q2")}`}
              >
                You can find car shop deals by researching online and comparing
                prices from different shop companies. Websites such as Expedia,
                Kayak, and Travelocity allow you to compare prices and view
                available shop options. It is also recommended to sign up for
                email newsletters and follow us on social media to be informed
                of any special deals or promotions.
              </div>
            </div>
            <div className={classes.faqBox}>
              <div
                id="q3"
                onClick={() => openQ("q3")}
                className={`${classes.faqBoxQuestion} ${getClassQuestion(
                  "q3"
                )}`}
              >
                <p>3. How do I find such low car prices?</p>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
              <div
                id="q3"
                onClick={() => openQ("q3")}
                className={`${classes.faqBoxAnswer} ${getClassAnswer("q3")}`}
              >
                Pay in advance: paying a small amount of your car price ahead of
                time can often result in lower prices. Compare prices from
                multiple companies: Use websites to compare prices from multiple
                shop car companies. Look for discount codes and coupons: Search
                for discount codes and coupons that you can use to lower the
                price. buying from an off-airport location can sometimes result
                in lower prices.
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Faq;
