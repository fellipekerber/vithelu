import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from '@fortawesome/free-solid-svg-icons';

export async function getStaticProps() {
    return {
        props: {
            titulo: 'Parceiros',
            content: 'Conteúdo',
        }
    }
}

export default function Parceiros(props) {

    return (
        <>
            <div className={styles.center}>
                <h1>
                    {props.title}
                </h1>
            </div>
            <div className={styles.grid}>
                <div className={styles.description}>
                    <p>
                        <code className={styles.code}>{props.content}</code>
                        <FontAwesomeIcon icon={faComments} />
                    </p>
                </div>
            </div>
        </>
    );
}