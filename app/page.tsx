export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Grandma's Recipes Deserve Better Than a Shoebox
          </h1>

          <p className="text-xl text-gray-700 mb-8">
            Digitize, preserve, and share your family's handwritten recipes before it's too late
          </p>

          <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Landing Page Structure Ready
            </h2>
            <p className="text-gray-600 mb-4">
              Next.js 14 project initialized with App Router, TypeScript, and Tailwind CSS
            </p>
            <p className="text-sm text-gray-500">
              Ready to build the full landing page using the Recipe Keeper context library
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Multi-Image OCR</h3>
              <p className="text-gray-600 text-sm">
                Capture both sides of recipe cards with advanced AI technology
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Family Sharing</h3>
              <p className="text-gray-600 text-sm">
                Everyone gets access to family recipes, no more fighting over cards
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Free Forever</h3>
              <p className="text-gray-600 text-sm">
                Start with 50 recipes free, upgrade to unlimited for $4.99/month
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
