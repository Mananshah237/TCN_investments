import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp, Target, Shield } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-navy-900 to-navy-800">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
              <div className="h-1 w-20 bg-gradient-to-r from-sky-500 to-cobalt-500 mx-auto mb-8"></div>
              <p className="text-xl text-white/90">
                Building wealth through strategic real estate investments since 2008.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cobalt-500/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Company History */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-start mb-8">
                <Link href="/">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                  </Button>
                </Link>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Journey</h2>
                <p className="text-slate-700">
                  TCN Investments was founded in 2008 by Milan Parekh with a vision to create a real estate investment
                  firm that prioritized transparency, strategic growth, and consistent returns. What began as a small
                  operation focusing on residential properties in New York has evolved into a comprehensive investment
                  firm with a diverse portfolio spanning multiple states and property types.
                </p>
                <p className="text-slate-700">
                  During the 2008 financial crisis, while many firms retreated from the market, TCN saw opportunity in
                  the changing landscape. By focusing on undervalued properties in emerging markets, we were able to
                  establish a strong foundation that would support our growth for years to come.
                </p>

                <div className="my-12 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=800&width=1200"
                    alt="TCN Investments headquarters"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Philosophy</h2>
                <p className="text-slate-700">
                  At TCN Investments, we believe that successful real estate investment is built on three core
                  principles: thorough market research, strategic acquisition, and proactive management. This philosophy
                  has guided our approach to every investment opportunity and has been instrumental in our consistent
                  performance over the years.
                </p>
                <p className="text-slate-700">
                  We prioritize long-term growth over short-term gains, focusing on properties and markets with strong
                  fundamentals and growth potential. This patient approach has allowed us to weather market fluctuations
                  and deliver reliable returns to our investors.
                </p>

                <h2 className="text-3xl font-bold text-navy-900 my-6">Leadership Team</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 my-10">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                  <div className="relative h-[250px]">
                    <Image
                      src="/placeholder.svg?height=500&width=500"
                      alt="Milan Parekh, CEO"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-900">Milan Parekh</h3>
                    <p className="text-sky-600 mb-4">Founder & CEO</p>
                    <p className="text-slate-700">
                      With over 20 years of experience in real estate and finance, Milan founded TCN Investments with a
                      vision to create a firm that combines market expertise with investor-focused strategies.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                  <div className="relative h-[250px]">
                    <Image
                      src="/placeholder.svg?height=500&width=500"
                      alt="Sarah Chen, COO"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-900">Sarah Chen</h3>
                    <p className="text-sky-600 mb-4">Chief Operating Officer</p>
                    <p className="text-slate-700">
                      Sarah brings 15 years of operational expertise to TCN, overseeing the firm's day-to-day operations
                      and ensuring that our investment strategies are executed with precision and efficiency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mt-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Values</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 my-10">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Integrity</h3>
                  <p className="text-slate-700">
                    We maintain the highest standards of honesty and transparency in all our dealings with investors,
                    partners, and tenants.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Excellence</h3>
                  <p className="text-slate-700">
                    We strive for excellence in every aspect of our business, from property selection to investor
                    relations and asset management.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Innovation</h3>
                  <p className="text-slate-700">
                    We embrace innovation and continuously seek new approaches to enhance our investment strategies and
                    operational efficiency.
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none mt-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Approach</h2>
                <p className="text-slate-700">
                  TCN Investments employs a methodical approach to real estate investment, combining thorough market
                  analysis with strategic acquisition and proactive management. Our team conducts extensive research to
                  identify markets with strong growth potential, focusing on factors such as economic indicators,
                  population trends, and infrastructure development.
                </p>
                <p className="text-slate-700">
                  Once we identify a promising market, we leverage our extensive network and expertise to source
                  properties that align with our investment criteria. Our acquisition team conducts rigorous due
                  diligence to assess each property's condition, potential, and fit within our portfolio strategy.
                </p>
                <p className="text-slate-700">
                  After acquisition, our asset management team implements tailored strategies to optimize each
                  property's performance. This may include renovations, operational improvements, or repositioning to
                  enhance value and generate strong returns for our investors.
                </p>

                <div className="my-12 bg-navy-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">Our Mission</h3>
                  <p className="text-xl text-navy-800 italic">
                    "To create wealth and value through strategic real estate investments while maintaining the highest
                    standards of integrity and transparency in all our endeavors."
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link href="/#contact">
                  <Button className="bg-gradient-to-r from-sky-500 to-cobalt-500 hover:from-sky-600 hover:to-cobalt-600 text-white">
                    Contact Our Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
