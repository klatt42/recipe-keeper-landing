export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-emerald-50 via-green-50 to-white pt-20 pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline - Fear-based emotional hook */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Your Grandma's Recipes Deserve Better Than a{' '}
            <span className="text-emerald-600 relative">
              Shoebox
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C60 4 120 2 180 4C240 6 280 8 298 10" stroke="#10b981" strokeWidth="3" strokeLinecap="round"/>
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
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Start Preserving (Free Forever)
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            {/* Secondary CTA */}
            <a
              href="#lead-magnet"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-emerald-700 bg-white hover:bg-gray-50 rounded-lg border-2 border-emerald-600 shadow-md hover:shadow-lg transition-all"
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
              <span>Free forever (25 recipes)</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>2 minutes to start</span>
            </div>
          </div>

          {/* Visual - Recipe card transformation */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Before - Handwritten Recipe Card */}
                <div className="relative">
                  <div className="absolute -top-3 -left-3 bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg z-10">
                    📄 BEFORE
                  </div>

                  {/* Realistic recipe card mockup */}
                  <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 shadow-xl transform rotate-2 hover:rotate-0 transition-all">
                    <div className="bg-white rounded-md p-5 shadow-inner border border-amber-100">
                      {/* Handwritten style header */}
                      <div className="border-b-2 border-gray-300 mb-4 pb-2">
                        <h4 className="text-xl font-semibold text-gray-700 mb-1" style={{ fontFamily: 'cursive' }}>
                          Grandma's Chocolate Chip Cookies
                        </h4>
                        <p className="text-xs text-gray-400 italic">From kitchen of Ruth, 1978</p>
                      </div>

                      {/* Ingredients in handwriting style */}
                      <div className="space-y-2 mb-4 text-gray-600 opacity-75" style={{ fontFamily: 'cursive' }}>
                        <p className="text-sm">• 2¼ cups flour</p>
                        <p className="text-sm">• 1 cup butter</p>
                        <p className="text-sm">• ¾ cup sugar</p>
                        <p className="text-sm">• 2 eggs</p>
                        <p className="text-sm">• 2 cups chocolate chips</p>
                        <p className="text-xs text-gray-400 mt-3 italic">*Bake 350° for 10 min</p>
                      </div>

                      {/* Wear and tear indicators */}
                      <div className="flex items-center gap-2 text-xs text-red-600 bg-red-50 px-3 py-2 rounded border border-red-200">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold">Fading, stained, at risk</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-gray-600 mt-4 font-semibold">One spill away from being lost forever</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="bg-emerald-600 text-white rounded-full p-4 shadow-2xl">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* After - Digital App View */}
                <div className="relative">
                  <div className="absolute -top-3 -right-3 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg z-10">
                    ✓ AFTER
                  </div>

                  {/* App interface mockup */}
                  <div className="bg-white border-2 border-green-500 rounded-xl shadow-2xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-all">
                    {/* App header */}
                    <div className="bg-emerald-600 text-white px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-semibold">My Recipe Keeper</span>
                      </div>
                      <svg className="w-5 h-5 text-green-200" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                      </svg>
                    </div>

                    {/* Recipe content */}
                    <div className="p-5 bg-gray-50">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">
                        Grandma's Chocolate Chip Cookies
                      </h4>

                      <div className="bg-white rounded-lg p-4 mb-3 shadow-sm">
                        <h5 className="text-xs font-bold text-gray-700 mb-2 uppercase">Ingredients</h5>
                        <div className="space-y-1.5 text-sm text-gray-700">
                          <div className="flex items-center gap-2">
                            <span className="text-green-600">✓</span>
                            <span>2¼ cups flour</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-green-600">✓</span>
                            <span>1 cup butter</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-green-600">✓</span>
                            <span>¾ cup sugar</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-green-600">✓</span>
                            <span>2 eggs, 2 cups chocolate chips</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded p-3">
                        <p className="text-xs font-semibold text-emerald-900 mb-1">👵 Grandma's Note:</p>
                        <p className="text-xs text-emerald-800 italic">"Bake 350° for 10 min"</p>
                      </div>
                    </div>

                    {/* Status bar */}
                    <div className="bg-green-600 text-white px-4 py-2 text-xs font-semibold text-center">
                      ☁️ Backed up • Searchable • Shareable
                    </div>
                  </div>
                  <p className="text-center text-green-600 mt-4 font-semibold">Preserved forever, accessible anywhere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
