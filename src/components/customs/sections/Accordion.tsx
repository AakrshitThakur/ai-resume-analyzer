import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

export default function Accordion() {
  return (
    <section id="accordion" className="w-full color-neutral color-neutral-content bg-grid-lines-light p-3 sm:p-4 md:p-5">
      <div className="color-base-100 color-base-content mx-auto w-full max-w-5xl rounded-lg p-1">
        {/* about product */}
        <Disclosure as="div" className="text-sm p-3" defaultOpen={false}>
          {/* The group class in Tailwind is a way to let child elements react to the state of a parent element */}
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="font-medium underline">Product Information</span>
            {/* the child reacts to a data attribute on the parent */}
            <ChevronDown className="size-3 group-data-open:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="text-xs">
            <p>
              Provide resume PDF and get a comprehensive evaluation report with structured scoring across five critical
              sections.
            </p>
            <p>
              I have Employed Gemini 2.5 Pro model, which provided me—at no cost—with up to 5 requests per minute (RPM),
              250,000 tokens per minute (TPM), and 100 requests per day (RPD), thereby enabling more efficient processing and
              superior results.
            </p>
          </DisclosurePanel>
        </Disclosure>

        {/* key sections */}
        <Disclosure as="div" className="text-sm p-3" defaultOpen={true}>
          {/* The group class in Tailwind is a way to let child elements react to the state of a parent element */}
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="font-medium underline">Key Sections</span>
            {/* the child reacts to a data attribute on the parent */}
            <ChevronDown className="size-3 group-data-open:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="text-xs">
            <p>
              EXPERIENCE - Perform a holistic resume audit assessing role relevance, career trajectory, quantified impact,
              strong action-oriented language, chronological consistency, and transferable skills.
            </p>
            <p>
              PROJECTS SECTION - Conduct a comprehensive technical project review evaluating complexity and innovation,
              measurable outcomes, tech stack modernity, problem-solving methodology, collaboration and leadership, and
              clarity of technical communication.
            </p>
            <p>
              EDUCATION SECTION - Conduct a holistic education audit assessing qualification relevance, academic performance,
              continuous learning, institution reputation, career alignment, and specialized coursework.
            </p>
            <p>
              ACHIEVEMENTS SECTION - Perform a comprehensive achievements review assessing impact, quantified results,
              recognitions, leadership, competitive distinctions, and relevance to professional growth.
            </p>
            <p>
              CERTIFICATES SECTION - Conduct a targeted certification review evaluating industry relevance, authority
              credibility, validity, demonstrated skill depth, career alignment, and commitment to professional development.
            </p>
          </DisclosurePanel>
        </Disclosure>

        {/* about me */}
        <Disclosure as="div" className="text-sm p-3" defaultOpen={false}>
          {/* The group class in Tailwind is a way to let child elements react to the state of a parent element */}
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="font-medium underline">About Me</span>
            {/* the child reacts to a data attribute on the parent */}
            <ChevronDown className="size-3 group-data-open:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="text-xs">
            <p>
              A software developer proficient in software development. Demonstrated ability to build and maintain
              full-lifecycle web applications, backed by strong academic achievements.
            </p>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </section>
  );
}
