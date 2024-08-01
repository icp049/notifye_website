
import styles from "../stylesheets/PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={styles.home} id = "privacypolicy">
      <div className={styles.content}>
        <h1 className={styles.centeredHeading}>Privacy Policy</h1>
         <p className = {styles.policycontent}>




Welcome to Notifye! We are committed to protecting your privacy. This Privacy Policy explains how Notifye collects, uses, and shares your information. By using Notifye, you agree to the terms outlined in this Privacy Policy.

<br /><br /> {/* Adds extra space */}

 Notifye uses the built-in geolocator on your phone to provide location-based data. This allows us to deliver relevant alerts and real-time updates about warnings, dangers, accidents, and happenings within a 20km radius of your current location.

 <br /><br /> {/* Adds extra space */}

We request permission to access your photo gallery only if you choose to share posts or media. This access is optional and you can limit it as per your preferences.
Camera Access: We request permission to use your camera for posting and sharing real-time updates. This access is optional and you can deny it if you do not wish to use this feature.

<br /><br /> {/* Adds extra space */}

We use the location data solely to provide you with location-based updates and alerts. We do not collect, sell, or share your personal data with third parties. Your data is used exclusively within the Notifye app to enhance your experience and provide relevant information based on your location.

<br /><br /> {/* Adds extra space */}

Data security in Notifye is 1100% secured. We employ robust security measures to protect your data such as, 

Email Verification: To avoid spammers and dummy accounts, we use email verification methods ensuring that only real people can use the app.
Secure Authentication: We use a high-quality backend server for authentication to ensure your data is handled securely.
Encrypted Storage: Passwords and other sensitive information are stored using encrypted methods to ensure your data remains safe.

<br /><br /> {/* Adds extra space */}

Notifye does not sell, trade, or otherwise transfer your personal data to third parties. Any data shared through social media platforms is controlled by the sharing functionalities provided within the app and is not directly managed by Notifye.




In addition to that, You can manage the permissions granted to Notifye through your device settings. You can revoke permissions at any time, but please note that this may limit certain functionalities of the app.

<br /><br /> {/* Adds extra space */}

We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            
            
            
             </p>
      </div>
      </div>
   
  );
};

export default PrivacyPolicy;