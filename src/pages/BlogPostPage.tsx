import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

const BlogPostPage = () => {
  const { id } = useParams();
  
  const blogPosts = [
    {
      id: 1,
      title: 'Why Staying in is the New Going Out',
      excerpt: "'Staying in' has become the new 'going out' to an extent so investing in your property makes even more sense. Discover how creating comfortable living spaces at home can enhance your lifestyle and add value to your property.",
      content: `<div class="prose prose-lg max-w-none">
        <p>The trend of 'staying in' has revolutionised how we think about our homes. With more people choosing to entertain at home, invest in home improvements, and create comfortable living spaces, the demand for quality windows, doors, and conservatories has never been higher.</p>
        
        <h3>Creating the Perfect Entertainment Space</h3>
        <p>A well-designed conservatory or orangery can transform your home into the perfect entertaining space, allowing you to enjoy the outdoors while staying comfortable indoors. From hosting dinner parties to relaxing with family, these spaces offer year-round enjoyment and significantly increase your property value.</p>
        
        <h3>The Benefits of Home Investment</h3>
        <ul>
          <li><strong>Increased Property Value:</strong> Quality home improvements can add 10-15% to your property value</li>
          <li><strong>Enhanced Lifestyle:</strong> More space for family activities and entertaining</li>
          <li><strong>Energy Efficiency:</strong> Modern windows and doors reduce heating costs</li>
          <li><strong>Year-Round Use:</strong> Properly insulated conservatories are comfortable in all seasons</li>
        </ul>
        
        <h3>Design Considerations</h3>
        <p>When planning your home entertainment space, consider factors like natural light, heating, and furniture placement. Our expert team can help you design the perfect space that meets your family's specific needs.</p>
        
        <blockquote>
          <p>"Investing in your home isn't just about the financial return – it's about creating a space where memories are made." - Windows by Choice Design Team</p>
        </blockquote>
        
        <p>Whether you're considering a Victorian conservatory for traditional elegance or a modern orangery for contemporary style, the key is choosing a design that complements your home and lifestyle.</p>
      </div>`,
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
      content: `<div class="prose prose-lg max-w-none">
        <p>We're excited to introduce our completely redesigned website, featuring improved navigation, detailed product galleries, and enhanced customer resources. While our digital presence has evolved, our core values remain unchanged: delivering exceptional quality windows, doors, and conservatories with the same personal service our customers have trusted for over 35 years.</p>
        
        <h3>What's New on Our Website</h3>
        <ul>
          <li><strong>Enhanced Product Galleries:</strong> High-quality images showcasing our installations</li>
          <li><strong>Improved Navigation:</strong> Easy-to-find information about all our services</li>
          <li><strong>Customer Resources:</strong> Detailed guides and planning information</li>
          <li><strong>Mobile Optimised:</strong> Perfect viewing experience on all devices</li>
          <li><strong>Quick Quote System:</strong> Faster, more efficient quote requests</li>
        </ul>
        
        <h3>Our Unchanged Commitment</h3>
        <p>Despite our digital transformation, you'll still receive the same expert advice and professional installation that has made us a Which? Trusted Trader. Our family-run approach means every customer receives personal attention from initial consultation through to aftercare.</p>
        
        <h3>New Features for Better Service</h3>
        <p>The new site makes it easier to:</p>
        <ul>
          <li>Browse our extensive product range</li>
          <li>Read authentic customer testimonials</li>
          <li>Request detailed quotes</li>
          <li>Access technical specifications</li>
          <li>Schedule consultations</li>
        </ul>
        
        <p>We believe this enhanced digital experience will help you make informed decisions about your home improvement projects while maintaining the personal touch that sets us apart.</p>
      </div>`,
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
      content: `<div class="prose prose-lg max-w-none">
        <p>Modern window technology has revolutionised home energy efficiency. Our A+ rated UPVC and aluminium windows feature advanced double and triple glazing systems that can reduce heat loss by up to 30%. With energy costs rising, homeowners are discovering that window replacement is one of the most cost-effective ways to improve their home's thermal performance.</p>
        
        <h3>Advanced Glass Technology</h3>
        <p>Today's energy-efficient windows incorporate several cutting-edge technologies:</p>
        
        <h4>Low-E Coatings</h4>
        <p>Low-emissivity coatings are microscopically thin layers applied to glass that reflect heat back into your home while allowing natural light to pass through. This technology can reduce heat loss by up to 50% compared to standard glass.</p>
        
        <h4>Argon Gas Filling</h4>
        <p>The space between glass panes is filled with argon gas, which is denser than air and provides superior insulation. This enhancement significantly reduces heat transfer and improves overall thermal performance.</p>
        
        <h4>Warm Edge Spacers</h4>
        <p>Advanced spacer materials reduce heat transfer around the edge of the glazing unit, eliminating cold spots and preventing condensation.</p>
        
        <h3>Real-World Savings</h3>
        <p>Our customers typically see:</p>
        <ul>
          <li><strong>20-30% reduction</strong> in heating bills</li>
          <li><strong>Improved comfort</strong> with fewer drafts and cold spots</li>
          <li><strong>Reduced condensation</strong> and improved air quality</li>
          <li><strong>Better noise insulation</strong> for a quieter home environment</li>
        </ul>
        
        <h3>Triple Glazing Benefits</h3>
        <p>For maximum energy efficiency, triple glazing offers even greater benefits, particularly in colder climates or for homes facing north. The additional glass layer provides:</p>
        <ul>
          <li>Superior thermal insulation</li>
          <li>Enhanced sound reduction</li>
          <li>Improved security</li>
          <li>Reduced UV penetration protecting furnishings</li>
        </ul>
        
        <p>Contact our energy efficiency specialists to learn how new windows can transform your home's comfort and reduce your energy costs.</p>
      </div>`,
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
      content: `<div class="prose prose-lg max-w-none">
        <p>Most conservatories can be built under Permitted Development Rights, meaning no planning application is required. However, there are specific size and location restrictions you need to be aware of. Understanding these regulations can save time, money, and potential complications with your project.</p>
        
        <h3>Permitted Development Rights</h3>
        <p>Under current regulations, you can build a conservatory without planning permission if it meets these criteria:</p>
        
        <h4>Size Restrictions</h4>
        <ul>
          <li><strong>Detached houses:</strong> Single-storey rear extensions up to 6 metres</li>
          <li><strong>Semi-detached and terraced:</strong> Extensions up to 4 metres</li>
          <li><strong>Height restrictions:</strong> Maximum 4 metres, or 3 metres within 2 metres of a boundary</li>
          <li><strong>Coverage:</strong> Must not cover more than 50% of garden area</li>
        </ul>
        
        <h4>Location Requirements</h4>
        <ul>
          <li>Must be at the rear of the property</li>
          <li>Cannot extend beyond the rear wall by more than the permitted distance</li>
          <li>Must be single storey only</li>
          <li>No balconies, verandas, or raised platforms</li>
        </ul>
        
        <h3>When Planning Permission is Required</h3>
        <p>You'll need planning permission if:</p>
        <ul>
          <li>Your extension exceeds permitted development limits</li>
          <li>Your property is listed or in a conservation area</li>
          <li>You live in a national park or Area of Outstanding Natural Beauty</li>
          <li>Your property has already been extended under permitted development</li>
        </ul>
        
        <h3>Building Regulations</h3>
        <p>While planning permission may not be needed, Building Regulations approval is typically required for conservatories. This ensures:</p>
        <ul>
          <li><strong>Structural safety:</strong> Proper foundations and structural integrity</li>
          <li><strong>Energy efficiency:</strong> Compliance with thermal performance standards</li>
          <li><strong>Electrical safety:</strong> Safe installation of lighting and power</li>
          <li><strong>Drainage:</strong> Proper connection to existing drainage systems</li>
        </ul>
        
        <h3>Our Planning Service</h3>
        <p>At Windows by Choice, we handle all planning and building regulation applications. Our service includes:</p>
        <ul>
          <li>Initial site assessment</li>
          <li>Preparation of technical drawings</li>
          <li>Submission of applications</li>
          <li>Liaison with local authority</li>
          <li>Ensuring full compliance throughout construction</li>
        </ul>
        
        <p>Don't let planning concerns delay your dream conservatory. Contact us for expert guidance tailored to your specific situation.</p>
      </div>`,
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
      content: `<div class="prose prose-lg max-w-none">
        <p>Home security has never been more important, and modern door technology offers sophisticated protection. Our composite and UPVC doors feature multi-point locking systems that secure the door at several points along the frame, making forced entry extremely difficult.</p>
        
        <h3>Multi-Point Locking Systems</h3>
        <p>Unlike traditional single-point locks, modern doors feature advanced locking mechanisms that engage at multiple points:</p>
        <ul>
          <li><strong>Top and bottom bolts:</strong> Secure the door at multiple height points</li>
          <li><strong>Central deadlock:</strong> Primary locking mechanism with anti-drill protection</li>
          <li><strong>Hook locks:</strong> Additional security points that hook into the frame</li>
          <li><strong>Compression bolts:</strong> Pull the door tight against weather seals</li>
        </ul>
        
        <h3>Cylinder Lock Technology</h3>
        <p>Modern doors use euro-cylinder locks with anti-snap technology:</p>
        
        <h4>Anti-Snap Cylinders</h4>
        <p>These specially designed cylinders break at predetermined points if attacked, leaving the locking mechanism intact and the door secure. Features include:</p>
        <ul>
          <li>Reinforced internal structure</li>
          <li>Anti-drill pins</li>
          <li>Anti-pick technology</li>
          <li>British Standard approval</li>
        </ul>
        
        <h3>Door Construction Security</h3>
        <p>The door itself incorporates multiple security features:</p>
        
        <h4>Composite Doors</h4>
        <ul>
          <li><strong>Steel reinforcement:</strong> Internal steel mesh for impact resistance</li>
          <li><strong>Solid timber core:</strong> Provides strength and insulation</li>
          <li><strong>GRP skin:</strong> Durable, weather-resistant outer layer</li>
          <li><strong>Multi-layer construction:</strong> Multiple materials for maximum strength</li>
        </ul>
        
        <h4>UPVC Doors</h4>
        <ul>
          <li><strong>Steel reinforcement:</strong> Internal steel reinforcement in frame and door</li>
          <li><strong>Multi-chamber design:</strong> Provides strength and thermal efficiency</li>
          <li><strong>Laminated glass options:</strong> Difficult to break, holds together if damaged</li>
        </ul>
        
        <h3>Secured by Design</h3>
        <p>Many of our doors achieve Secured by Design certification, the official police security initiative. This accreditation ensures:</p>
        <ul>
          <li>Independent testing to rigorous standards</li>
          <li>Police recognition for crime prevention</li>
          <li>Insurance benefits in many cases</li>
          <li>Peace of mind for homeowners</li>
        </ul>
        
        <h3>Smart Security Integration</h3>
        <p>Modern doors can integrate with smart home security systems:</p>
        <ul>
          <li><strong>Smart locks:</strong> Keyless entry with smartphone control</li>
          <li><strong>Video doorbells:</strong> See and speak to visitors remotely</li>
          <li><strong>Security cameras:</strong> Monitor entry points 24/7</li>
          <li><strong>Alarm integration:</strong> Connect to existing security systems</li>
        </ul>
        
        <p>Protect your family and property with doors that combine traditional security with modern technology. Contact our security specialists for expert advice on the best solution for your home.</p>
      </div>`,
      author: 'Security Specialist',
      date: '2024-10-05',
      category: 'Home Security',
      image: '/images/doors/composite-doors-1.jpg',
      readTime: '5 min read'
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || '1'));

  if (!post) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${post.image}')`
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
            
            <div className="mb-6">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-800 prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-800 prose-blockquote:border-blue-600 prose-blockquote:text-slate-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get expert advice and a free quote for your home improvement project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:07774604190"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
            >
              Call 07774 604 190
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;