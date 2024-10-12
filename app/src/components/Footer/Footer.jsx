import styles from './Footer.module.css';
import Image from "next/image";
import gpay from "@/app/assets/gpay.png";
import mastercard from "@/app/assets/mastercard.png";
import paypal from "@/app/assets/paypal.png";
import amex from "@/app/assets/amex.png";
import apple from "@/app/assets/applepay.png";
import opay from "@/app/assets/opay.png";
import social from "@/app/assets/social.png";
import currency from "@/app/assets/usd.png";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.firstUpperContainer}>
        <div className={styles.first_box}>
          <div className={styles.heading_box}>
            <h1 className={styles.first_headings}>BE THE FIRST TO KNOW</h1>
            <p className={styles.second_subheading}>Sign Up for updates from metta muse.</p>
          </div>
          <div className={styles.inputContainer}>
          <input className={styles.emailInput} type="text" placeholder="Enter your e-mail..." />

            <button className={styles.inputbox}>SUBSCRIBE</button>
          </div>
        </div>
        <div className={styles.second_box}>
            <h1 className={styles.first_heading}>CONTACT US</h1>
            <p className={styles.second_subheading}>+44 221 133 5360</p>
            <p className={styles.second_subheading}>customercare@mettamuse.com</p>
            <h1 className={styles.first_heading}>CURRENCY</h1>
            <div style={{ display: 'flex', alignItems: 'center' }}>
  <Image src={currency} width="32px" height="32px" alt="usd" />
  <p style={{ marginLeft: '8px' }}>+USD</p>
</div>
            <p className={styles.minidesc}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
        </div>
      </div>

      <hr />

      <div className={styles.secondContainer}>
        <div className={styles.third_box}>
          <h1 className={styles.second_heading} style={{textAlign: "left"}}>mettā muse</h1>
          <p className={styles.second_subheading}>About Us</p>
          <p className={styles.second_subheading}>Stories</p>
          <p className={styles.second_subheading}>Artisans</p>
          <p className={styles.second_subheading}>Boutiques</p>
          <p className={styles.second_subheading}>Contact Us</p>
          <p className={styles.second_subheading}>EU Compliances Docs</p>
        </div>

        <div className={styles.fourth_box}>
          <h1 className={styles.third_heading} style={{textAlign: "left"}}>QUICK LINKS</h1>
          <p className={styles.second_subheading}>Orders & Shipping</p>
          <p className={styles.second_subheading}>Join/Login as a Seller</p>
          <p className={styles.second_subheading}>Payment & Pricing</p>
          <p className={styles.second_subheading}>Return & Refunds</p>
          <p className={styles.second_subheading}>FAQs</p>
          <p className={styles.second_subheading}>Privacy Policy</p>
          <p className={styles.second_subheading}>Terms & Conditions</p>
        </div>

        <div className={styles.thirdContainer}>
          <div className={styles.fourth_box}>
            <h1 className={styles.third_heading}>FOLLOW US</h1>
            <div className={styles.imgae_icons}>
              <Image src={social} width="32px" height="32px" alt="instagram" />
            </div>
          </div>
          <div>
            <div>
            <h1 className={styles.third_heading} style={{textAlign: "left", textTransform: "lowercase"}}>mettā muse <span className={styles.second_subheading} style={{textTransform: "uppercase"}}>ACCEPTS</span></h1>
            <div className={styles.image_container}>
              <Image src={gpay} width="56px" height="35px" alt="gpay" />
              <Image src={mastercard} width="56px" height="35px" alt="mastercard" />
              <Image src={paypal} width="56px" height="35px" alt="paypal" />
              <Image src={amex} width="56px" height="35px" alt="amex" />
              <Image src={apple} width="56px" height="35px" alt="apple pay" />
              <Image src={opay} width="56px" height="35px" alt="Opay" />
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
