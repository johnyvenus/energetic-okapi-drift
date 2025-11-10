const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Engineering Excellence for Every Application
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Here you can add the first paragraph of your content. This is a great place to introduce your company's philosophy, the quality of your products, or your commitment to customer satisfaction. Explain what sets you apart from the competition.
            </p>
            <p>
              This is the second paragraph. You can use this space to elaborate on specific aspects of your business, such as your manufacturing process, the advanced technology you use, or the range of industries you serve.
            </p>
            <p>
              Use this third paragraph to conclude your introduction. You might want to summarize your key strengths or invite visitors to explore the product catalog below. This is your chance to make a strong impression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;