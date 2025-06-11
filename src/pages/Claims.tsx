
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FileText, Phone, Clock, CheckCircle, AlertCircle, Upload, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Claims = () => {
  const [claimNumber, setClaimNumber] = useState("");

  const claimSteps = [
    {
      step: 1,
      title: "Intimate Claim",
      description: "Report your claim within 24 hours through our helpline or online portal",
      icon: Phone
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Submit required documents through our mobile app or visit nearest branch",
      icon: FileText
    },
    {
      step: 3,
      title: "Claim Processing",
      description: "Our team reviews and processes your claim within 7 working days",
      icon: Clock
    },
    {
      step: 4,
      title: "Settlement",
      description: "Approved claims are settled directly to your bank account",
      icon: CheckCircle
    }
  ];

  const requiredDocuments = {
    health: [
      "Original discharge summary",
      "Medical bills and receipts",
      "Diagnostic reports",
      "Doctor's prescription",
      "Policy copy",
      "ID proof",
      "Bank account details"
    ],
    motor: [
      "FIR copy (if applicable)",
      "Driving license",
      "Vehicle registration",
      "Insurance policy copy",
      "Repair estimates",
      "Photos of damage",
      "Survey report"
    ],
    life: [
      "Death certificate",
      "Policy bond",
      "Claim form",
      "Medical certificate",
      "ID proof of nominee",
      "Bank account details",
      "Post mortem report (if required)"
    ]
  };

  const emergencyContacts = [
    { type: "Health Emergency", number: "1800-111-999", available: "24/7" },
    { type: "Motor Accident", number: "1800-222-999", available: "24/7" },
    { type: "General Claims", number: "1800-123-456", available: "9 AM - 9 PM" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Claims Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're here to help you through the claims process. Quick, easy, and hassle-free 
            claim settlement is our commitment to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Phone className="mr-2 h-5 w-5" />
              Emergency Claim: 1800-111-999
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              File Claim Online
            </Button>
          </div>
        </div>
      </section>

      {/* Track Claim Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Track Your Claim</CardTitle>
              <CardDescription>
                Enter your claim number to check the current status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Label htmlFor="claim-number">Claim Number</Label>
                  <Input
                    id="claim-number"
                    placeholder="Enter your claim number"
                    value={claimNumber}
                    onChange={(e) => setClaimNumber(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
                  <Search className="mr-2 h-4 w-4" />
                  Track
                </Button>
              </div>
              
              {claimNumber && (
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-800">Claim Status: Under Process</p>
                      <p className="text-sm text-green-600">Expected settlement: 3-5 working days</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Claim Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Claim Process</h2>
            <p className="text-xl text-gray-600">Simple 4-step process to get your claim settled</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {claimSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <Badge variant="secondary" className="mx-auto mb-2">Step {step.step}</Badge>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Required Documents</h2>
            <p className="text-xl text-gray-600">Documents needed for different types of claims</p>
          </div>

          <Tabs defaultValue="health" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="health">Health Claims</TabsTrigger>
              <TabsTrigger value="motor">Motor Claims</TabsTrigger>
              <TabsTrigger value="life">Life Claims</TabsTrigger>
            </TabsList>
            
            {Object.entries(requiredDocuments).map(([type, documents]) => (
              <TabsContent key={type} value={type}>
                <Card>
                  <CardHeader>
                    <CardTitle>Documents Required for {type.charAt(0).toUpperCase() + type.slice(1)} Claims</CardTitle>
                    <CardDescription>
                      Please ensure all documents are clear and legible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {documents.map((doc, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <FileText className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700">{doc}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Upload className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-blue-800">Digital Upload Available</p>
                          <p className="text-sm text-blue-600">Upload documents through our mobile app or email them to claims@securelife.in</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Contacts</h2>
            <p className="text-xl text-gray-600">24/7 support when you need us most</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="text-center border-red-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-lg text-red-800">{contact.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-red-600 mb-2">{contact.number}</p>
                  <Badge variant="secondary">{contact.available}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common claim-related questions</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does claim processing take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Most claims are processed within 7 working days. Emergency health claims are prioritized 
                  and can be settled within 24-48 hours for cashless treatment.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I track my claim status online?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, you can track your claim status 24/7 using our online portal or mobile app. 
                  You'll also receive SMS and email updates at each stage.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What if my claim is rejected?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  If your claim is rejected, you'll receive a detailed explanation. You can appeal the 
                  decision or contact our grievance cell for further assistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Claims;
