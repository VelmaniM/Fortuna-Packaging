import { useEffect } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { COMPANY } from '../utils/constants';

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-navy dark:prose-headings:text-white prose-a:text-red hover:prose-a:text-red-hover">
            <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
              By accessing our website and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Intellectual Property Rights</h2>
            <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
              Other than the content you own, under these Terms, {COMPANY.fullName} and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Restrictions</h2>
            <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
              You are specifically restricted from all of the following:
            </p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-gray-300 mb-6 leading-relaxed space-y-2">
              <li>Publishing any Website material in any other media without prior consent.</li>
              <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
              <li>Using this Website in any way that is or may be damaging to this Website.</li>
              <li>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitation of Liability</h2>
            <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
              In no event shall {COMPANY.fullName}, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. {COMPANY.fullName}, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Governing Law & Jurisdiction</h2>
            <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
              These Terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Information</h2>
            <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
              If you have any questions regarding these Terms, please contact us at: <br/>
              <strong>Email:</strong> {COMPANY.email} <br/>
              <strong>Phone:</strong> {COMPANY.phone}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
