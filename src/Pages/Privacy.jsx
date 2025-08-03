import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <section className="mb-8">
            <p className="mb-4">
              At HuLink, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Personal Identifiable Information (PII):</strong> Name, email address, profile picture, and other information you provide during registration.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our platform, including event history and group participation.</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, and other technical details.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect for various purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>To provide and maintain our service</li>
              <li>To personalize your experience</li>
              <li>To improve our platform</li>
              <li>To communicate with you (e.g., updates, support)</li>
              <li>For security and fraud prevention</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
            <p className="mb-4">We may share your information in the following situations:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>With service providers who assist us in operating our platform</li>
              <li>When required by law or to respond to legal processes</li>
              <li>In connection with a business transfer (e.g., merger or acquisition)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Data Protection Rights</h2>
            <p className="mb-4">Depending on your location, you may have rights including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>The right to access, update, or delete your information</li>
              <li>The right to rectification if your information is inaccurate</li>
              <li>The right to object to our processing of your data</li>
              <li>The right to request restriction of processing</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Security of Your Data</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Links to Other Websites</h2>
            <p className="mb-4">
              Our platform may contain links to third-party websites. We have no control over and assume no responsibility for the content or practices of these sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Effective Date" below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@hulink.com" className="text-primary hover:underline">privacy@hulink.com</a>.
            </p>
            <p>
              <strong>Effective Date:</strong> July 8, 2025
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;