import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How long does a kitchen or bathroom remodeling project take in Boca Raton?
              </AccordionTrigger>
              <AccordionContent>
                For Boca Raton home renovations, a custom bathroom remodel typically takes 2-3 weeks, while a luxury kitchen remodel ranges from 4-8 weeks. At Ultimate Kitchen & Bath, our timeline varies based on project scope, from simple cabinet refacing to complete custom kitchen design. We provide detailed schedules during consultation and maintain clear communication throughout your Boca Raton kitchen and bath renovation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                What&apos;s the cost of kitchen and bathroom remodeling in Boca Raton?
              </AccordionTrigger>
              <AccordionContent>
                As top-rated kitchen designers in Boca Raton, we offer options for every budget. Bathroom renovations typically range from $10,000 for basic updates to $50,000+ for high-end bathroom remodeling. Modern kitchen remodeling in Boca Raton ranges from $25,000 to $100,000+ for luxury kitchen remodels. Costs vary based on materials, scope, and whether you&apos;re choosing custom cabinetry, countertop installation, or complete plumbing renovation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                What types of kitchen and bathroom remodeling services do you offer in Boca Raton?
              </AccordionTrigger>
              <AccordionContent>
                As Boca Raton kitchen and bath experts, we provide comprehensive services including custom kitchen design, contemporary bathroom renovation, shower and tub upgrades, tile and flooring installation, and energy-efficient kitchen upgrades. Whether you&apos;re interested in an open concept kitchen remodel or a bathroom remodel with walk-in shower, our South Florida kitchen and bath remodeling team handles everything from design to completion.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Why choose Ultimate Kitchen & Bath for your Boca Raton remodeling project?
              </AccordionTrigger>
              <AccordionContent>
                As the best kitchen remodelers in Boca Raton, we combine expertise with personalized service. Our Boca Raton bathroom designers and kitchen experts specialize in both small kitchen renovation ideas and luxury remodels. We&apos;re known for quality craftsmanship, transparent pricing, and exceptional customer service. From custom cabinetry to complete home remodeling in Boca Raton, we&apos;re your trusted local contractor.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                What warranties and guarantees do you offer on Boca Raton kitchen and bath projects?
              </AccordionTrigger>
              <AccordionContent>
                Ultimate Kitchen & Bath provides comprehensive warranties on all Boca Raton home renovations. Our workmanship comes with a 2-year warranty, plus manufacturer warranties on products and materials. As your dedicated kitchen and bath contractor in Boca Raton, we offer ongoing support and maintenance services. Contact Ultimate Kitchen & Bath for kitchen upgrades in Boca Raton and experience our commitment to excellence.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
} 