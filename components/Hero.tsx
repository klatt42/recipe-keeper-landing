export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-amber-50 via-orange-50 to-white pt-20 pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline - Fear-based emotional hook */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Your Grandma's Recipes Deserve Better Than a{' '}
            <span className="text-amber-600 relative">
              Shoebox
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C60 4 120 2 180 4C240 6 280 8 298 10" stroke="#d97706" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          {/* Subheadline - Clarify + calm */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Digitize, preserve, and share your family's handwritten recipes before it's too late.
            <span className="block mt-2 text-gray-600">
              One fire, one flood, one lost shoebox — and they're gone forever.
            </span>
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://app.myfamilyrecipekeeper.com/signup"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Start Preserving (Free Forever)
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            {/* Secondary CTA */}
            <a
              href="#lead-magnet"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-amber-700 bg-white hover:bg-gray-50 rounded-lg border-2 border-amber-600 shadow-md hover:shadow-lg transition-all"
            >
              Get Free Rescue Kit
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-600 mb-12">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free forever (50 recipes)</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>2 minutes to start</span>
            </div>
          </div>

          {/* Visual - Recipe card transformation (placeholder) */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Before */}
                <div className="relative">
                  <div className="absolute -top-4 -left-4 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Fading Away
                  </div>
                  <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 shadow-inner">
                    <div className="space-y-2 opacity-60">
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-300 rounded w-full"></div>
                      <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                      <div className="text-xs text-gray-400 mt-4 italic">Handwritten, 1960s</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-3 text-center">Your current recipe cards</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <svg className="w-12 h-12 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>

                {/* After */}
                <div className="relative">
                  <div className="absolute -top-4 -right-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Preserved Forever
                  </div>
                  <div className="bg-white border-2 border-green-200 rounded-lg p-6 shadow-lg">
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-700 rounded w-full"></div>
                      <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                      <div className="text-xs text-green-600 mt-4 font-semibold">✓ Digitized & Backed Up</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-3 text-center">Safe in the cloud forever</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
