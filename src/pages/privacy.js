import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const PrivacyPage = () => {
  return (
    <Layout pageTitle="Privacy">
      <h4><em>This policy applies to all information collected or submitted on Look At Me website and our apps for iPhone, iPad, or any other devices and platforms.</em></h4>
      <section>
        <h2>Information we collect</h2>
        <p>Look At Me user settings are saved on each device individually. The app keeps User defaults within the app and the children data with Apple's Core Data on the device. When a user purchases a subscription, the apple uses Apple's StoreKit framework and the users iTunes credentials to subscribe to the app.</p>

        <p>The Look At Me app also uses RevenueCat, Inc., for subscriptions. <a href="https://www.revenuecat.com">RevenueCat</a> It is a mobile framework and backend that provides reliable and centralized handling of Apple and Google subscriptions. Look At Me, and Etched Prints LLC takes NO responsibility or liability for RevenueCat, Inc content or activities within their framework and the data collected and used by RevenueCat, Inc. To learn more about their Privacy Policy, please check out these links.</p>
        <a href="https://www.revenuecat.com/privacy">RevenueCat Privacy</a> | <a href="https://www.revenuecat.com/dpa">RevenueCat DPA</a>

        <hr></hr>

        <h2>iCloud</h2>
        <p>Look At Me does not use Apple's iCloud storage service. We know you might install the app on multiple iOS devices using the iTunes Apple ID for your business. This Apple ID may be different from your personal or employees Apple ID. So for your convenience, this is the second reason children's data is on each device and not stored in the cloud.</p>

        <hr></hr>

        <h2>Ads and Analytics</h2>
        <p>Look At Me uses Apples built-in App Analytic system. <br></br>Apple, Inc. does collect app analytics&nbsp;<a href="https://developer.apple.com/app-store-connect/analytics/">https://developer.apple.com/app-store-connect/analytics/</a><br></br>Please review RevenueCat, Inc policy also. <br></br><a href="https://www.revenuecat.com/privacy">https://www.revenuecat.com/privacy</a><br></br><a href="https://www.revenuecat.com/dpa">https://www.revenuecat.com/dpa</a></p>

        <hr></hr>

        <h2>Information usage</h2>
        <p>We use the information we collect to operate and improve our website, apps, and customer support. We do not share personal information with outside parties except to the extent necessary to fulfill Look At Me's functionality. We may share anonymous, aggregate statistics with outside parties. We may disclose your information in response to subpoenas, court orders, or other legal requirements. To exercise our legal rights or defend against legal claims; to investigate, prevent, or take action regarding illegal activities, suspected fraud or abuse, violations of our policies; or to protect our rights and property. In the future, we may sell to, buy, merge with, or partner with other businesses. In such transactions, user information may be among the transferred assets.</p>

        <hr></hr>

        <h2>Security</h2>
        <p>We implement a variety of security measures to help keep your information secure. For instance, the website is HTTPS.</p>

        <hr></hr>

        <h2>Accessing, changing, or deleting information</h2>
        <p>The iOS device folder stores by default a PDF of all files shared. A user can go into the Look At Me settings and turn this feature off.</p>

        <hr></hr>

        <h2>Third-party links and content</h2>
        <p>Third-parties like Apple, Inc, and RevenueCat, Inc have independent privacy policies, and we have no responsibility or liability for their content or activities.</p>

        <hr></hr>

        <h2>California Online Privacy Protection Act Compliance</h2>
        <p>We comply with the California Online Privacy Protection Act. We, therefore, will not distribute your personal information to outside parties without your consent.</p>

        <hr></hr>

        <h2>Children's Online Privacy Protection Act Compliance</h2>
        <p>We never collect or maintain information at our website from those we know are under 13, and no part of our website is structured to attract anyone under 13.</p>

        <hr></hr>

        <h2>Information for European Union Customers</h2>
        <p>By using Look At Me and providing your information, you authorize us to collect, use, and store your information outside of the European Union.</p>

        <hr></hr>

        <h2>International Transfers of Information</h2>
        <p>Information may be processed, stored, and used outside of your location. Data privacy laws vary across jurisdictions, and different rules may apply to your data depending on where it is processed, stored, or used.</p>

        <hr></hr>

        <h2>Your Consent</h2>
        <p>By using our site or apps, you consent to our privacy policy.</p>

        <hr></hr>

        <h2>Contact Us</h2>
        <p>If you have questions regarding this privacy policy, please visit <a href="http://llc.etchedprints.com">LLC Link</a></p>

        <hr></hr>

        <h2>Changes to this policy</h2>
        <p>If we decide to change our privacy policy, we will post those changes on this page. Summary of changes so far:</p>

        <ul>
          <li><strong>Sept 1st, 2019</strong> First published</li>
        </ul>




      </section>
      
    
    </Layout>
  )
}

export const Head = () => <Seo title="Privacy" />

export default PrivacyPage
