import { ArrowRight, Calendar, User } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Why Staying in is the New Going Out',
      excerpt: "'Staying in' has become the new 'going out' to an extent so investing in your property makes even more sense. Discover how creating comfortable living spaces at home can enhance your lifestyle and add value to your property.",
      content: "The trend of 'staying in' has revolutionised how we think about our homes. With more people choosing to entertain at home, invest in home improvements, and create comfortable living spaces, the demand for quality windows, doors, and conservatories has never been higher. A well-designed conservatory or orangery can transform your home into the perfect entertaining space, allowing you to enjoy the outdoors while staying comfortable indoors. From hosting dinner parties to relaxing with family, these spaces offer year-round enjoyment and significantly increase your property value.",
      author: 'Windows by Choice Team',
      date: '2024-12-01',
      category: 'Home Lifestyle',
      image: '/images/conservatories/victorian-conservatories-hitchin-2.jpg',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'New Web Launch but the Same Quality Service',
      excerpt: 'Welcome to the revamped website but remember that one thing remains the same, the quality of the service on offer. Explore our enhanced digital experience while maintaining our commitment to excellence.',
      content: "We're excited to introduce our completely redesigned website, featuring improved navigation, detailed product galleries, and enhanced customer resources. While our digital presence has evolved, our core values remain unchanged: delivering exceptional quality windows, doors, and conservatories with the same personal service our customers have trusted for over 35 years. The new site makes it easier to explore our products, read customer testimonials, and request quotes, but you'll still receive the same expert advice and professional installation that has made us a Which? Trusted Trader.",
      author: 'Windows by Choice Team',
      date: '2024-11-15',
      category: 'Company News',
      image: '/images/homepage/window-services-hitchin.jpg',
      readTime: '3 min read'
    },
    {
      id: 3,
      title: 'Energy Efficiency: How Modern Windows Can Cut Your Heating Bills',
      excerpt: 'Discover how upgrading to A+ rated windows can reduce your energy consumption by up to 30% and significantly lower your heating bills year-round.',
      content: "Modern window technology has revolutionised home energy efficiency. Our A+ rated UPVC and aluminium windows feature advanced double and triple glazing systems that can reduce heat loss by up to 30%. With energy costs rising, homeowners are discovering that window replacement is one of the most cost-effective ways to improve their home's thermal performance. Features like Low-E coatings, argon gas fills, and thermally broken frames work together to keep your home warmer in winter and cooler in summer, leading to substantial savings on your energy bills.",
      author: 'Technical Team',
      date: '2024-11-01',
      category: 'Energy Efficiency',
      image: '/images/windows/upvc-windows-2.jpg',
      readTime: '7 min read'
    },
    {
      id: 4,
      title: 'Planning Permission for Conservatories: What You Need to Know',
      excerpt: 'Understanding the planning permission requirements for your conservatory project, including permitted development rights and building regulations.',
      content: "Most conservatories can be built under Permitted Development Rights, meaning no planning application is required. However, there are specific size and location restrictions you need to be aware of. For detached houses, single-storey rear extensions can extend up to 6 metres, while semi-detached and terraced properties are limited to 4 metres. The conservatory must not exceed 4 metres in height, or 3 metres if within 2 metres of a boundary. While planning permission may not be needed, Building Regulations approval is typically required, and we handle all applications and ensure full compliance with current standards.",
      author: 'Planning Team',
      date: '2024-10-20',
      category: 'Planning & Regulations',
      image: '/images/conservatories/edwardian-conservatories-hitchin-2.jpg',
      readTime: '6 min read'
    },
    {
      id: 5,
      title: 'Security Features in Modern Doors: Protecting Your Home',
      excerpt: 'Learn about the latest security technologies in composite and UPVC doors, from multi-point locking systems to reinforced frames.',
      content: "Home security has never been more important, and modern door technology offers sophisticated protection. Our composite and UPVC doors feature multi-point locking systems that secure the door at several points along the frame, making forced entry extremely difficult. Advanced features include anti-snap cylinder locks, reinforced steel cores, and laminated glass options for ultimate security. Many of our doors achieve Secured by Design certification, the official police security initiative. Combined with video doorbells and smart lock technology, today's doors offer both traditional security and modern convenience.",
      author: 'Security Specialist',
      date: '2024-10-05',
      category: 'Home Security',
      image: '/images/doors/composite-doors-1.jpg',
      readTime: '5 min read'
    }
  ];

  const categories = ['All', 'Home Lifestyle', 'Company News', 'Energy Efficiency', 'Planning & Regulations', 'Home Security'];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
            News & Expert Tips
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Stay updated with the latest insights, tips, and news about windows, doors, and home improvements from our expert team.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Our Latest Tips
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get expert advice, home improvement tips, and special offers delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;