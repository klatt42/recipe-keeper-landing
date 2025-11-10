export default function PainPoints() {
  const painPoints = [
    {
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Your Recipe Cards Are Falling Apart",
      problem: "That coffee stain on Grandma's apple pie recipe? The torn corner of Mom's chicken soup card? They're not just marks—they're time bombs.",
      agitate: "In 10 years, those cards will be illegible. Can you rewrite them from memory? Exactly as she wrote them? With the little notes in the margins?",
      reality: "Probably not.",
    },
    {
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
      title: "One Fire Away From Losing Everything",
      problem: "Your entire family recipe collection is in one place. A shoebox. A folder. A drawer.",
      agitate: "What happens if there's a fire? A flood? A break-in? Those recipes aren't backed up. They're not insured. They can't be replaced.",
      reality: "When they're gone, they're gone forever.",
    },
    {
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Your Relatives Won't Be Here Forever",
      problem: "Mom is 82. Grandma passed three years ago. Every year, you say \"I'll ask her about that recipe next time.\"",
      agitate: "But what if there is no next time? What if she forgets? What if the recipe cards get lost when she moves to assisted living?",
      reality: "The window is closing. Fast.",
    },
    {
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Your Siblings Don't Have Copies",
      problem: "You have Mom's recipe collection. Your sister keeps asking for copies. Your brother wants to make Grandma's cookies with his kids.",
      agitate: "But making photocopies is a pain. Mailing them is expensive. And what if something happens to you? Then nobody has them.",
      reality: "Your family's recipes should be shared, not hoarded.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Many Recipes Have You Already Lost?
          </h2>
          <p className="text-xl text-gray-700">
            Every family has recipes that are <span className="font-semibold text-red-600">disappearing right now</span>.
            Not someday. Today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-500"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {point.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  {point.problem}
                </p>
                <p className="leading-relaxed">
                  {point.agitate}
                </p>
                <p className="font-semibold text-red-700 italic">
                  {point.reality}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency messaging */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Don't Let "Someday" Turn Into Never
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Every day you wait, those recipe cards fade a little more.
            The handwriting gets harder to read. The memories get fuzzier.
          </p>
          <p className="text-xl font-semibold text-red-700 mb-6">
            Start preserving your family recipes today. It takes 2 minutes.
          </p>
          <a
            href="https://app.myfamilyrecipekeeper.com/signup"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Start Preserving Now (Free)
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
