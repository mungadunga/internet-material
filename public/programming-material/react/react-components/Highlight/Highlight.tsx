import styles from "./Highlight.module.css";

interface props {
   children?: string | JSX.Element;
}

const Highlight = (props: props) => (
   <span id={styles.container_43243}>
      <span id={styles.container_438}>
         <p id={styles.e_45h}>{props.children}</p>
      </span>
   </span>
)

export default Highlight;