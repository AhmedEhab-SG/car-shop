import classes from "./SectionContainer.module.css";
const SectionContainer = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};
export default SectionContainer;
