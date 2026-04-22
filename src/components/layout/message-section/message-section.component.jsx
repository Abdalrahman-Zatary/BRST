const MessageSection = () => {
  return (
    <section className="message-content">
      <div className="relative container mx-auto flex-center py-22">
        <div className="w-full h-full">
          <div className="message-wrapper">
            <h1 className="first-message">Shake up your mornings day and</h1>

            <div className="message-text-scroll">
              <div className="bg-mango-burst pt-1.5 md:pb-5 pb-3 px-3">
                <h2 className="text-dark-ember">POWER UP</h2>
              </div>
            </div>

            <h1 className="second-message">
              your day with every burst of Pure Vitamin Energy
            </h1>
          </div>

          <div className="flex-center text-sm md:mt-14 mt-10">
            <div className="max-w-md px-16 flex-center overflow-hidden">
              <p>
                Fuel the adventure. Feed the momentum. BRST is where real fruit
                meets real energy — no shortcuts, just pure burst.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MessageSection;