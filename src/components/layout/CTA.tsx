import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Home?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get your free quote today and experience the Windows by Choice difference
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Get Free Quote
          </Link>
          <a
            href="tel:07774604190"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
          >
            Call 07774 604 190
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;