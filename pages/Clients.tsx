import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
    </svg>
);

const Clients: React.FC = () => {
    const [heroRef, heroClasses] = useFadeIn<HTMLDivElement>();
    const [targetRef, targetClasses] = useFadeIn<HTMLDivElement>();
    const [donorsRef, donorsClasses] = useFadeIn<HTMLDivElement>();
    const [sectorsRef, sectorsClasses] = useFadeIn<HTMLDivElement>();
    const [featuredRef, featuredClasses] = useFadeIn<HTMLDivElement>();
    const [approachRef, approachClasses] = useFadeIn<HTMLDivElement>();

  const targetClients = [
    { category: 'Non-Governmental Organizations', clients: ['International (INGOs)', 'Local NGOs', 'Community-Based (CBOs)'] },
    { category: 'Government & Multilateral', clients: ['Ministries, Departments, Agencies (MDAs)', 'United Nations Agencies', 'Other Multilateral Organizations'] },
    { category: 'Development Partners', clients: ['Donor Agencies', 'Social Enterprises', 'Impact Investors'] }
  ];

  const donorRequirements = ['USAID', 'DFID', 'BMZ', 'UN Agencies', 'World Bank', 'AfDB'];
  const sectors = ['Health', 'Education', 'Agriculture', 'WASH', 'Climate', 'Governance', 'Economic Dev', 'Humanitarian'];

  const completedTasks = [
    {
      title: "Training and Capacity Building on Sibling Support to Adolescent Girls in Emergencies",
      client: "Humanitarian Partner Organization",
      duration: "Ongoing",
      location: "Multiple Emergency Settings",
      description: "Capacity building program focused on strengthening sibling support systems for adolescent girls in humanitarian and emergency contexts.",
      keyActivities: [
        "Development of comprehensive training curriculum and materials",
        "Training of Trainers (ToT) sessions for field staff",
        "Community mobilization and sensitization workshops",
        "Mentorship and coaching program establishment",
        "Monitoring and evaluation framework implementation"
      ],
      outcomes: [
        "150+ frontline staff trained in sibling support methodologies",
        "Customized training manuals and job aids developed",
        "Community support networks established and strengthened",
        "Improved psychosocial support for adolescent girls in emergencies",
        "Sustainable capacity built within local organizations"
      ],
      tools: ["Power BI", "Excel", "Training Manuals", "Monitoring Tools", "Evaluation Frameworks"]
    },
    {
      title: "Feasibility Study: Empowering Young Women with Integrated SRHR and Livelihoods Services",
      client: "Resilience Uganda",
      duration: "June-July 2025",
      location: "Gulu City",
      description: "Conducted comprehensive feasibility study for integrated Sexual Reproductive Health and Rights (SRHR) and livelihoods services",
      keyActivities: [
        "Stakeholder mapping and engagement with local government and community leaders",
        "Needs assessment with 300+ young women in Gulu City",
        "Market analysis for viable livelihood opportunities",
        "Program design and implementation strategy development",
        "Partnership assessment and coordination mechanisms"
      ],
      outcomes: [
        "Comprehensive feasibility report with implementation roadmap",
        "Stakeholder buy-in and commitment secured",
        "Baseline data for future program monitoring established",
        "Integrated SRHR-livelihoods model validated with target beneficiaries"
      ],
      tools: ["ODK", "Kobo Toolbox", "Excel", "SPSS", "Qualitative Analysis"]
    }
  ];

  return (
    <div>
      <section ref={heroRef} className={`bg-blue-50 py-16 text-center ${heroClasses}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900">Our Clients</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Partnering with organizations dedicated to sustainable development and social impact across Africa.
          </p>
        </div>
      </section>

      <section ref={targetRef} className={`py-16 sm:py-24 ${targetClasses}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center">Target Clients</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetClients.map((group, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{group.category}</h3>
                <ul className="space-y-3">
                  {group.clients.map((client, clientIndex) => (
                    <li key={clientIndex} className="flex items-center text-gray-600">
                        <span className="text-blue-600 font-bold mr-3">•</span> {client}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={donorsRef} className={`py-16 sm:py-24 bg-slate-50 ${donorsClasses}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center">Donor Reporting Expertise</h2>
          <p className="mt-4 text-center text-lg text-gray-600 max-w-3xl mx-auto">
            Deep understanding of donor reporting requirements and compliance standards.
          </p>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {donorRequirements.map((donor, index) => (
              <div key={index} className="text-gray-500 font-semibold text-lg transition-colors hover:text-blue-800">{donor}</div>
            ))}
          </div>
        </div>
      </section>

      <section ref={sectorsRef} className={`py-16 sm:py-24 ${sectorsClasses}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center">Sector Expertise</h2>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {sectors.map((sector, index) => (
              <div key={index} className="text-center bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-800">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={featuredRef} className={`py-16 sm:py-24 ${featuredClasses}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center">Featured Projects</h2>
          <p className="mt-4 text-center text-lg text-gray-600 max-w-3xl mx-auto">
            Recent success stories showcasing our impact across diverse sectors.
          </p>
          <div className="mt-12">
            {completedTasks.map((task, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <div className="flex flex-col space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900">{task.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                        {task.client}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        {task.duration}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        {task.location}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700">{task.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-800 mb-3">Key Activities</h4>
                      <ul className="space-y-2">
                        {task.keyActivities.map((activity, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckIcon />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-800 mb-3">Outcomes</h4>
                      <ul className="space-y-2">
                        {task.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckIcon />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {task.tools.map((tool, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={approachRef} className={`py-16 sm:py-24 bg-slate-50 ${approachClasses}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900">Our Partnership Approach</h2>
              <p className="mt-4 text-lg text-gray-600">
                We believe in building long-term partnerships based on trust, collaboration, and mutual learning. Our client-centric approach ensures that we understand your unique needs and context.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-800 text-white font-bold mr-4">1</span><div><h4 className="font-semibold">Collaborative Engagement</h4><p className="text-gray-600">Working together to build your internal capacity</p></div></div>
                <div className="flex items-start"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-800 text-white font-bold mr-4">2</span><div><h4 className="font-semibold">Flexible Models</h4><p className="text-gray-600">Adapting to your specific needs and constraints</p></div></div>
                <div className="flex items-start"><span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-800 text-white font-bold mr-4">3</span><div><h4 className="font-semibold">Sustainable Solutions</h4><p className="text-gray-600">Building systems that last beyond our engagement</p></div></div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Client Success Stories</h3>
              <p className="text-gray-600">Our work has helped organizations across East Africa to:</p>
              <ul className="mt-4 space-y-3">
                  <li className="flex items-start"><CheckIcon />Improve program effectiveness by 40%+</li>
                  <li className="flex items-start"><CheckIcon />Secure additional funding through compelling impact evidence</li>
                  <li className="flex items-start"><CheckIcon />Make data-driven decisions in real-time</li>
                  <li className="flex items-start"><CheckIcon />Build internal MEAL capacity for sustainable impact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;