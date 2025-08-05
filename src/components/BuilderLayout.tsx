import Services from "./sections/Services";
import ContactForm from "./sections/ContactForm";
import About from "./sections/About";
import Hero from "./sections/Hero";

const sectionComponents: Record<string, any> = {
  hero: Hero,
  about: About,
  services: Services,
  contact: ContactForm,
};

export default function BuilderLayout({ template }: { template: any }) {
  return (
    <div>
      {template.layout.map((sectionKey: string) => {
        const Component = sectionComponents[sectionKey];
        if (!Component) return null;
        return <Component key={sectionKey} data={template[sectionKey]} />;
      })}
    </div>
  );
}
