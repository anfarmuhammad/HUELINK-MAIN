import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          
          <section className="mb-8">
            <p className="mb-4">
              Welcome to HuLink! These Terms of Service ("Terms") govern your access to and use of the HuLink platform. By accessing or using our service, you agree to be bound by these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Account Registration</h2>
            <p className="mb-4"><strong>Eligibility:</strong> You must be at least 13 years old to use our platform.</p>
            <p className="mb-4"><strong>Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
            <p className="mb-4"><strong>Account Termination:</strong> We reserve the right to suspend or terminate your account at our sole discretion.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Conduct</h2>
            <p className="mb-4">You agree not to engage in any of the following prohibited activities:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Posting illegal, harmful, or offensive content</li>
              <li>Harassing, bullying, or threatening other users</li>
              <li>Spamming or sending unsolicited communications</li>
              <li>Impersonating others or providing false information</li>
              <li>Violating any applicable laws or regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Content Policy</h2>
            <p className="mb-4"><strong>Ownership:</strong> You retain ownership of any content you post on HuLink.</p>
            <p className="mb-4"><strong>License:</strong> By posting content, you grant us a worldwide, non-exclusive license to use, display, and distribute your content in connection with our service.</p>
            <p className="mb-4"><strong>Moderation:</strong> We reserve the right to remove any content that violates these Terms.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="mb-4"><strong>HuLink's IP:</strong> All platform software, designs, and trademarks are our property.</p>
            <p className="mb-4"><strong>User IP:</strong> Users retain ownership of their original content as stated above.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimers</h2>
            <p className="mb-4"><strong>No Warranties:</strong> The service is provided "as is" without warranties of any kind.</p>
            <p className="mb-4"><strong>Limitation of Liability:</strong> We shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify and hold harmless HuLink and its affiliates from any claims arising from your use of the service or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="mb-4">
              We may modify these Terms at any time. We will notify you of significant changes, and your continued use of the service constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at <a href="mailto:legal@hulink.com" className="text-primary hover:underline">legal@hulink.com</a>.
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

export default Terms;