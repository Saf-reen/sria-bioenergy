import { motion } from "framer-motion";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Cookies</h2>
              <p className="mb-4">SRIA BIOENERGY uses cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing cookies:</strong> Track your activity across websites to deliver relevant advertising</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Session Cookies</h3>
                  <p>Temporary cookies that expire when you close your browser.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Persistent Cookies</h3>
                  <p>Remain on your device until they expire or you delete them.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Third-Party Cookies</h3>
                  <p>Set by third-party services we use, such as analytics providers.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Managing Cookies</h2>
              <p className="mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
              </p>
              <p>
                However, if you do this, you may have to manually adjust some preferences every time you visit our site, and some services and functionalities may not work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">More Information</h2>
              <p>
                For more information about cookies, please visit:{" "}
                <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  www.allaboutcookies.org
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have questions about our Cookie Policy, please contact us at:{" "}
                <a href="mailto:privacy@sriabioenergy.com" className="text-primary hover:underline">
                  privacy@sriabioenergy.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
