
import { Award, Users, TrendingUp, Heart, Shield, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const stats = [
    { icon: Users, number: "50L+", label: "Customers Protected" },
    { icon: TrendingUp, number: "99%", label: "Claim Settlement Ratio" },
    { icon: Award, number: "25+", label: "Years of Experience" },
    { icon: Shield, number: "₹1000Cr+", label: "Claims Settled" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make is centered around our customers' well-being and satisfaction."
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "We build lasting relationships through transparent processes and honest communication."
    },
    {
      icon: Clock,
      title: "Swift Service",
      description: "Quick claim processing and responsive customer service when you need it most."
    }
  ];

  const team = [
    {
      name: "Rajesh Gupta",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      experience: "25+ years in insurance industry"
    },
    {
      name: "Priya Sharma",
      position: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b372?w=300&h=300&fit=crop&crop=face",
      experience: "15+ years in fintech and digital transformation"
    },
    {
      name: "Amit Patel",
      position: "Head of Claims",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      experience: "20+ years in claims management"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About SecureLife Insurance
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Since 1995, we've been India's trusted insurance partner, protecting families and 
                businesses with comprehensive coverage solutions. Our commitment to excellence and 
                customer satisfaction has made us a leader in the insurance industry.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600">50L+</h3>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-600">99%</h3>
                  <p className="text-gray-600">Claim Settlement</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop" 
                alt="Our team" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900">{stat.number}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-xl text-gray-600">
                A journey of trust, innovation, and commitment to protecting what matters most
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Beginning (1995)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    SecureLife Insurance was founded with a simple mission: to make quality insurance 
                    accessible to every Indian family. Starting with just 10 employees and a dream 
                    to revolutionize insurance in India.
                  </p>
                </div>
                <div className="bg-blue-100 h-48 rounded-lg flex items-center justify-center">
                  <Users className="h-16 w-16 text-blue-600" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-green-100 h-48 rounded-lg flex items-center justify-center md:order-1">
                  <TrendingUp className="h-16 w-16 text-green-600" />
                </div>
                <div className="md:order-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth & Innovation (2000-2010)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We expanded across India, introduced digital-first processes, and became the first 
                    insurance company to offer completely paperless policies. Our customer base grew 
                    to over 10 lakh satisfied policyholders.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Revolution (2010-Present)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Leading the digital transformation in insurance with AI-powered claim processing, 
                    instant policy issuance, and 24/7 customer support. Today, we protect over 50 lakh 
                    customers with industry-leading claim settlement ratios.
                  </p>
                </div>
                <div className="bg-purple-100 h-48 rounded-lg flex items-center justify-center">
                  <Shield className="h-16 w-16 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide us in everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals leading SecureLife into the future
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                  />
                  <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                  <p className="text-blue-600 font-medium">{member.position}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
