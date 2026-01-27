
import { Metadata } from 'next';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { PageHeader } from '@/components/ui/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileText, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refunds & Cancellation Policy - Nitin International',
  description: 'Understand our refund and cancellation policies for flight bookings, holiday packages, and visa services. Clear information about our commitment to fair and transparent service terms.',
};

export default function RefundsCancellationPage() {
  return (
    <>
      <PageHeader
        icon={FileText}
        title="Refunds & Cancellation Policy"
        description="Clear information about our refund and cancellation terms for flight bookings, holiday packages, and other services."
      />

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <Accordion type="multiple" className="w-full space-y-4" defaultValue={['cancellation-policy', 'holidays-policy', 'refund-policy']}>
            <AccordionItem value="cancellation-policy" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-xl font-semibold hover:text-[hsl(var(--primary))] py-4">
                Cancellation Policy
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 space-y-4 pb-6">
                <div className="space-y-3">
                  <p className="leading-relaxed">
                    Every booking made by Nitin International is subject to cancellation charges levied by the airline, which may vary with respect to flight and booking class. Service charges shall be applicable in the event of cancellation of the flight by the customer.
                  </p>

                  <div className="bg-muted p-4 rounded-md border-l-4 border-[hsl(var(--primary))]">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-[hsl(var(--primary))]" />
                      Important Points
                    </h3>
                    <ul className="list-disc list-inside space-y-1.5 text-sm">
                      <li>Zero Cancellation-Fee product premium charged at the time of booking is non-refundable</li>
                      <li>Convenience fees are non-refundable in all cases</li>
                      <li>Some bookings may be non-refundable as per the specific airline's policy</li>
                      <li>Some bookings cannot be cancelled partially as per the specific airline's policy</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">How to Cancel</h3>
                    <p className="leading-relaxed">
                      Cancellations can be made offline by sending an email to <a href="mailto:Nitinintl@gmail.com" className="text-[hsl(var(--primary))] hover:underline font-medium">Nitinintl@gmail.com</a>
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Amendments & Changes</h3>
                    <p className="leading-relaxed">
                      We assist you in making various amendments for bookings. In few cases, you need to contact the airline directly. Amendment charges are subject to change as per the policy of the airline, which varies due to flight timings and booking class.
                    </p>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-md border border-amber-200 dark:border-amber-800">
                    <h3 className="font-semibold text-foreground mb-2">Last-Minute Cancellations (Within 72 Hours)</h3>
                    <p className="text-sm leading-relaxed">
                      To cancel tickets within 72 hours of the journey, we recommend customers to contact the airlines directly and then send the cancellation request to us via email.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Refund Processing for Cancellations</h3>
                    <p className="leading-relaxed text-sm">
                      For cancellation requests received, the refund shall be processed at the earliest once request is received. In case of direct cancellation through airlines, refunds shall be processed post deduction of airline charges along with our service charge. All refunds shall be processed subject to processing of refunds by the respective airline/service provider. Please note convenience fee charged at the time of booking is not refundable.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Additional Terms</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="text-[hsl(var(--primary))] font-bold">•</span>
                        <span>The company is not responsible for any delay or cancellation or amendment of flights from airline's end.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[hsl(var(--primary))] font-bold">•</span>
                        <span>In case of no-show or unutilized bookings, customers are required to make requests for any valid refunds within <strong>90 days</strong> from the travel date in case of air/rail/cab/bus tickets and/or the date of check-in for hotel bookings.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[hsl(var(--primary))] font-bold">•</span>
                        <span>No refund would be payable for requests raised after the expiry of 90 days and all unclaimed amounts shall be deemed to have been forfeited.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[hsl(var(--primary))] font-bold">•</span>
                        <span>In case of an amendment leading to rescheduling, any cancellation in the original booking shall lead to cancellation in the rescheduled booking.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[hsl(var(--primary))] font-bold">•</span>
                        <span>For international bookings, if the customer is marked as No Show for the onward sector, the customer will be considered No Show for the return sector as well (Issued under Single PNR). Customers need to connect with the respective airline directly before No Show.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[hsl(var(--primary))] font-bold">•</span>
                        <span>Tickets issued by Nitin International shall be valid for a period of 1 year from the date of issuance or such other period as prescribed by the concerned airline.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="holidays-policy" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-xl font-semibold hover:text-[hsl(var(--primary))] py-4">
                Holidays Amendment & Cancellation Policy
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 space-y-4 pb-6">
                <p className="leading-relaxed">
                  For holiday packages and tour bookings, the following cancellation charges apply based on the timing of your cancellation:
                </p>

                <div className="grid gap-4">
                  <Card className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20 border-green-200 dark:border-green-800">
                    <CardContent className="p-5">
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-bold text-green-700 dark:text-green-400">25%</span>
                        <div>
                          <h3 className="font-semibold text-foreground">60 Days or More Before Departure</h3>
                          <p className="text-sm text-foreground/70 mt-1">Cancellation charges: 25% of total tour cost (if fully paid)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/20 border-amber-200 dark:border-amber-800">
                    <CardContent className="p-5">
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-bold text-amber-700 dark:text-amber-400">50%</span>
                        <div>
                          <h3 className="font-semibold text-foreground">30 Days Before Departure</h3>
                          <p className="text-sm text-foreground/70 mt-1">Cancellation charges: 50% of total tour cost</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/20 border-red-200 dark:border-red-800">
                    <CardContent className="p-5">
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-bold text-red-700 dark:text-red-400">100%</span>
                        <div>
                          <h3 className="font-semibold text-foreground">15 Days Before Departure</h3>
                          <p className="text-sm text-foreground/70 mt-1">Cancellation charges: 100% of total tour cost (no refund)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="refund-policy" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-xl font-semibold hover:text-[hsl(var(--primary))] py-4">
                Refund Policy
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 space-y-4 pb-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Refund Processing</h3>
                    <p className="leading-relaxed">
                      Nitin International will process the refund only after receiving a cancellation request/claim from the customer/travel agent/corporate company through email only.
                    </p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-md border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-foreground mb-2">Processing Timeline</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="text-[hsl(var(--primary))] font-bold">•</span>
                        <span>Refund against air ticket cancellation will be credited directly to customer's mode of payment after receiving refund from the airlines</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[hsl(var(--primary))] font-bold">•</span>
                        <span>Nitin International will process refund within <strong>72 hours</strong> after receiving it from concerned airlines/hotel/transporter/other suppliers</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[hsl(var(--primary))] font-bold">•</span>
                        <span>Due to banking procedures, refund in credit cards may take <strong>72 hours</strong> while it may take <strong>7 days</strong> for net banking transactions</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Airline/Hotel Insolvency</h3>
                    <p className="leading-relaxed text-sm">
                      Nitin International shall not be liable to pay any refunds in cases where airlines/hotels close operations or declare themselves as insolvent. Customers, clients, or agents shall not hold Nitin International liable to pay refunds as assured at the time of booking in such cases.
                    </p>
                    <p className="leading-relaxed text-sm mt-2">
                      While we may sometimes refund amounts to customers based on surety given by airlines/hotels/suppliers, Nitin International reserves the right to recover the refunded amount in the event of airlines/hotels getting shut down, becoming non-operational, or filing for bankruptcy.
                    </p>
                  </div>

                  <div className="bg-muted p-4 rounded-md border-l-4 border-[hsl(var(--primary))]">
                    <p className="text-sm font-medium text-foreground">
                      All refund requests must be submitted via email to <a href="mailto:Nitinintl@gmail.com" className="text-[hsl(var(--primary))] hover:underline">Nitinintl@gmail.com</a>
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[hsl(var(--heading-blue))] mb-4">
            Need Help?
          </h2>
          <p className="text-foreground/80 mb-6">
            For any questions regarding refunds or cancellations, please contact us at <a href="mailto:Nitinintl@gmail.com" className="text-[hsl(var(--primary))] hover:underline font-medium">Nitinintl@gmail.com</a>
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
