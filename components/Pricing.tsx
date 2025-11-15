export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple Pricing. No Hidden Fees.
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            Start free. Upgrade when you need more. Cancel anytime.
          </p>
          <p className="text-lg text-emerald-700 font-semibold">
            Your family's recipes are worth $5/month.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {/* Free Tier */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Forever</h3>
              <p className="text-gray-600 mb-4">Perfect for getting started</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-gray-900">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">No credit card required</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-sm">
                  <strong>25 recipes</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-sm">
                  <strong>Multi-image OCR</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-sm">
                  <strong>2 cookbooks</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-sm">
                  <strong>View shared cookbooks</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-sm">
                  <strong>5 AI variations</strong> (lifetime)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-sm">
                  <strong>5 nutrition facts</strong> (lifetime)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-sm">
                  All core features
                </span>
              </li>
            </ul>

            <a
              href="https://app.myfamilyrecipekeeper.com/signup"
              className="block w-full text-center px-6 py-3 text-base font-semibold text-emerald-700 bg-white hover:bg-gray-50 rounded-lg border-2 border-emerald-600 transition-all"
            >
              Start Free Forever
            </a>
          </div>

          {/* Regular Tier */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 shadow-xl border-4 border-emerald-500 relative">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
              MOST POPULAR
            </div>

            <div className="text-center mb-6 mt-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Regular</h3>
              <p className="text-gray-600 mb-4">Perfect for home cooks</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-gray-900">$4.99</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-sm text-emerald-700 mt-2 font-semibold">Less than a coffee per month</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 text-sm font-semibold">
                  <strong>50 recipes per month</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 text-sm font-semibold">
                  <strong>Unlimited OCR imports</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 text-sm font-semibold">
                  <strong>10 AI variations/month</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 text-sm font-semibold">
                  <strong>10 nutrition facts/month</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 text-sm">
                  <strong>Unlimited cookbooks</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 text-sm">
                  <strong>Family sharing</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 text-sm">
                  PDF cookbook export
                </span>
              </li>
            </ul>

            <a
              href="https://app.myfamilyrecipekeeper.com/signup?plan=regular"
              className="block w-full text-center px-6 py-3 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Subscribe Now
            </a>
            <p className="text-center text-sm text-gray-600 mt-3">
              Start with free, upgrade anytime
            </p>
          </div>

          {/* Premium Tier */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
              <p className="text-gray-600 mb-4">For recipe enthusiasts</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-gray-900">$9.95</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-sm text-purple-700 mt-2 font-semibold">Unlimited AI features</p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 text-sm font-semibold">
                  <strong>100 recipes per month</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 text-sm font-semibold">
                  <strong>Unlimited AI variations</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 text-sm font-semibold">
                  <strong>Unlimited nutrition facts</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 text-sm font-semibold">
                  <strong>Unlimited OCR imports</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 text-sm">
                  <strong>Priority support</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 text-sm">
                  Early access to features
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 text-sm">
                  Everything in Regular
                </span>
              </li>
            </ul>

            <a
              href="https://app.myfamilyrecipekeeper.com/signup?plan=premium"
              className="block w-full text-center px-6 py-3 text-base font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Go Premium
            </a>
            <p className="text-center text-sm text-gray-600 mt-3">
              Unlimited AI-powered features
            </p>
          </div>
        </div>

        {/* Referral Program */}
        <div className="max-w-3xl mx-auto mb-8 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-8 shadow-md border-2 border-blue-200">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                🎁 Referral Program: Get 1 Month Free
              </h3>
              <p className="text-gray-700 mb-3">
                As a <strong>paid member</strong> (Regular or Premium), invite your family to join. When they upgrade, you get <strong>1 month free</strong> and they get <strong>50% off their first month</strong>.
              </p>
              <p className="text-sm text-gray-600 italic">
                Coming soon: Share your family cookbooks and earn rewards when they upgrade!
              </p>
            </div>
          </div>
        </div>

        {/* Value Messaging */}
        <div className="max-w-3xl mx-auto text-center bg-white rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Your Family's Recipes Are Priceless
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            A coffee costs $5. Grandma's recipes? <span className="font-semibold text-emerald-600">Irreplaceable</span>.
          </p>
          <p className="text-gray-600">
            Cancel anytime. No questions asked. 30-day money-back guarantee.
          </p>
        </div>

        {/* Annual Plan Mention - Enhanced */}
        <div className="max-w-3xl mx-auto mt-8 relative">
          {/* Decorative badge - positioned outside container */}
          <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 font-bold text-sm px-4 py-2 rounded-full shadow-lg transform rotate-12 z-10">
            SAVE 17%
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 shadow-xl text-white text-center">


            <div className="inline-block bg-white bg-opacity-20 text-xs font-bold px-3 py-1 rounded-full mb-3">
              LIMITED TIME OFFER
            </div>

            <h3 className="text-3xl font-bold mb-3">
              Get 2 Months FREE
            </h3>

            <p className="text-xl mb-6 text-emerald-50">
              Pay annually and save on Regular or Premium plans
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-4">
              <div className="text-center bg-white bg-opacity-10 rounded-lg p-4">
                <p className="text-sm text-emerald-100 font-semibold mb-2">Regular Annual</p>
                <p className="text-2xl font-bold line-through opacity-75">$59.88</p>
                <p className="text-3xl font-bold text-white">$49/year</p>
                <p className="text-sm text-emerald-100">Just $4.08/month</p>
              </div>

              <div className="text-center bg-white bg-opacity-10 rounded-lg p-4">
                <p className="text-sm text-emerald-100 font-semibold mb-2">Premium Annual</p>
                <p className="text-2xl font-bold line-through opacity-75">$119.40</p>
                <p className="text-3xl font-bold text-white">$99/year</p>
                <p className="text-sm text-emerald-100">Just $8.25/month</p>
              </div>
            </div>

            <a
              href="https://app.myfamilyrecipekeeper.com/signup?plan=annual"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-emerald-600 bg-white hover:bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Claim 2 Months Free
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
