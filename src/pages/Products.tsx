
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, Car, Home, Building, Check, Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("health");

  const categories = [
    { id: "health", name: "Health Insurance", icon: Heart },
    { id: "life", name: "Life Insurance", icon: Shield },
    { id: "motor", name: "Motor Insurance", icon: Car },
    { id: "home", name: "Home Insurance", icon: Home },
    { id: "business", name: "Business Insurance", icon: Building }
  ];

  const products = {
    health: [
      {
        name: "SecureHealth Basic",
        price: "₹5,000",
        coverage: "₹5 Lakhs",
        features: ["Cashless treatment", "Pre-post hospitalization", "Room rent coverage", "Ambulance coverage"],
        popular: false,
        description: "Perfect for individuals seeking basic health coverage"
      },
      {
        name: "SecureHealth Premium",
        price: "₹12,000",
        coverage: "₹10 Lakhs",
        features: ["All Basic features", "Maternity coverage", "Day care procedures", "No room rent limit", "Wellness benefits"],
        popular: true,
        description: "Comprehensive health coverage for families"
      },
      {
        name: "SecureHealth Super",
        price: "₹25,000",
        coverage: "₹25 Lakhs",
        features: ["All Premium features", "International coverage", "Organ transplant", "Cancer care", "Mental health coverage"],
        popular: false,
        description: "Ultimate health protection with global coverage"
      }
    ],
    life: [
      {
        name: "SecureLife Term",
        price: "₹3,000",
        coverage: "₹50 Lakhs",
        features: ["Pure term insurance", "Tax benefits", "Accidental death benefit", "Flexible premium payment"],
        popular: false,
        description: "Maximum coverage at minimal cost"
      },
      {
        name: "SecureLife Invest",
        price: "₹15,000",
        coverage: "₹25 Lakhs",
        features: ["Life coverage + Investment", "Guaranteed returns", "Maturity benefits", "Loan facility"],
        popular: true,
        description: "Life insurance with investment benefits"
      },
      {
        name: "SecureLife Pension",
        price: "₹20,000",
        coverage: "₹30 Lakhs",
        features: ["Retirement planning", "Annuity options", "Tax benefits", "Spouse coverage"],
        popular: false,
        description: "Secure your retirement with guaranteed income"
      }
    ],
    motor: [
      {
        name: "Third Party",
        price: "₹2,500",
        coverage: "Unlimited",
        features: ["Legal compliance", "Third party liability", "Personal accident cover", "24/7 support"],
        popular: false,
        description: "Mandatory coverage as per Motor Vehicle Act"
      },
      {
        name: "Comprehensive",
        price: "₹8,500",
        coverage: "IDV Based",
        features: ["Own damage cover", "Third party liability", "Zero depreciation", "Engine protection", "Roadside assistance"],
        popular: true,
        description: "Complete protection for your vehicle"
      },
      {
        name: "Super Comprehensive",
        price: "₹15,000",
        coverage: "Enhanced IDV",
        features: ["All Comprehensive features", "Return to invoice", "Key replacement", "Emergency transport", "Annual maintenance"],
        popular: false,
        description: "Premium protection with added benefits"
      }
    ],
    home: [
      {
        name: "Home Basic",
        price: "₹4,000",
        coverage: "₹10 Lakhs",
        features: ["Structure protection", "Fire coverage", "Theft protection", "Natural disasters"],
        popular: false,
        description: "Essential protection for your home"
      },
      {
        name: "Home Complete",
        price: "₹8,000",
        coverage: "₹25 Lakhs",
        features: ["All Basic features", "Contents insurance", "Temporary accommodation", "Liability coverage"],
        popular: true,
        description: "Comprehensive home and contents protection"
      },
      {
        name: "Home Premium",
        price: "₹15,000",
        coverage: "₹50 Lakhs",
        features: ["All Complete features", "Valuables coverage", "Home appliances", "Renovation coverage"],
        popular: false,
        description: "Ultimate home protection with premium benefits"
      }
    ],
    business: [
      {
        name: "Business Starter",
        price: "₹10,000",
        coverage: "₹25 Lakhs",
        features: ["General liability", "Property protection", "Business interruption", "Cyber security"],
        popular: false,
        description: "Essential coverage for small businesses"
      },
      {
        name: "Business Pro",
        price: "₹25,000",
        coverage: "₹1 Crore",
        features: ["All Starter features", "Employee coverage", "Professional indemnity", "Product liability"],
        popular: true,
        description: "Comprehensive protection for growing businesses"
      },
      {
        name: "Business Enterprise",
        price: "₹50,000",
        coverage: "₹5 Crores",
        features: ["All Pro features", "Directors & Officers", "International coverage", "Crisis management"],
        popular: false,
        description: "Enterprise-level protection for large businesses"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Insurance Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive insurance solutions designed for every aspect of your life. 
            Choose from our range of products tailored for Indian families and businesses.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <div className="mb-12">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto p-1">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    <category.icon className="h-6 w-6" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {Object.entries(products).map(([categoryId, categoryProducts]) => (
              <TabsContent key={categoryId} value={categoryId}>
                <div className="grid md:grid-cols-3 gap-8">
                  {categoryProducts.map((product, index) => (
                    <Card key={index} className={`relative hover:shadow-xl transition-shadow duration-300 ${product.popular ? 'border-blue-500 border-2' : ''}`}>
                      {product.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-blue-600 text-white px-4 py-1">
                            <Star className="h-3 w-3 mr-1" />
                            Most Popular
                          </Badge>
                        </div>
                      )}
                      
                      <CardHeader className="text-center pb-4">
                        <CardTitle className="text-2xl font-bold text-gray-900">{product.name}</CardTitle>
                        <CardDescription className="text-gray-600">{product.description}</CardDescription>
                        <div className="pt-4">
                          <div className="text-3xl font-bold text-blue-600">{product.price}</div>
                          <div className="text-sm text-gray-600">per year</div>
                          <div className="text-lg font-semibold text-gray-900 mt-2">Coverage: {product.coverage}</div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        <div className="space-y-3">
                          {product.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-3 pt-4">
                          <Button className={`w-full text-white ${product.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'}`}>
                            Get Quote Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                          <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
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

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Insurance Products?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer the most comprehensive and affordable insurance solutions in India
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">99% Claim Settlement</h3>
              <p className="text-gray-600">Industry-leading claim settlement ratio with quick processing</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cashless Network</h3>
              <p className="text-gray-600">10,000+ network hospitals across India for cashless treatment</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer service and emergency assistance</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No Medical Tests</h3>
              <p className="text-gray-600">Easy enrollment with minimal documentation for most plans</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Choosing the Right Plan?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our insurance experts are here to help you find the perfect coverage for your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Talk to Expert
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
