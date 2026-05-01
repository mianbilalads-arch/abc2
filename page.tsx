export default function Success() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6">
      <div className="max-w-md mx-auto text-center">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-slate-400 text-lg mb-8">
          Your audit request has been submitted successfully. We&apos;ll review your information and get back to you within 24 hours.
        </p>

        <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 mb-8">
          <h2 className="text-sm font-medium text-slate-500 mb-4">WHAT HAPPENS NEXT?</h2>
          <ul className="text-left space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400">✓</span>
              We&apos;ll analyze your current Meta ads setup
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400">✓</span>
              Schedule a free strategy call
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400">✓</span>
              Get a customized growth plan
            </li>
          </ul>
        </div>

        <a href="/" className="inline-block px-6 py-3 border border-slate-700 hover:border-slate-500 rounded-xl transition-colors">
          Back to Home
        </a>
      </div>
    </div>
  );
}
