import { useEffect } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { COMPANY } from '../utils/constants';

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-soft dark:bg-black pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-12">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-red transition-colors mb-8"
        >
          <HiArrowLeft size={16} /> Back
        </button>

        <div className="bg-white dark:bg-black rounded-3xl p-6 md:p-12 lg:p-16 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-white/10">
          <span className="text-red font-semibold text-xs uppercase tracking-widest mb-3 block">
            Legal Information
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-8 tracking-tight">
            Privacy Policy
          </h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-navy dark:prose-headings:text-white prose-a:text-red hover:prose-a:text-red-hover">
            <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
              Welcome to {COMPANY.fullName}. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Data We Collect</h2>
            <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-gray-300 mb-6 leading-relaxed space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Data</h2>
            <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-gray-300 mb-6 leading-relaxed space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
            <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
              If you have any questions about this privacy policy or our privacy practices, please contact us at: <br/>
              <strong>Email:</strong> {COMPANY.email} <br/>
              <strong>Phone:</strong> {COMPANY.phone}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
