import { SalesEnquiryForm } from "@/components/SalesEnquiryForm";

const SalesEnquiry = () => {
  return (
    <div className="bg-background">
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Request a Quote</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            Let us know your requirements, and our sales team will provide a customized quote for you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <SalesEnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};
export default SalesEnquiry;