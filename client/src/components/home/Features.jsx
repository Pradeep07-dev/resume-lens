import { useState } from "react";
import { Zap, ScanText, BadgeCheck, FileDown } from "lucide-react";
import Title from "./Title";

const Features = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      id="features"
      className="flex flex-col items-center my-10 scroll-mt-12"
    >
      <div className="flex items-center gap-2 text-sm text-green-600 bg-green-400/10 rounded-full px-6 py-1.5">
        <Zap width={14} />
        <span>Simple Process</span>
      </div>

      <Title
        title="Build your resume"
        description="Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features."
      />
      <div className="flex flex-col md:flex-row items-center justify-center xl:-mt-10">
        <img
          className="max-w-2xl w-full xl:-ml-32"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
          alt=""
        />
        <div
          className="px-4 md:px-0"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div
            className={
              "flex items-center justify-center gap-6 max-w-md group cursor-pointer"
            }
          >
            <div
              className={`p-6 group-hover:bg-violet-100 border border-transparent group-hover:border-violet-300  flex gap-4 rounded-xl transition-colors ${
                !isHover ? "border-violet-300 bg-violet-100" : ""
              }`}
            >
              <ScanText className="size-6 stroke-violet-600" />
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  AI Resume Score
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Get instant feedback on your resume's strength, keyword match,
                  and ATS compatibility in real time.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-green-100 border border-transparent group-hover:border-green-300 flex gap-4 rounded-xl transition-colors">
              <BadgeCheck className="size-6 stroke-green-600" />
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  ATS-Optimized Formatting
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Every resume is automatically formatted to pass Applicant
                  Tracking Systems used by top companies.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-orange-100 border border-transparent group-hover:border-orange-300 flex gap-4 rounded-xl transition-colors">
              <FileDown className="size-6 stroke-orange-600" />
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">
                  One-Click Export
                </h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Download your polished resume as a PDF or Word file, ready to
                  send to recruiters instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
