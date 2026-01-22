import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

type TeamMember = {
  name: string;
  role: string;
  description: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Team Member 1",
    role: "Founder",
    description: "Responsible for vision, partnerships, and growth strategy.",
  },
  {
    name: "Team Member 2",
    role: "Operations Head",
    description: "Manages on-ground execution, routing, and support workflows.",
  },
  {
    name: "Team Member 3",
    role: "Tech Lead",
    description: "Handles platform development, reliability, and product delivery.",
  },
];

export default function Team() {
  return (
    <section className="py-20 bg-orange-50">
      <Container>
        <SectionTitle
          title="Our Team"
          subtitle="A focused team working to improve logistics execution and trip visibility."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-orange-200 rounded-2xl shadow p-7 hover:shadow-lg transition"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold text-lg">
                  {member.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-orange-600">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mt-5 leading-relaxed">
                {member.description}
              </p>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-orange-100 flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  Team • SLMS Platform
                </span>
                <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-semibold">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
