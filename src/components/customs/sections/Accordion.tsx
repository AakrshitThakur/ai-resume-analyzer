import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionFC() {
  return (
    <section>
      <div className="p-6 sm:p-8 lg:p-12">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Product Information</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Your task is to analyze the provided resume PDF and generate a
                comprehensive evaluation report with structured scoring across
                five critical sections.
              </p>
              <p>
                I employed the Gemini 2.5 Pro model, which provided me—at no
                cost—with up to 5 requests per minute (RPM), 250,000 tokens per
                minute (TPM), and 100 requests per day (RPD), thereby enabling
                more efficient processing and superior results.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Key Sections</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                EXPERIENCE - Perform a holistic resume audit assessing role
                relevance, career trajectory, quantified impact, strong
                action-oriented language, chronological consistency, and
                transferable skills.
              </p>
              <p>
                PROJECTS SECTION - Conduct a comprehensive technical project
                review evaluating complexity and innovation, measurable
                outcomes, tech stack modernity, problem-solving methodology,
                collaboration and leadership, and clarity of technical
                communication.
              </p>
              <p>
                EDUCATION SECTION - Conduct a holistic education audit assessing
                qualification relevance, academic performance, continuous
                learning, institution reputation, career alignment, and
                specialized coursework.
              </p>
              <p>
                ACHIEVEMENTS SECTION - Perform a comprehensive achievements
                review assessing impact, quantified results, recognitions,
                leadership, competitive distinctions, and relevance to
                professional growth.
              </p>
              <p>
                CERTIFICATES SECTION - Conduct a targeted certification review
                evaluating industry relevance, authority credibility, validity,
                demonstrated skill depth, career alignment, and commitment to
                professional development.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>About Me</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                A Full-stack developer proficient in MERN stack, Next.js,
                TypeScript, etc, with an internship experience delivering
                polished UIs and scalable backend solutions. Demonstrated
                ability to build and maintain full-lifecycle web applications,
                backed by strong academic achievements and proven teamwork.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
