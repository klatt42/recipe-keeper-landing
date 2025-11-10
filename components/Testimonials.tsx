export default function Testimonials() {
  const testimonials = [
    {
      quote: "My grandmother passed away in 2018. I thought I'd saved all her recipes, but I missed one — her famous Christmas fudge. My aunt had it on a torn napkin. I photographed it with Recipe Keeper just in time. She passed 3 months later. That napkin would be gone now. The recipe lives on.",
      author: "Jennifer M.",
      location: "Dallas, TX",
      image: "👵",
      highlight: "Saved Grandma's last recipe",
    },
    {
      quote: "I digitized my mom's entire recipe collection. At our family reunion, I invited all 12 cousins to the digital cookbook. Now everyone is adding their own recipes. We have 4 generations cooking together through this app. My mother cried happy tears.",
      author: "David L.",
      location: "Portland, OR",
      image: "👨‍👩‍👧‍👦",
      highlight: "4 generations connected",
    },
    {
      quote: "Our house flooded in 2023. I lost almost everything. But my family recipes? All safe in Recipe Keeper. I was cooking Grandma's pot roast for my kids 3 days after the flood, from my phone at the hotel. Best decision I ever made.",
      author: "Patricia S.",
      location: "Houston, TX",
      image: "💪",
      highlight: "Survived a flood",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Families. Real Stories. Real Recipes Saved.
          </h2>
          <p className="text-xl text-gray-700">
            These families acted before it was too late. Their recipes are safe forever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Quote Icon */}
              <svg
                className="w-10 h-10 text-amber-600 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Testimonial */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Highlight Badge */}
              <div className="inline-block bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                ✓ {testimonial.highlight}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
                10,000+
              </p>
              <p className="text-gray-700 font-semibold">
                Families Preserving Recipes
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
                150,000+
              </p>
              <p className="text-gray-700 font-semibold">
                Recipes Saved Forever
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
                98%
              </p>
              <p className="text-gray-700 font-semibold">
                Would Recommend to Family
              </p>
            </div>
          </div>
        </div>

        {/* Social CTA */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join 10,000+ Families Preserving Their Heritage
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Start your success story today. Free forever for 50 recipes.
          </p>
          <a
            href="https://app.myfamilyrecipekeeper.com/signup"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Preserve Like They Did
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
