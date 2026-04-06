import {
  Mail,
  Phone,
  MapPin,
  // Linkedin,
  Globe,
  // Github,
  Award,
  ExternalLink,
} from "lucide-react";

const MinimalImageTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white text-zinc-800">
      <div className="grid grid-cols-3">
        <div className="col-span-1 py-7">
          {data.personal_info?.image &&
          typeof data.personal_info.image === "string" ? (
            <div>
              <img
                src={data.personal_info.image}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full mx-auto"
                style={{ background: accentColor + "70" }}
              />
            </div>
          ) : data.personal_info?.image &&
            typeof data.personal_info.image === "object" ? (
            <div>
              <img
                src={URL.createObjectURL(data.personal_info.image)}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full mx-auto"
              />
            </div>
          ) : null}
        </div>

        <div className="col-span-2 flex flex-col justify-center py-7 px-4">
          <h1 className="text-4xl font-bold text-zinc-700 tracking-widest">
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          <p className="uppercase text-zinc-600 font-medium text-sm tracking-widest">
            {data?.personal_info?.profession || ""}
          </p>
        </div>

        <aside className="col-span-1 border-r border-zinc-400 p-6 pt-0">
          <section className="mb-4">
            <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
              CONTACT
            </h2>
            <div className="space-y-2 text-sm flex flex-col items-start justify-center">
              {data.personal_info?.phone && (
                <div className="flex items-center gap-2">
                  <Phone size={14} style={{ color: accentColor }} />
                  <span>{data.personal_info.phone}</span>
                </div>
              )}
              {data.personal_info?.email && (
                <div className="flex items-center gap-2">
                  <a
                    target="_blank"
                    href={`mailto:${data.personal_info?.email}`}
                    className="flex items-center gap-2 break-all"
                  >
                    <Mail size={15} style={{ color: accentColor }} />
                    <span>{data.personal_info.email}</span>
                  </a>
                </div>
              )}
              {data.personal_info?.location && (
                <div className="flex items-center gap-2">
                  <MapPin size={14} style={{ color: accentColor }} />
                  <span>{data.personal_info.location}</span>
                </div>
              )}
              {data.personal_info?.linkedin && (
                <a
                  target="_blank"
                  href={
                    data.personal_info?.linkedin.startsWith("https://")
                      ? data.personal_info?.linkedin
                      : `https://${data.personal_info?.linkedin}`
                  }
                  className="flex items-center gap-2"
                >
                  {/* <Linkedin size={16} style={{ color: accentColor }} /> */}

                  <svg
                    size={16}
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
                  <span className="break-all">
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
                  className="flex items-center gap-2"
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
                  <span className="break-all">
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
                  className="flex items-center gap-2"
                >
                  <Globe size={14} style={{ color: accentColor }} />
                  <span className="break-all">
                    {data.personal_info.website.split("https://")[1]
                      ? data.personal_info.website.split("https://")[1]
                      : data.personal_info.website}
                  </span>
                </a>
              )}
            </div>
          </section>

          {data.education && data.education.length > 0 && (
            <section className="mb-2">
              <h2 className="text-sm font-semibold tracking-widest text-zinc-600">
                EDUCATION
              </h2>
              <div className="space-y-2 text-sm">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <p className="font-semibold">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </p>
                    <p className="text-zinc-600">{edu.institution}</p>
                    <div className="flex justify-between items-center text-xs text-gray-600">
                      <span>{formatDate(edu.graduation_date)}</span>
                      {edu.gpa && <span>GPA: {edu.gpa}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.skills && data.skills.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-2">
                SKILLS
              </h2>
              <ul className="text-sm flex flex-wrap gap-1">
                {data.skills.map((skill, index) => (
                  <li className="marker:ml-0.5" key={index}>
                    • {skill}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </aside>

        <main className="col-span-2 p-6 pt-0">
          {data.professional_summary && (
            <section className="mb-2">
              <h2
                className="text-sm font-semibold tracking-widest"
                style={{ color: accentColor }}
              >
                SUMMARY
              </h2>
              <p className="text-zinc-700 leading-relaxed text-sm">
                {data.professional_summary}
              </p>
            </section>
          )}

          {data.experience && data.experience.length > 0 && (
            <section>
              <h2
                className="text-sm font-semibold tracking-widest"
                style={{ color: accentColor }}
              >
                EXPERIENCE
              </h2>
              <div className="space-y-2 mb-1">
                {data.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-zinc-900 text-sm">
                        {exp.position}
                      </h3>
                      <span className="text-xs text-zinc-500">
                        {formatDate(exp.start_date)} -{" "}
                        {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: accentColor }}>
                      {exp.company}
                    </p>
                    {exp.description && (
                      <ul className="list-disc list-inside text-sm text-zinc-700 leading-relaxed space-y-1">
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
            <section className="mb-1">
              <h2
                className="text-sm uppercase tracking-widest font-semibold"
                style={{ color: accentColor }}
              >
                PROJECTS
              </h2>
              <div className="space-y-1">
                {data.project.map((project, index) => (
                  <div key={index}>
                    <h3 className="text-md text-zinc-800 text-sm font-semibold">
                      {project.name}
                      {project.link && (
                        <span className="text-gray-600 font-normal cursor-pointer">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center"
                          >
                            <ExternalLink
                              size={12}
                              className="ml-1 opacity-75"
                            />
                          </a>
                        </span>
                      )}
                    </h3>
                    <p className="text-sm" style={{ color: accentColor }}>
                      {project.type}
                    </p>
                    {project.description && (
                      <ul className="list-disc list-inside text-sm text-zinc-700 space-y-1">
                        {project.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
          {data.certification && data.certification.length > 0 && (
            <section>
              <h2
                className="text-sm uppercase tracking-widest font-semibold"
                style={{ color: accentColor }}
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
                        <div className="flex justify-between items-start text-sm">
                          <h3 className="text-gray-900 leading-tight">
                            {cert.credential_url ? (
                              <div className="flex items-center">
                                {cert.certificate_name}

                                <p className="text-sm italic ml-1">
                                  {cert.issuer}
                                </p>

                                <a
                                  href={cert.credential_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLink
                                    size={12}
                                    className="ml-1 opacity-75 shrink-0"
                                  />
                                </a>
                              </div>
                            ) : (
                              cert.certificate_name
                            )}
                          </h3>
                          <p className="text-gray-600 shrink-0 ml-4">
                            {formatDate(cert.issue_date)}
                          </p>
                        </div>

                        {cert.description && (
                          <p className="text-gray-700 leading-relaxed text-sm">
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
        </main>
      </div>
    </div>
  );
};

export default MinimalImageTemplate;
