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
                What is the typical timeline for a kitchen or bathroom remodel?
              </AccordionTrigger>
              <AccordionContent>
                Most bathroom renovations take 2-3 weeks to complete, while kitchen remodels typically require 4-8 weeks. The exact timeline depends on your project&apos;s scope - from simple updates to complete renovations. During your initial consultation, we&apos;ll provide a detailed schedule and keep you informed throughout the entire process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                What should I budget for a kitchen or bathroom remodel?
              </AccordionTrigger>
              <AccordionContent>
                Bathroom remodeling costs typically range from $10,000 for essential updates to $50,000+ for luxury renovations. Kitchen remodeling projects generally start at $25,000 and can exceed $100,000 for high-end transformations. Your final investment will depend on material choices, project scope, and whether you&apos;re updating specific elements or opting for a complete renovation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                What services are included in your remodeling packages?
              </AccordionTrigger>
              <AccordionContent>
                Our comprehensive services include custom design, full-scale renovations, and specialized upgrades. We handle everything from concept to completion - including cabinetry, countertops, flooring, lighting, and plumbing. Whether you&apos;re dreaming of a modern kitchen with an open concept or a spa-like bathroom retreat, our experienced team will guide you through every step of the transformation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                What makes Ultimate Kitchen & Bath different from other remodeling companies?
              </AccordionTrigger>
              <AccordionContent>
                Our reputation is built on three core principles: exceptional craftsmanship, transparent communication, and dedicated customer service. We bring over two decades of experience to every project, whether it&apos;s a modest update or a complete transformation. Our team of certified designers and skilled craftsmen work together to ensure your vision becomes reality while respecting your budget and timeline.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                What type of warranty protection do you provide?
              </AccordionTrigger>
              <AccordionContent>
                We stand behind our work with a comprehensive 2-year warranty on craftsmanship, complemented by manufacturer warranties on all installed products and materials. Our commitment doesn&apos;t end at project completion - we provide ongoing support and maintenance services to ensure your continued satisfaction. Contact us to learn more about our warranty coverage and dedication to quality.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
} 