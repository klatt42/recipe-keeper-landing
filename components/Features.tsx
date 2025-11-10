export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      badge: "🏆 HERO FEATURE",
      title: "Capture Both Sides of Recipe Cards",
      subtitle: "Multi-Image OCR (No Other App Does This)",
      description: "Your grandmother wrote notes on the back. Family stories. Cooking tips. \"Use the good butter!\" Other apps only capture one side. We capture EVERYTHING.",
      benefit: "Nothing is lost. Every word, every note, every memory — preserved forever.",
      emotional: "Her voice lives on in the margins.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Share Cookbooks with Your Whole Family",
      subtitle: "Premium Feature - Share with Unlimited Family Members",
      description: "Your sister in California, your brother in Texas, your cousin in Florida — share your cookbooks with everyone. Free members can VIEW shared cookbooks (read-only). Premium members can SHARE their cookbooks and collaborate.",
      benefit: "One person shares, everyone cooks. Upgrade to contribute your own recipes.",
      emotional: "Distance doesn't matter. Recipes connect us.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Make Grandma's Recipes Work for Your Diet",
      subtitle: "AI-Powered Recipe Variations",
      description: "Grandma's pasta uses butter and cream. But you're dairy-free. Or keto. Or vegan. AI adapts the recipe while keeping the soul of the dish intact.",
      benefit: "Keep family traditions alive, even with dietary restrictions.",
      emotional: "Your kids can still taste Grandma's cooking.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Never Guess When to Start Cooking",
      subtitle: "Recipe Timeline (Prep → Cook → Rest)",
      description: "Thanksgiving dinner at 3pm? The timeline shows you when to start each dish so everything finishes together. No more cold sides and overcooked turkey.",
      benefit: "Host with confidence. Everything comes out perfect, at the perfect time.",
      emotional: "You'll look like the hero at every family gathering.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Cook Hands-Free (No Greasy Phone)",
      subtitle: "Quick Cook Mode - Voice Navigation",
      description: "Giant text. Keyboard shortcuts. No need to touch your phone with flour-covered hands. Just follow along step-by-step.",
      benefit: "Focus on cooking, not scrolling. The recipe stays where you can see it.",
      emotional: "Cook like Grandma did — by feel, not by phone.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Solution: Digital Preservation That Actually Works
          </h2>
          <p className="text-xl text-gray-700">
            We built My Family Recipe Keeper specifically for{' '}
            <span className="font-semibold text-emerald-600">handwritten family recipes</span>.
            Not meal planning. Not discovering new recipes. Just preserving yours.
          </p>
        </div>

        {/* Hero Feature - Multi-Image OCR */}
        <div className="max-w-5xl mx-auto mb-16 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 md:p-12 border-2 border-emerald-200 shadow-xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
              {features[0].icon}
            </div>
            <div className="flex-1">
              <div className="inline-block bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                {features[0].badge}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {features[0].title}
              </h3>
              <p className="text-lg text-emerald-700 font-semibold mb-4">
                {features[0].subtitle}
              </p>
            </div>
          </div>

          <div className="space-y-4 text-lg text-gray-700 mb-6">
            <p className="leading-relaxed">
              {features[0].description}
            </p>
            <p className="font-semibold text-gray-900">
              ✓ {features[0].benefit}
            </p>
            <p className="italic text-emerald-700 text-xl font-semibold">
              "{features[0].emotional}"
            </p>
          </div>

          <a
            href="https://app.myfamilyrecipekeeper.com/signup"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Try Multi-Image OCR Free
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Other Features */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.slice(1).map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border-l-4 border-emerald-500"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-emerald-700 font-semibold">
                    {feature.subtitle}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  {feature.description}
                </p>
                <p className="font-semibold text-gray-900">
                  ✓ {feature.benefit}
                </p>
                <p className="italic text-emerald-700 font-semibold">
                  "{feature.emotional}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature CTA */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Start with 25 Recipes Free. Upgrade When You Need More.
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            No credit card required. No bait-and-switch. Just free, forever.
          </p>
          <a
            href="https://app.myfamilyrecipekeeper.com/signup"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Save Your First Recipe (Free)
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
