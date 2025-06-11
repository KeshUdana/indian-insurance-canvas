
import { ArrowRight, Shield, Clock, Star, Phone, Calendar, CheckCircle, Award, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Protection",
      description: "25+ years of reliable insurance services with industry-leading security standards"
    },
    {
      icon: Clock,
      title: "Quick Claims",
      description: "Fast-track claim settlements with digital processing in under 48 hours"
    },
    {
      icon: Star,
      title: "Award Winning",
      description: "Recognized as India's Most Trusted Insurance Brand for 3 consecutive years"
    }
  ];

  const stats = [
    { number: "50L+", label: "Customers Protected" },
    { number: "99.2%", label: "Claim Settlement Ratio" },
    { number: "25+", label: "Years of Excellence" },
    { number: "500+", label: "Branch Network" }
  ];

  const products = [
    {
      title: "Health Insurance",
      description: "Comprehensive health coverage with cashless treatment at 10,000+ hospitals",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      price: "Starting from ₹199/month",
      features: ["Cashless Treatment", "Pre & Post Hospitalization", "No Room Rent Limit"]
    },
    {
      title: "Life Insurance",
      description: "Secure your family's future with our comprehensive life insurance solutions",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop",
      price: "Starting from ₹150/month",
      features: ["Tax Benefits", "Investment Returns", "Accidental Death Benefit"]
    },
    {
      title: "Motor Insurance",
      description: "Complete vehicle protection with zero depreciation and roadside assistance",
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=500&h=300&fit=crop",
      price: "Starting from ₹125/month",
      features: ["Zero Depreciation", "24/7 Roadside Assistance", "Instant Claims"]
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      designation: "Software Engineer",
      location: "Mumbai",
      text: "SecureLife's health insurance saved my family during a medical emergency. The cashless facility worked seamlessly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Rajesh Kumar",
      designation: "Business Owner",
      location: "Delhi",
      text: "Outstanding customer service and quick claim settlement. Highly recommend their comprehensive insurance plans.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Anita Patel",
      designation: "Teacher",
      location: "Bangalore",
      text: "Affordable premiums with excellent coverage. Perfect insurance solution for middle-class families like ours.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-white">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <Award className="w-4 h-4 mr-2" />
                  India's Most Trusted Insurance
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Secure Your
                  <span className="block text-yellow-400"> Tomorrow </span>
                  Today
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                  Comprehensive insurance solutions designed for Indian families. 
                  Protect what matters most with our award-winning insurance plans.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  1800-123-456
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">{stat.number}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=500&fit=crop" 
                  alt="Family protection" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-3 rounded-full">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">50L+ Indians</p>
                      <p className="text-gray-600">Trust SecureLife</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why SecureLife</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Insurance Built for <span className="text-blue-600">Modern India</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine traditional values with cutting-edge technology to deliver 
              insurance solutions that truly protect what matters most to you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-3">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-lg leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Products</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Insurance Plans for <span className="text-blue-600">Every Need</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From health to life, motor to home - we've got comprehensive coverage 
              options designed for every stage of your life journey.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-500 text-black font-semibold">
                      {product.price}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-bold">{product.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Customer Stories</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted by <span className="text-blue-600">Millions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have experienced our 
              exceptional service and comprehensive protection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 text-base italic leading-relaxed">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.designation}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge className="bg-white/20 text-white border-white/30">
              <TrendingUp className="w-4 h-4 mr-2" />
              Get Started Today
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Secure Your <span className="text-yellow-400">Future?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get a personalized insurance quote in just 2 minutes. No hidden charges, 
              no paperwork hassles. Join millions who trust SecureLife.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-10 py-4 text-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Get Free Quote Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 px-10 py-4 text-lg font-semibold">
                <Users className="mr-2 h-5 w-5" />
                Talk to Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
