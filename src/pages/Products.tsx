
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, Car, Home, Building, Check, Star, ArrowRight, Award, Clock, Users, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("health");

  const categories = [
    { id: "health", name: "Health Insurance", icon: Heart, color: "from-red-500 to-pink-600" },
    { id: "life", name: "Life Insurance", icon: Shield, color: "from-blue-500 to-blue-600" },
    { id: "motor", name: "Motor Insurance", icon: Car, color: "from-green-500 to-emerald-600" },
    { id: "home", name: "Home Insurance", icon: Home, color: "from-purple-500 to-violet-600" },
    { id: "business", name: "Business Insurance", icon: Building, color: "from-orange-500 to-amber-600" }
  ];

  const products = {
    health: [
      {
        name: "SecureHealth Basic",
        price: "₹5,999",
        originalPrice: "₹7,999",
        coverage: "₹5 Lakhs",
        features: ["Cashless treatment at 5,000+ hospitals", "Pre-post hospitalization cover", "Day care procedures", "Ambulance coverage", "Health checkups"],
        popular: false,
        description: "Essential health coverage for individuals and small families",
        discount: "25% OFF"
      },
      {
        name: "SecureHealth Premium",
        price: "₹12,999",
        originalPrice: "₹16,999",
        coverage: "₹15 Lakhs",
        features: ["All Basic features", "Maternity coverage", "No room rent limit", "Wellness benefits", "Mental health coverage", "International emergency"],
        popular: true,
        description: "Comprehensive health coverage for modern families",
        discount: "24% OFF"
      },
      {
        name: "SecureHealth Super",
        price: "₹25,999",
        originalPrice: "₹32,999",
        coverage: "₹50 Lakhs",
        features: ["All Premium features", "Global coverage", "Organ transplant cover", "Cancer care specialist", "Personal health manager", "Priority claims"],
        popular: false,
        description: "Ultimate health protection with premium benefits",
        discount: "21% OFF"
      }
    ],
    life: [
      {
        name: "SecureLife Term",
        price: "₹3,999",
        originalPrice: "₹4,999",
        coverage: "₹1 Crore",
        features: ["Pure term insurance", "Tax benefits under 80C", "Accidental death benefit", "Flexible premium payment", "Online policy management"],
        popular: false,
        description: "Maximum life coverage at minimal cost",
        discount: "20% OFF"
      },
      {
        name: "SecureLife Invest",
        price: "₹15,999",
        originalPrice: "₹19,999",
        coverage: "₹50 Lakhs",
        features: ["Life coverage + Investment", "Guaranteed returns", "Maturity benefits", "Loan facility", "Bonus additions"],
        popular: true,
        description: "Life insurance with guaranteed investment returns",
        discount: "20% OFF"
      },
      {
        name: "SecureLife Pension",
        price: "₹20,999",
        originalPrice: "₹25,999",
        coverage: "₹75 Lakhs",
        features: ["Retirement planning", "Immediate/deferred annuity", "Tax benefits", "Spouse coverage", "Inflation protection"],
        popular: false,
        description: "Secure retirement with guaranteed pension income",
        discount: "19% OFF"
      }
    ],
    motor: [
      {
        name: "Third Party",
        price: "₹2,899",
        originalPrice: "₹3,499",
        coverage: "As per Law",
        features: ["Legal compliance", "Third party liability", "Personal accident cover", "24/7 support", "Digital policy"],
        popular: false,
        description: "Mandatory coverage as per Motor Vehicle Act",
        discount: "17% OFF"
      },
      {
        name: "Comprehensive",
        price: "₹8,999",
        originalPrice: "₹11,999",
        coverage: "IDV Based",
        features: ["Own damage cover", "Third party liability", "Zero depreciation", "Engine protection", "Roadside assistance", "Key replacement"],
        popular: true,
        description: "Complete protection for your vehicle",
        discount: "25% OFF"
      },
      {
        name: "Super Comprehensive",
        price: "₹15,999",
        originalPrice: "₹19,999",
        coverage: "Enhanced IDV",
        features: ["All Comprehensive features", "Return to invoice", "Emergency transport", "Annual maintenance", "Tyre protection", "Consumables cover"],
        popular: false,
        description: "Premium protection with exclusive benefits",
        discount: "20% OFF"
      }
    ],
    home: [
      {
        name: "Home Essential",
        price: "₹4,999",
        originalPrice: "₹6,499",
        coverage: "₹15 Lakhs",
        features: ["Structure protection", "Fire & allied perils", "Theft protection", "Natural disasters", "Temporary accommodation"],
        popular: false,
        description: "Basic protection for your home and belongings",
        discount: "23% OFF"
      },
      {
        name: "Home Complete",
        price: "₹8,999",
        originalPrice: "₹11,999",
        coverage: "₹30 Lakhs",
        features: ["All Essential features", "Contents insurance", "Liability coverage", "Home appliances", "Alternative accommodation"],
        popular: true,
        description: "Comprehensive home and contents protection",
        discount: "25% OFF"
      },
      {
        name: "Home Premium",
        price: "₹15,999",
        originalPrice: "₹19,999",
        coverage: "₹75 Lakhs",
        features: ["All Complete features", "Valuables coverage", "Renovation coverage", "Identity theft", "Home office equipment"],
        popular: false,
        description: "Ultimate home protection with premium benefits",
        discount: "20% OFF"
      }
    ],
    business: [
      {
        name: "Business Starter",
        price: "₹12,999",
        originalPrice: "₹16,999",
        coverage: "₹50 Lakhs",
        features: ["General liability", "Property protection", "Business interruption", "Cyber security", "Key person insurance"],
        popular: false,
        description: "Essential coverage for small businesses and startups",
        discount: "24% OFF"
      },
      {
        name: "Business Pro",
        price: "₹28,999",
        originalPrice: "₹35,999",
        coverage: "₹2 Crores",
        features: ["All Starter features", "Employee coverage", "Professional indemnity", "Product liability", "Equipment breakdown"],
        popular: true,
        description: "Comprehensive protection for growing businesses",
        discount: "19% OFF"
      },
      {
        name: "Business Enterprise",
        price: "₹55,999",
        originalPrice: "₹69,999",
        coverage: "₹10 Crores",
        features: ["All Pro features", "Directors & Officers", "International coverage", "Crisis management", "Regulatory compliance"],
        popular: false,
        description: "Enterprise-level protection for large corporations",
        discount: "20% OFF"
      }
    ]
  };

  const benefits = [
    { icon: Shield, title: "99.2% Claim Settlement", description: "Industry-leading claim settlement ratio" },
    { icon: Clock, title: "Quick Processing", description: "Claims processed within 48 hours" },
    { icon: Users, title: "10,000+ Network", description: "Hospitals and service centers nationwide" },
    { icon: Award, title: "Award Winning", description: "Recognized for excellence in insurance" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            <Star className="w-4 h-4 mr-2" />
            Premium Insurance Products
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Choose Your <span className="text-yellow-400">Perfect</span> Protection
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Discover comprehensive insurance solutions designed specifically for Indian families and businesses. 
            Get the protection you need with coverage you can trust.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <div className="mb-12">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto p-2 bg-gray-100">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex flex-col items-center gap-3 p-6 data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg transition-all duration-200"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-md`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-center">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {Object.entries(products).map(([categoryId, categoryProducts]) => (
              <TabsContent key={categoryId} value={categoryId}>
                <div className="grid lg:grid-cols-3 gap-8">
                  {categoryProducts.map((product, index) => (
                    <Card key={index} className={`relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 ${product.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}>
                      {product.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                          <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 text-sm font-semibold shadow-lg">
                            <Star className="h-4 w-4 mr-2" />
                            Most Popular
                          </Badge>
                        </div>
                      )}
                      
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-500 text-white font-semibold">
                          {product.discount}
                        </Badge>
                      </div>

                      <CardHeader className="text-center pb-6 pt-8">
                        <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{product.name}</CardTitle>
                        <CardDescription className="text-gray-600 mb-4">{product.description}</CardDescription>
                        <div className="space-y-2">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-3xl font-bold text-blue-600">{product.price}</span>
                            <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                          </div>
                          <div className="text-sm text-gray-600">per year</div>
                          <div className="text-lg font-semibold text-gray-900 bg-blue-50 py-2 px-4 rounded-lg">
                            Coverage: <span className="text-blue-600">{product.coverage}</span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        <div className="space-y-3">
                          {product.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-3">
                              <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-3 pt-4">
                          <Button className={`w-full text-white font-semibold py-3 ${product.popular ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800' : 'bg-gray-800 hover:bg-gray-900'} shadow-md hover:shadow-lg transition-all`}>
                            Get Quote Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                          <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">
                            Compare Plans
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Why Choose SecureLife</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Insurance That <span className="text-blue-600">Actually Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with India's most trusted insurance provider
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Expert Consultation
          </Badge>
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Help Choosing the <span className="text-yellow-400">Right Plan?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our certified insurance experts are here to help you find the perfect coverage 
            that fits your needs and budget. Get personalized recommendations today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4">
              Talk to Expert
              <Users className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-8 py-4">
              Download Brochure
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
