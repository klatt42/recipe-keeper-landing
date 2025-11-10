export default function VisualDemo() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-800 text-sm font-bold px-4 py-2 rounded-full mb-4">
              SEE IT IN ACTION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From Faded Card to Forever Digital
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Watch how our multi-image OCR captures <strong>both sides</strong> of your recipe cards,
              preserving every word, every note, every memory.
            </p>
          </div>

          {/* Before/After Demo */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* BEFORE - Handwritten Recipe Cards */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg font-bold text-lg">
                  BEFORE
                </div>
                <p className="text-gray-600 font-semibold">Fading away in a shoebox...</p>
              </div>

              {/* Card Front */}
              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 shadow-lg transform rotate-1 hover:rotate-0 transition-transform">
                <div className="bg-white rounded-lg p-6 shadow-inner">
                  <div className="border-b-2 border-gray-300 mb-4 pb-2">
                    <div className="font-handwriting text-2xl text-gray-700 mb-2" style={{ fontFamily: 'cursive' }}>
                      Grandma's Apple Pie
                    </div>
                    <div className="text-sm text-gray-500 italic">Est. 1962</div>
                  </div>

                  <div className="space-y-3 text-gray-600 opacity-70" style={{ fontFamily: 'cursive' }}>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-600">•</span>
                      <p className="text-sm">6 cups sliced apples</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-600">•</span>
                      <p className="text-sm">3/4 cup sugar</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-600">•</span>
                      <p className="text-sm">2 tbsp flour</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-600">•</span>
                      <p className="text-sm">1 tsp cinnamon...</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-400 italic">Card is yellowing, ink fading...</p>
                  </div>
                </div>
              </div>

              {/* Card Back */}
              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform ml-8">
                <div className="bg-white rounded-lg p-6 shadow-inner">
                  <div className="text-sm text-gray-600 opacity-70 space-y-2" style={{ fontFamily: 'cursive' }}>
                    <p className="font-semibold text-emerald-700">Notes from Grandma:</p>
                    <p className="italic">"Use the good butter!"</p>
                    <p className="italic">"Don't overmix the crust"</p>
                    <p className="italic">"Serve warm with vanilla ice cream"</p>
                    <p className="text-xs text-gray-400 mt-4">~ Written in her own hand, 1962</p>
                  </div>
                </div>
              </div>

              <p className="text-center text-red-600 font-semibold flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Risk: One spill away from being lost forever
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-white rounded-full p-4 shadow-xl border-4 border-emerald-500">
                <svg className="w-12 h-12 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* AFTER - Digitized in App */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold text-lg">
                  AFTER
                </div>
                <p className="text-gray-600 font-semibold">Preserved forever in the cloud ✓</p>
              </div>

              {/* Digital Recipe View */}
              <div className="bg-white border-2 border-green-500 rounded-xl shadow-2xl overflow-hidden">
                {/* App Header */}
                <div className="bg-emerald-600 text-white px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">My Family Recipe Keeper</span>
                  </div>
                  <div className="flex gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Recipe Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Grandma's Apple Pie
                    </h3>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">✓ Both sides captured</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Est. 1962</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Ingredients</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600">✓</span>
                        <span>6 cups sliced apples</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600">✓</span>
                        <span>3/4 cup sugar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600">✓</span>
                        <span>2 tbsp flour</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600">✓</span>
                        <span>1 tsp cinnamon</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-4">
                    <h4 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      Notes from Grandma (from back of card)
                    </h4>
                    <ul className="space-y-1 text-sm text-emerald-800">
                      <li>"Use the good butter!"</li>
                      <li>"Don't overmix the crust"</li>
                      <li>"Serve warm with vanilla ice cream"</li>
                    </ul>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <button className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-emerald-700 transition-colors">
                      Start Cooking
                    </button>
                    <button className="px-4 py-2 border-2 border-gray-300 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors">
                      Share
                    </button>
                  </div>
                </div>

                {/* Cloud backup indicator */}
                <div className="bg-green-50 border-t-2 border-green-200 px-6 py-3 flex items-center justify-center gap-2 text-sm text-green-700 font-semibold">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                  </svg>
                  Backed up to cloud • Accessible from any device • Shared with family
                </div>
              </div>

              <p className="text-center text-green-600 font-semibold flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Safe forever. Fire-proof. Flood-proof. Loss-proof.
              </p>
            </div>
          </div>

          {/* Key Benefits Callout */}
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              🏆 The Only App That Captures BOTH Sides of Recipe Cards
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <div className="text-4xl mb-3">📸</div>
                <h4 className="font-bold mb-2">Multi-Image OCR</h4>
                <p className="text-sm text-emerald-50">Front, back, and notes — nothing is lost</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <div className="text-4xl mb-3">☁️</div>
                <h4 className="font-bold mb-2">Cloud Backup</h4>
                <p className="text-sm text-emerald-50">Automatically synced and protected forever</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6">
                <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
                <h4 className="font-bold mb-2">Family Sharing</h4>
                <p className="text-sm text-emerald-50">Everyone gets access instantly</p>
              </div>
            </div>

            <a
              href="https://app.myfamilyrecipekeeper.com/signup"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-emerald-600 bg-white hover:bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 mt-8"
            >
              Try Multi-Image OCR Free
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
