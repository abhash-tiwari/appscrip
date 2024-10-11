import styles from './Footer.module.css'; // Update the import to use CSS modules
import Image from "next/image";
// import gpay from "../../assets/gpay.png";
// import rectangle from "../../assets/rectangle.png";
// import paypal from "../../assets/paypal.png";
// import amex from "../../assets/amex.png";
// import apple from "../../assets/apple.png";
// import pay from "../../assets/pay.png";
// import insta from "../../assets/insta.png";
// import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}> {/* Use the imported styles here */}
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
          <div className="">
            <h1 className={styles.first_heading}>CONTACT US</h1>
            <p className={styles.second_subheading}>+44 221 133 5360</p>
            <p className={styles.second_subheading}>customercare@mettamuse.com</p>
            <h1 className={styles.first_heading}>CURRENCY</h1>
            <p className={styles.second_subheading}>+USD</p>
            <p className={styles.minidesc}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className={styles.secondContainer}>
        <div className={styles.third_box}>
          <h1 className={styles.second_heading}>mettā muse</h1>
          <p className={styles.second_subheading}>About Us</p>
          <p className={styles.second_subheading}>Stories</p>
          <p className={styles.second_subheading}>Artisans</p>
          <p className={styles.second_subheading}>Boutiques</p>
          <p className={styles.second_subheading}>Contact Us</p>
          <p className={styles.second_subheading}>EU Compliances Docs</p>
        </div>

        <div className={styles.fourth_box}>
          <h1 className={styles.third_heading}>QUICK LINKS</h1>
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
              {/* <Image src={insta} width="32px" height="32px" alt="instagram" />
              <Image src={linkedin} width="32px" height="32px" alt="linkdin" /> */}
            </div>
          </div>
          <div>
            <h1 className={styles.third_heading}>mettā muse <span className={styles.second_subheading}>ACCEPTS</span></h1>
            <div className={styles.image_container}>
              {/* <Image src={gpay} width="56px" height="35px" alt="gpay" />
              <Image src={rectangle} width="56px" height="35px" alt="mastercard" />
              <Image src={paypal} width="56px" height="35px" alt="paypal" />
              <Image src={amex} width="56px" height="35px" alt="amex" />
              <Image src={apple} width="56px" height="35px" alt="apple pay" />
              <Image src={pay} width="56px" height="35px" alt="Opay" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
