import styles from "./Footer.module.css"
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
const Footer = () => {
    return(
        <>
        
        <footer className={styles.footer}>
            <section>
                <h4>Contact</h4>
                <p>cheezyfreezy@abc.com</p>
                <p>1234567890</p>
            </section>
            <section>
                <h4>Address</h4>
                <address>
                    201 FA road, New Delhi, India</address>
            </section>
            <section>
                <h4>Hours</h4>
                <p>Open Daily</p>
                <p>10M - 10PM</p>
            </section>
            <section className={styles.socials}>
                <ul>
                    <li><FaFacebook/></li>
                    <li><FaTwitter/></li>
                    <li><FaLinkedin/></li>
                    <li><FaInstagram/></li>
                </ul>
            </section>
        </footer>
        
        </>
    )

}

export default Footer;
