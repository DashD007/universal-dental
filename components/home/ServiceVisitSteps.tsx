import Image from "next/image";
import Container from "@/components/ui/Container";
import technicianPhoto from "@/public/images/placeholders/technician-repair.jpg";
import { serviceSteps } from "@/lib/data/services";

export default function ServiceVisitSteps() {
  return (
    <section aria-labelledby="steps-title" className="bg-inverse py-section text-on-inverse">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 id="steps-title" className="text-display-lg font-medium">
              How a service visit works.
            </h2>
            <p className="mt-4 text-lead text-on-inverse/75">
              Four steps from the first message to a chair you can work on again, the same way every time.
            </p>
          </div>
          <figure className="overflow-hidden rounded-media lg:col-span-7">
            <Image
              src={technicianPhoto}
              alt="A technician working inside a machine with a screwdriver"
              sizes="(min-width: 1024px) 54vw, 100vw"
              placeholder="blur"
              className="aspect-video w-full object-cover"
            />
          </figure>
        </div>

        <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {serviceSteps.map((step) => (
            <li key={step.title} className="border-t border-on-inverse/20 pt-6">
              <h3 className="text-display-sm font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-on-inverse/75">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
