const ExperiencePage = () => {
  return (
    <div className="container mx-auto flex flex-col justify-between py-10 lg:flex-row">
      <div>
        <h1 className="sticky top-[70px] -z-50 mb-4 text-3xl font-bold uppercase text-primary md:text-4xl">
          Experience
        </h1>
      </div>
      <div className="lg:w-8/12">
        <ul className="timeline timeline-vertical timeline-compact timeline-snap-icon -z-50">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">July 2025 – Present</time>
              <div className="text-lg font-black">
                Software Engineer – Full Stack Developer
              </div>
              <div className="text-lg font-black">Areto Labs</div>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Designed and deployed a microservice on GCP for detecting
                  porn-bots on TikTok and Instagram, leveraging a third-party
                  library for profile scraping and increasing detection catch
                  rate by 60%.
                </li>
                <li>
                  Trained and fine-tuned a Hugging Face model using internally
                  collected datasets, including scraped profile photos,
                  significantly boosting model accuracy and reducing false
                  positives.
                </li>
                <li>
                  Architected event-driven data ingestion systems using Google
                  Pub/Sub to stream topic and subscription messages between
                  microservices, leveraging Honeycomb traces to monitor, debug,
                  and optimize event flows.
                </li>
                <li>
                  Implemented and maintained DevOps pipelines using GCP, GitHub,
                  and GitHub Actions, improving deployment speed and
                  reliability.
                </li>
                <li>
                  Collaborated in code reviews, architectural discussions, and
                  team strategy, while ensuring software quality with unit,
                  integration, and end-to-end testing.
                </li>
              </ul>
            </div>
            <hr />
          </li>
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">
                September 2023 – September 2024
              </time>
              <div className="text-lg font-black">
                Software Engineer – Full Stack Developer
              </div>
              <div className="text-lg font-black">CANN Forecast Inc.</div>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Managed PostgreSQL databases, built ETL pipelines with Pandas,
                  and performed spatial analysis using QGIS and GeoPandas for
                  over 10 water infrastructure projects.
                </li>
                <li>
                  Collaborated with an agile team of domain experts to develop
                  React based interfaces, interactive maps using Leaflet.js and
                  Mapbox, and visualizations with D3.js, enhancing accessibility
                  and enabling data-driven decisions for 100+ users.
                </li>
                <li>
                  Automated email attachment processing via Python (IMAP/SMTP),
                  cutting manual work by 90%, and integrated the solution with
                  Jenkins, resulting in faster deployment cycles and reduced
                  processing time by 4 hours per day.
                </li>
                <li>
                  Engineered scalable backend systems in Django, exposing
                  RESTful APIs that supported dynamic front-end functionality,
                  serving over 500 concurrent users.
                </li>
              </ul>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">
                September 2022 – June 2023
              </time>
              <div className="text-lg font-black">
                Software Engineer – Machine Learning
              </div>
              <div className="text-lg font-black">HiFi Engineering Inc.</div>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Designed and implemented ML models for sensor data analysis,
                  achieving 95% accuracy in simulated pipeline leak detection
                  using Keras and TensorFlow.
                </li>
                <li>
                  Reduced false positives by 15% through close collaboration
                  with domain experts during model tuning and optimization.
                </li>
                <li>
                  Improved system sensitivity by 20% via rigorous validation,
                  significantly enhancing real-world reliability.
                </li>
                <li>
                  Communicated technical results to both technical and
                  non-technical stakeholders, contributing to a projected 30%
                  reduction in operational risk.
                </li>
              </ul>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ExperiencePage;
