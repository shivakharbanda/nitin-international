
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import {
  Stethoscope,
  HardHat,
  UtensilsCrossed,
  Fuel,
  Truck,
  CheckCircle2,
  Award,
  Clock,
  Globe,
  Shield,
  ShieldCheck,
  Brain,
  Users,
  Handshake,
  Rocket,
  ArrowRight,
  Headphones
} from 'lucide-react';

const countries = [
  { code: 'sa', name: 'Saudi Arabia' },
  { code: 'ae', name: 'UAE' },
  { code: 'kw', name: 'Kuwait' },
  { code: 'om', name: 'Oman' },
  { code: 'bh', name: 'Bahrain' },
  { code: 'qa', name: 'Qatar' },
  { code: 'jo', name: 'Jordan' },
  { code: 'ly', name: 'Libya' },
  { code: 'iq', name: 'Iraq' },
  { code: 'jp', name: 'Japan' },
  { code: 'tw', name: 'Taiwan' },
  { code: 'ro', name: 'Romania' },
  { code: 'ru', name: 'Russia' },
  { code: 'il', name: 'Israel' },
];

const industryServices = [
  {
    icon: Stethoscope,
    title: 'Medical & Healthcare Recruitment',
    description: 'Specialized overseas staffing for doctors, nurses, paramedical staff, and technicians to meet critical healthcare needs with qualified professionals.',
    image: '/images/industry-medical.jpg',
    link: '/specializations'
  },
  {
    icon: HardHat,
    title: 'Construction Manpower Supply',
    description: 'Providing skilled civil, electrical, and mechanical workers for large-scale infrastructure projects, ensuring project timelines are met.',
    image: '/images/industry-construction.jpg',
    link: '/specializations'
  },
  {
    icon: UtensilsCrossed,
    title: 'Hospitality Staffing Solutions',
    description: 'Sourcing experienced chefs, housekeeping staff, front office personnel, and waiters for premium hotels and resorts worldwide.',
    image: '/images/industry-hospitality.jpg',
    link: '/specializations'
  },
  {
    icon: Fuel,
    title: 'Oil & Gas Manpower Consultancy',
    description: 'Expert placement of skilled technicians, safety officers, and plant operators for the challenging energy sector.',
    image: '/images/industry-oil-gas.jpg',
    link: '/specializations'
  },
  {
    icon: Truck,
    title: 'Transport & Heavy Automobile Staffing',
    description: 'Recruiting reliable drivers, mechanics, and heavy equipment operators for efficient logistics and transportation operations.',
    image: '/images/industry-transport.jpg',
    link: '/specializations'
  }
];

const qualityCheckpoints = [
  'Background verification',
  'Academic & professional reference checks',
  'Trade testing & skill evaluation',
  'Medical fitness & compliance verification'
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'MEA Approved Overseas Recruitment Agency'
  },
  {
    icon: Clock,
    title: '33+ Years of International Recruitment Experience'
  },
  {
    icon: Globe,
    title: 'Strong Presence in Gulf & Overseas Markets'
  },
  {
    icon: Shield,
    title: 'Ethical, Transparent & Compliant Processes'
  },
  {
    icon: Rocket,
    title: 'Fast Turnaround & Scalable Hiring Solutions'
  },
  {
    icon: Users,
    title: 'Dedicated Support for Employers & Candidates'
  }
];

export default function HomePage() {
  return (
    <>
      {/* Full-Width Immersive Hero */}
      <section className="relative w-full bg-[hsl(var(--surface-dark))]">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-bg.jpg"
            alt="Professional workforce"
            className="w-full h-full object-cover opacity-20"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--surface-dark))] via-[hsl(var(--surface-dark))]/90 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col justify-center min-h-[600px]">
          <div className="max-w-3xl space-y-8">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              MEA Approved Overseas Manpower Consultant in India
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-stone-300 font-normal leading-relaxed max-w-2xl">
              Delivering trusted and result-driven staffing solutions since 1993. With over 30+ years of excellence,
              we specialize in providing skilled, semi-skilled, and professional manpower to employers across
              Gulf, Middle East, Europe, and Asia.
            </p>
            <p className="text-base md:text-lg text-stone-400 font-normal leading-relaxed max-w-2xl">
              Our expertise, compliance-driven approach, and commitment to quality have positioned us as a
              preferred international manpower consultancy for global organizations.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/recruiters" passHref>
                <Button size="lg" className="h-12 px-8 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-white text-base font-bold rounded-lg shadow-lg">
                  Hire Talent
                </Button>
              </Link>
              <Link href="/recruits" passHref>
                <Button size="lg" className="h-12 px-8 bg-white hover:bg-stone-50 text-[hsl(var(--surface-dark))] text-base font-bold rounded-lg shadow-lg">
                  Find a Job
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper id="global-recruitment" className="bg-secondary/50 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
            Global Overseas Recruitment Solutions
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            We provide end-to-end manpower recruitment services to international clients across the globe.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-8">
          {countries.map((country) => (
            <span
              key={country.code}
              className="px-4 py-2 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] rounded-full text-sm font-medium inline-flex items-center gap-2"
            >
              <span className={`fi fi-${country.code}`}></span>
              {country.name}
            </span>
          ))}
        </div>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto">
          Our deep knowledge of international recruitment regulations, visa processing, and employer
          requirements ensures timely deployment and workforce reliability.
        </p>
      </SectionWrapper>

      {/* Industry-Specific Manpower Recruitment Services */}
      <section id="industry-services" className="py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[hsl(var(--heading-blue))] mb-4 tracking-tight">
              Industry-Specific Manpower Recruitment Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-light">
              We offer tailored overseas staffing solutions for the following industries.
            </p>
          </div>

          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {industryServices.slice(0, 3).map((service) => (
              <div
                key={service.title}
                className="group relative bg-card rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-border h-[320px] flex flex-col justify-between"
              >
                {/* Background Image */}
                <div className="absolute right-0 top-0 bottom-0 w-3/5 z-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={service.title}
                    className="w-full h-full object-cover opacity-70"
                    src={service.image}
                  />
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-card via-card/95 to-transparent z-10 w-4/5" />

                {/* Content */}
                <div className="relative z-20 p-6 flex flex-col h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <service.icon className="h-9 w-9 text-[hsl(var(--primary))]" />
                      <h3 className="text-xl font-bold text-[hsl(var(--heading-blue))] leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-4 pr-4">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-[hsl(var(--primary))] transition-colors mt-auto group-hover:underline"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {industryServices.slice(3, 5).map((service) => (
              <div
                key={service.title}
                className="group relative bg-card rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-border h-[300px] flex flex-col justify-between"
              >
                {/* Background Image */}
                <div className="absolute right-0 top-0 bottom-0 w-3/5 z-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={service.title}
                    className="w-full h-full object-cover opacity-70"
                    src={service.image}
                  />
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-card via-card/95 to-transparent z-10 w-4/5" />

                {/* Content */}
                <div className="relative z-20 p-6 flex flex-col h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <service.icon className="h-9 w-9 text-[hsl(var(--primary))]" />
                      <h3 className="text-xl font-bold text-[hsl(var(--heading-blue))] leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-4 pr-8">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-[hsl(var(--primary))] transition-colors mt-auto group-hover:underline"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section - Immersive Design */}
      <section id="quality-assurance" className="relative w-full py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-5 grayscale"
            style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Grid - 3 Columns */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">

            {/* Left Card - Verification */}
            <div className="bg-white/40 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-8 transform -rotate-2 hover:rotate-0 transition-all duration-500 hover:shadow-2xl">
              <div className="p-3 rounded-full bg-[hsl(var(--heading-blue))]/10 w-fit mb-4">
                <ShieldCheck className="h-8 w-8 text-[hsl(var(--heading-blue))]" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--heading-blue))] mb-3">
                Verification
              </h3>
              <p className="text-foreground/70 mb-6">
                Multi-layered background checks ensuring candidate authenticity and reliability.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground/80">100% Background Check</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground/80">Reference Validated</span>
                </li>
              </ul>
            </div>

            {/* Center Content */}
            <div className="text-center lg:col-span-1 order-first lg:order-none">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--primary))]/10 mb-6">
                <span className="text-sm font-semibold text-[hsl(var(--primary))] tracking-wide">
                  Quality Assurance
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[hsl(var(--heading-blue))] mb-2">
                Advanced Candidate
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[hsl(var(--primary))] mb-6">
                Screening Process
              </h2>

              {/* Description */}
              <p className="text-lg text-foreground/70 mb-4 max-w-md mx-auto">
                At Nitin International, quality manpower is guaranteed through a multi-level screening process.
              </p>
              <p className="text-base text-foreground/60 mb-8 max-w-md mx-auto">
                This ensures high performance, reduced hiring risks, and long-term workforce retention.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/recruitment-procedure" passHref>
                  <Button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-white font-semibold px-6">
                    Learn About Our Process
                  </Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button variant="outline" className="border-[hsl(var(--heading-blue))] text-[hsl(var(--heading-blue))] hover:bg-[hsl(var(--heading-blue))] hover:text-white font-semibold px-6">
                    Speak to an Expert
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Card - Skill Evaluation */}
            <div className="bg-white/40 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-8 transform rotate-2 hover:rotate-0 transition-all duration-500 hover:shadow-2xl">
              <div className="p-3 rounded-full bg-green-600/10 w-fit mb-4">
                <Brain className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--heading-blue))] mb-3">
                Skill Evaluation
              </h3>
              <p className="text-foreground/70 mb-6">
                Trade testing and psychometric evaluations to match candidates with the right opportunities.
              </p>
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-foreground/80">Skill Match Rate</span>
                  <span className="font-bold text-green-600">85% Minimum</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[hsl(var(--heading-blue))]">98%</div>
              <div className="text-sm text-foreground/60 font-medium mt-1">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[hsl(var(--heading-blue))]">15k+</div>
              <div className="text-sm text-foreground/60 font-medium mt-1">Vetted Experts</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Headphones className="h-7 w-7 md:h-8 md:w-8 text-[hsl(var(--heading-blue))]" />
                <span className="text-3xl md:text-4xl font-black text-[hsl(var(--heading-blue))]">24/7</span>
              </div>
              <div className="text-sm text-foreground/60 font-medium mt-1">Global Support</div>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper id="why-us" className="py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl">
            Why Choose Nitin International?
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Your trusted partner for ethical, efficient, and compliant overseas recruitment solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 p-4 rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-2 rounded-full bg-[hsl(var(--primary))]/10">
                <item.icon className="h-6 w-6 text-[hsl(var(--primary))]" />
              </div>
              <span className="font-medium text-foreground/90">{item.title}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="leadership" className="bg-secondary/50 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-xl p-8 shadow-lg">
              <Handshake className="h-12 w-12 text-[hsl(var(--primary))] mb-4" />
              <h3 className="text-xl font-semibold text-[hsl(var(--heading-blue))] mb-4">
                Our Core Values
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-[hsl(var(--primary))]/5 rounded-lg">
                  <span className="font-medium text-[hsl(var(--primary))]">Precision</span>
                </div>
                <div className="text-center p-3 bg-[hsl(var(--primary))]/5 rounded-lg">
                  <span className="font-medium text-[hsl(var(--primary))]">Professionalism</span>
                </div>
                <div className="text-center p-3 bg-[hsl(var(--primary))]/5 rounded-lg">
                  <span className="font-medium text-[hsl(var(--primary))]">Punctuality</span>
                </div>
                <div className="text-center p-3 bg-[hsl(var(--primary))]/5 rounded-lg">
                  <span className="font-medium text-[hsl(var(--primary))]">Quality</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--heading-blue))] sm:text-4xl mb-6">
              Leadership Excellence
            </h2>
            <p className="text-lg text-foreground/80 mb-4">
              Nitin International was founded by Mr. Vimal Kumar, a seasoned manpower professional with
              over 45 years of experience in international recruitment. His leadership has shaped the
              organization with a strong focus on precision, professionalism, punctuality, and
              uncompromising quality.
            </p>
            <p className="text-foreground/70 mb-4">
              Mr. Kumar has successfully managed recruitment projects across various Gulf and Middle Eastern
              countries, earning long-standing relationships with employers through consistent delivery and
              personalized service.
            </p>
            <p className="text-foreground/70 mb-6">
              His hands-on approach and insistence on perfection ensure that both employers and job seekers
              receive unmatched satisfaction. Under his guidance, Nitin International continues to evolve
              as a trusted name in global manpower recruitment.
            </p>
            <Link href="/founder" passHref>
              <Button variant="outline" className="group border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-primary-foreground">
                Learn More About Our Founder <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="cta-contact" className="bg-[hsl(var(--primary))] py-16 md:py-20">
        <div className="text-center">
          <p className="text-lg text-primary-foreground/80 mb-2">
            Looking for a trusted overseas manpower consultant in India?
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Hire Reliable Overseas Manpower Today
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Partner with Nitin International for reliable, compliant, and high-quality
            international recruitment solutions.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" passHref>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Contact Us for Customized Solutions
              </Button>
            </Link>
            <Link href="/recruits" passHref>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-[hsl(var(--primary))]">
                For Job Seekers
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
