import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-16 bg-black bg-cover text-white"
     style={{ backgroundImage: "url('https://framerusercontent.com/images/mn2zfZoubysqLkaubCf2KzJuyo.png')" }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of others building vibrant communities with HuLink.
        </p>
        <Link
          to="/signup"
          className="inline-block bg-white text-black  px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
          >
          Sign Up Now
        </Link>
      </div>
    </section>
  );
};

export default CTA;