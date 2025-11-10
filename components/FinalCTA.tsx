export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Don't Let Your Recipes Fade Away
          </h2>

          <p className="text-xl text-gray-700 mb-8">
            Every day you wait, those recipe cards fade a little more. The handwriting gets harder to read.
            The memories get fuzzier.
          </p>

          {/* Emotional hook */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8 max-w-2xl mx-auto">
            <p className="text-2xl font-semibold text-red-700 mb-4">
              "I'll do it someday"
            </p>
            <p className="text-lg text-gray-700 mb-4">
              That's what everyone says. Until Grandma passes. Until the house floods. Until the
              recipe box goes missing in a move.
            </p>
            <p className="text-xl font-bold text-gray-900">
              Then "someday" becomes "never."
            </p>
          </div>

          {/* The ask */}
          <p className="text-2xl font-semibold text-gray-900 mb-8">
            It takes 2 minutes to start. It takes forever to replace what's lost.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://app.myfamilyrecipekeeper.com/signup"
              className="inline-flex items-center px-10 py-5 text-xl font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-110"
            >
              Start Preserving Now (Free)
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Final reassurance */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free forever</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>2 minutes to start</span>
            </div>
          </div>

          {/* Counter urgency */}
          <div className="mt-12 bg-white rounded-lg p-6 max-w-md mx-auto shadow-md">
            <p className="text-sm text-gray-600 mb-2">Your recipes are fading...</p>
            <div className="flex items-center justify-center gap-4 text-3xl font-bold text-red-600">
              <span>⏰</span>
              <span>Start Now</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
