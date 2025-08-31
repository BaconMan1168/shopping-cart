import { Link } from "react-router-dom"
import styles from "./HomeMain.module.css"

export default function HomeMain(){
    return (
        <main className={styles.homeMain}>
            <div className={styles.leftElements}>
                <h3>Welcome to Shopple</h3>
                <h1 className={styles.homeHeader}>Elevate your shopping experience with Shopple</h1>
                <h2>Clothes as cheap as $5.00</h2>
            </div>
            
            <div className={styles.rightElements}>
                <Link to="Shop">
                    <button className={styles.shopBtn}>SHOP NOW!</button>
                </Link>
                <h2>You won't regret your purchases!</h2>
            </div>

            
        </main>
    )
}