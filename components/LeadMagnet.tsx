'use client'

import { useState } from 'react'

export default function LeadMagnet() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // TODO: Integrate with Resend API + GoHighLevel
      // For now, just simulate success
      await new Promise(resolve => setTimeout(resolve, 1000))

      setStatus('success')
      setMessage('Check your email! Your Recipe Rescue Kit is on the way.')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage('Oops! Something went wrong. Please try again.')
    }
  }

  return (
    <section id="lead-magnet" className="py-20 bg-gradient-to-br from-amber-100 via-orange-100 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left side - Value proposition */}
            <div className="bg-gradient-to-br from-amber-600 to-orange-600 p-8 md:p-12 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-3xl">
                  📦
                </div>
                <div>
                  <div className="bg-white bg-opacity-20 text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                    FREE DOWNLOAD
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Recipe Card Rescue Kit
                  </h3>
                </div>
              </div>

              <p className="text-xl mb-6 text-amber-50">
                The complete guide to preserving family recipes before it's too late.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold">Photography tips</p>
                    <p className="text-sm text-amber-100">How to photograph recipe cards (lighting, angles, equipment)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold">Organization system</p>
                    <p className="text-sm text-amber-100">How to sort recipes before digitizing</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold">Story-capturing prompts</p>
                    <p className="text-sm text-amber-100">"What did Grandma say about this recipe?"</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold">Interview questions</p>
                    <p className="text-sm text-amber-100">50 questions to ask relatives before it's too late</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold">Condition assessment</p>
                    <p className="text-sm text-amber-100">Is your recipe card in danger? Find out.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-30">
                <p className="text-sm font-semibold mb-1">Value: $197</p>
                <p className="text-3xl font-bold">Yours FREE</p>
              </div>
            </div>

            {/* Right side - Email capture form */}
            <div className="p-8 md:p-12">
              <h4 className="text-3xl font-bold text-gray-900 mb-4">
                Get Your Free Guide Now
              </h4>
              <p className="text-gray-700 mb-8">
                Enter your email and we'll send you the Recipe Card Rescue Kit instantly.
                Plus, you'll get access to a free Premium trial.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-colors text-gray-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-6 py-4 text-lg font-semibold text-white bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Download Free Guide
                      <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-green-800 font-semibold">{message}</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-red-800 font-semibold">{message}</p>
                  </div>
                )}
              </form>

              <p className="text-xs text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time. No spam, ever.
              </p>

              {/* Trust badges */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-200">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p className="text-sm text-gray-600">
                  Your information is secure and will never be shared.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Lead Magnets */}
        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h5 className="text-xl font-bold text-gray-900 mb-2">
              📝 Lost Recipe Recovery Template
            </h5>
            <p className="text-gray-600 text-sm mb-4">
              Reconstruct recipes from memory using proven techniques.
            </p>
            <a href="#lead-magnet" className="text-amber-600 hover:text-amber-700 font-semibold text-sm">
              Get This Too →
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h5 className="text-xl font-bold text-gray-900 mb-2">
              🎤 Family Recipe Interview Guide
            </h5>
            <p className="text-gray-600 text-sm mb-4">
              50 questions to capture stories before relatives pass.
            </p>
            <a href="#lead-magnet" className="text-amber-600 hover:text-amber-700 font-semibold text-sm">
              Download Free →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
