import {
  Award,
  ExternalLink,
  // Github,
  Globe,
  // Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const ModernProTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };
  return (
    <div className="max-w-5xl mx-auto bg-white text-zinc-800 py-3 m-0">
      <header className="flex border-b border-gray-300">
        <div className="w-1/4 shrink-0 px-6 py-2">
          <div className="w-28 h-28 overflow-hidden rounded-md shadow-md">
            {data.personal_info?.image ? (
              <img
                src={data.personal_info.image}
                style={{ backgroundColor: accentColor }}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                [Image]
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center w-3/4 py-4 pr-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-0.5">
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          <p className="text-xl font-medium text-gray-600 mb-1">
            {data.personal_info?.profession || ""}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 text-sm text-gray-600 border-t border-gray-200 pt-2">
            {data.personal_info?.location && (
              <div className="flex items-center gap-1">
                <MapPin size={14} style={{ color: accentColor }} />
                <span>{data.personal_info.location}</span>
              </div>
            )}
            {data.personal_info?.phone && (
              <div className="flex items-center gap-1">
                <Phone size={14} style={{ color: accentColor }} />
                <span>{data.personal_info.phone}</span>
              </div>
            )}
            {data.personal_info?.email && (
              <a
                href={`mailto:${data.personal_info.email}`}
                className="flex items-center gap-1"
              >
                <Mail size={14} style={{ color: accentColor }} />
                <span>{data.personal_info.email}</span>
              </a>
            )}
            {data.personal_info?.linkedin && (
              <a
                target="_blank"
                href={
                  data.personal_info?.linkedin.startsWith("https://")
                    ? data.personal_info?.linkedin
                    : `https://${data.personal_info?.linkedin}`
                }
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                {/* <Linkedin size={14} style={{ color: accentColor }} /> */}
                <svg
                  size={14}
                  style={{ color: accentColor }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect width="256" height="256" fill="#0a66c2" rx="60" />
                    <path
                      fill="#fff"
                      d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                    />
                  </g>
                </svg>
                <span className="truncate">
                  {data.personal_info.linkedin.split("https://")[1]
                    ? data.personal_info.linkedin.split("https://")[1]
                    : data.personal_info.linkedin}
                </span>
              </a>
            )}
            {data.personal_info?.github && (
              <a
                target="_blank"
                href={
                  data.personal_info?.github.startsWith("https://")
                    ? data.personal_info?.github
                    : `https://${data.personal_info?.github}`
                }
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                {/* <Github size={14} style={{ color: accentColor }} /> */}
                <svg
                  size={14}
                  style={{ color: accentColor }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect width="256" height="256" fill="#f4f2ed" rx="60" />
                    <path
                      fill="#161614"
                      d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30M65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508m4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078m3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406m5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555m7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048m8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459m8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097"
                    />
                  </g>
                </svg>
                <span className="truncate">
                  {data.personal_info.github.split("https://")[1]
                    ? data.personal_info.github.split("https://")[1]
                    : data.personal_info.github}
                </span>
              </a>
            )}
            {data.personal_info?.website && (
              <a
                target="_blank"
                href={
                  data.personal_info?.website.startsWith("https://")
                    ? data.personal_info?.website
                    : `https://${data.personal_info?.website}`
                }
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Globe size={14} style={{ color: accentColor }} />
                <span className="truncate">
                  {data.personal_info.website.split("https://")[1]
                    ? data.personal_info.website.split("https://")[1]
                    : data.personal_info.website}
                </span>
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-3 divide-x divide-gray-300">
        <main className="col-span-2 px-6 py-4 space-y-2">
          {data.professional_summary && (
            <section>
              <h2
                className="text-lg font-bold tracking-wider mb-1 text-gray-900 border-b-2"
                style={{ borderColor: accentColor }}
              >
                PROFILE
              </h2>
              <p className="text-sm leading-relaxed text-zinc-700">
                {data.professional_summary}
              </p>
            </section>
          )}

          {data.experience && data.experience.length > 0 && (
            <section>
              <h2
                className="text-lg font-bold tracking-wider mb-1 text-gray-900 border-b-2"
                style={{ borderColor: accentColor }}
              >
                EXPERIENCE
              </h2>
              <div className="space-y-1">
                {data.experience.map((exp, index) => (
                  <div key={index} className="pt-1">
                    <div className="flex justify-between items-start text-sm">
                      <h3 className="font-bold text-gray-900">
                        {exp.company}{" "}
                        <span className="font-normal text-gray-600">
                          — {exp.position}
                        </span>
                      </h3>
                      <span className="text-xs font-medium text-gray-500 whitespace-nowrap">
                        {formatDate(exp.start_date)} -{" "}
                        {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </span>
                    </div>
                    {exp.description && (
                      <ul className="list-disc list-inside text-xs text-zinc-700 leading-relaxed space-y-1 mt-1 ml-4">
                        {exp.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.project && data.project.length > 0 && (
            <section>
              <h2
                className="text-lg font-bold tracking-wider mb-1 text-gray-900 border-b-2"
                style={{ borderColor: accentColor }}
              >
                PROJECTS
              </h2>
              <div className="space-y-1">
                {data.project.map((proj, index) => (
                  <div key={index} className="pt-1">
                    <h3 className="font-bold text-sm text-gray-900 flex items-center gap-0.5">
                      {proj.name}
                      <span className="text-gray-600 font-normal">
                        ({proj.type})
                      </span>
                      {proj.link && (
                        <span className="text-gray-600 font-normal cursor-pointer">
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center hover:text-indigo-600 transition duration-150"
                          >
                            <ExternalLink
                              size={12}
                              className="ml-1 opacity-75"
                            />
                          </a>
                        </span>
                      )}
                    </h3>
                    {proj.description && (
                      <ul className="list-disc list-inside text-xs text-zinc-700 leading-relaxed space-y-1 mt-1 ml-4">
                        {proj.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>

        <aside className="col-span-1 px-6 py-4 space-y-2">
          {data.education && data.education.length > 0 && (
            <section>
              <h2
                className="text-lg font-bold tracking-wider mb-2 text-gray-900 border-b-2"
                style={{ borderColor: accentColor }}
              >
                EDUCATION
              </h2>
              <div className="space-y-1 text-sm">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <p className="font-semibold text-gray-900">
                      {edu.degree || "Bachelor of Technology"}
                    </p>
                    <p className="text-gray-600 text-xs italic">
                      {edu.field && `${edu.field} • `}
                      {edu.institution || "University Name"}
                    </p>
                    <div className="text-xs text-gray-500">
                      {formatDate(edu.graduation_date)}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.skills && data.skills.length > 0 && (
            <section>
              <h2
                className="text-lg font-bold tracking-wider mb-2 text-gray-900 border-b-2"
                style={{ borderColor: accentColor }}
              >
                SKILLS
              </h2>

              {(() => {
                const frontendKeywords = [
                  "react",
                  "javascript",
                  "html",
                  "css",
                  "typescript",
                  "angular",
                  "vue",
                ];
                const frontendSkills = data.skills.filter((s) =>
                  frontendKeywords.some((keyword) =>
                    s.toLowerCase().includes(keyword)
                  )
                );
                return (
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-gray-900">
                      Front-End
                    </p>
                    <p className="text-xs text-zinc-700">
                      {frontendSkills.join(", ")}
                    </p>
                  </div>
                );
              })()}

              {(() => {
                const backendKeywords = [
                  "node",
                  "express",
                  "nest",
                  "sql",
                  "mongo",
                  "postgre",
                  "dynamo",
                  "graphql",
                  "restful",
                  "mysql",
                  "postgresql",
                  "mongodb",
                ];
                const backendSkills = data.skills.filter((s) =>
                  backendKeywords.some((keyword) =>
                    s.toLowerCase().includes(keyword)
                  )
                );
                return (
                  <div className="space-y-1 pt-1">
                    <p className="text-sm font-semibold text-gray-900">
                      Back-End / Databases
                    </p>
                    <p className="text-xs text-zinc-700">
                      {backendSkills.join(", ")}
                    </p>
                  </div>
                );
              })()}

              {(() => {
                const devopsKeywords = [
                  "aws",
                  "azure",
                  "docker",
                  "kubernetes",
                  "git",
                  "github",
                  "bitbucket",
                  "lambda",
                  "s3",
                  "ec2",
                  "cognito",
                  "ci/cd",
                  "deployment",
                  "cicd",
                ];
                const devopsSkills = data.skills.filter((s) =>
                  devopsKeywords.some((keyword) =>
                    s.toLowerCase().includes(keyword)
                  )
                );
                return (
                  <div className="space-y-1 pt-1">
                    <p className="text-sm font-semibold text-gray-900">
                      DevOps / Cloud
                    </p>
                    <p className="text-xs text-zinc-700">
                      {devopsSkills.join(", ")}
                    </p>
                  </div>
                );
              })()}

              {(() => {
                const allCategorizedKeywords = [
                  // Front-End
                  "react",
                  "javascript",
                  "html",
                  "css",
                  "typescript",
                  "angular",
                  "vue",
                  // Back-End / Databases
                  "node",
                  "express",
                  "nest",
                  "sql",
                  "mongo",
                  "postgre",
                  "dynamo",
                  "graphql",
                  "restful",
                  "mysql",
                  "postgresql",
                  "mongodb",
                  // DevOps / Cloud
                  "aws",
                  "azure",
                  "docker",
                  "kubernetes",
                  "git",
                  "github",
                  "bitbucket",
                  "lambda",
                  "s3",
                  "ec2",
                  "cognito",
                  "ci/cd",
                  "deployment",
                  "cicd",
                  // Generic development/methodology terms that should be filtered out
                  "development",
                  "architecture",
                  "methodologies",
                  "agile",
                  "scrum",
                  "lifecyle",
                  "api",
                ];

                const otherSkills = data.skills.filter(
                  (s) =>
                    !allCategorizedKeywords.some((keyword) =>
                      s.toLowerCase().includes(keyword.toLowerCase())
                    )
                );

                if (otherSkills.length > 0) {
                  return (
                    <div className="space-y-1 pt-1">
                      <p className="text-sm font-semibold text-gray-900">
                        Other Skills / Methodologies
                      </p>
                      <p className="text-xs text-zinc-700">
                        {otherSkills.join(", ")}
                      </p>
                    </div>
                  );
                }
                return null;
              })()}
            </section>
          )}
          {data.certification && data.certification.length > 0 && (
            <section className="pt-4">
              <h2
                className="text-lg font-bold tracking-wider mb-3 text-gray-900 border-b-2"
                style={{ borderColor: accentColor }}
              >
                CERTIFICATIONS
              </h2>

              <div className="space-y-1">
                {data.certification.map((cert, index) => {
                  return (
                    <div key={index} className="flex space-x-2">
                      <Award
                        size={16}
                        className="mt-1 shrink-0"
                        style={{ color: accentColor }}
                      />

                      <div className="grow">
                        <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                          {cert.credential_url ? (
                            <a
                              href={cert.credential_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center hover:text-indigo-600 transition duration-150"
                              title={`View certificate from ${cert.issuer}`}
                            >
                              {cert.certificate_name}
                              <ExternalLink
                                size={12}
                                className="ml-1 opacity-75"
                              />
                            </a>
                          ) : (
                            cert.certificate_name
                          )}
                        </h3>

                        <p className="text-xs text-zinc-600 mt-0.5">
                          <span className="font-medium">{cert.issuer}</span> |
                          Issued: {formatDate(cert.issue_date)}
                        </p>

                        {cert.description && (
                          <p className="text-xs text-zinc-700 italic">
                            {cert.description}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </aside>
      </div>
    </div>
  );
};

export default ModernProTemplate;
