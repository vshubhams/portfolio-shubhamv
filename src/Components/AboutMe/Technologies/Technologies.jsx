import styles from "./tech.module.css"
import IconButton from "@material-ui/core/IconButton";

export const Technologies = () => {
    return (
        <div className={styles.container}>
            <h2>Technologies</h2>
            <div className={styles.grid}>
                <div>
                    <IconButton>
                        <img src="/icons/html.png" alt="" />
                    </IconButton>
                </div>
                <div>
                    <IconButton>
                        <img src="/icons/css.png" alt="" />
                    </IconButton>
                </div>
                <div>
                    <IconButton>
                        <img src="/icons/javascript.png" alt="" />
                    </IconButton>
                </div>
                <div>
                    <IconButton>
                        <img src="/icons/react.png" alt="" />
                    </IconButton>
                </div>
                <div>
                    <IconButton>
                        <img src="/icons/redux.png" alt="" />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
