"use client";
import Image from "next/image";
import bg from "@/assets/hero-bg-2.png";
import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";

const EVENT_NAME = "GirlScript Summer of Code 2025";
const ROLE = "campus_ambassador";

const initialFormData = {
  name: "",
  about: "",
  gender: "",
  phone: "",
  college: "",
  country: "",
  city: "",
  linkedIn: "",
  github: "",
  twitterUrl: "",
  instagramUrl: "",
  portfolioUrl: "",
  discordTag: "",
  promotionPlan: "",
  previousExperience: "",
  referralCode: "",
};

export default function CampusAmbassadorApp() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("email");
  const [status, setStatus] = useState("");
  const [user, setUser] = useState(null);
  const [applicationStatus, setApplicationStatus] = useState(null);
  const [submitStatus, setSubmitStatus] = useState("");
  const [formData, setFormData] = useState(initialFormData);

  console.log(applicationStatus);

  useEffect(() => {
    let subscription;

    const init = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session) handleUser(data.session.user);
    };

    const authListener = supabase.auth.onAuthStateChange((_, session) => {
      if (session?.user) handleUser(session.user);
      else resetState();
    });

    const handleUser = async (currentUser) => {
      setUser(currentUser);
      setStep("email");
      setStatus("");
      const { data: appData, error } = await supabase
        .from("events")
        .select("status")
        .eq("participant_id", currentUser.id)
        .eq("role", ROLE)
        .eq("event_name", EVENT_NAME)
        .maybeSingle();
      if (error) console.error(error.message);
      else setApplicationStatus(appData?.status || null);
    };

    const resetState = () => {
      setUser(null);
      setStep("email");
      setStatus("");
      setApplicationStatus(null);
    };

    init();
    subscription = authListener.data.subscription;
    return () => subscription.unsubscribe();
  }, []);

  const handleAuthSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setStatus("Processing...");
      try {
        if (step === "email") {
          const { error } = await supabase.auth.signInWithOtp({ email });
          if (error) throw error;
          setStatus(`OTP sent to ${email}.`);
          setStep("otp");
        } else {
          const { data, error } = await supabase.auth.verifyOtp({
            email,
            token: otp,
            type: "email",
          });
          if (error) throw error;
          setStatus("Logged in successfully!");
          handleUser(data.user);
        }
      } catch (err) {
        setStatus(err.message);
      }
    },
    [email, otp, step]
  );

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "otp") setOtp(value);
    else setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleProfileSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setSubmitStatus("Submitting...");
      try {
        const payload = {
          full_name: formData.name,
          email: user.email,
          about: formData.about,
          gender: formData.gender,
          phone: formData.phone,
          college: formData.college,
          country: formData.country,
          city: formData.city,
          linkedin_url: formData.linkedIn,
          github_url: formData.github,
          twitter_url: formData.twitterUrl || null,
          instagram_url: formData.instagramUrl || null,
          resume_url: formData.portfolioUrl || null,
          discord_tag: formData.discordTag,
          resume_url: formData.portfolioUrl || null,
          promotion_plan: formData.promotionPlan,
          previous_experience: formData.previousExperience,
          referral_code: formData.referralCode || null,
          status: "under_review",
          role: ROLE,
          event_name: EVENT_NAME,
        };
        const { error } = await supabase.from("events").insert(payload);
        if (error) throw error;
        setSubmitStatus("Application submitted! Under review.");
        setApplicationStatus("under_review");
      } catch (err) {
        setSubmitStatus(err.message);
      }
    },
    [formData, user]
  );

  return (
    <div className="relative w-full min-h-screen font-sans text-[12px] md:text-[16px]">
      <header className="fixed top-0 left-0 w-full bg-transparent flex items-center justify-between p-8 z-80">
        <div className="text-white text-[16px] md:text-2xl">GSSoC &apos;25</div>
        <a
          href="/"
          className="text-white px-5 py-3 rounded-full bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] font-normal"
        >
          Go Back
        </a>
      </header>

      <section
        id="home"
        className="w-screen relative bg-transparent flex flex-col items-center justify-center"
      >
        <Image
          src={bg}
          alt="Background"
          className="absolute top-0 w-screen h-[300px] object-contain -z-10"
        />

        <div className="text-center text-white w-full flex flex-col items-center justify-center px-4 mt-48">
          <p className="text-lg mb-4 md:mb-8 text-[#A7ADBE] bg-[#00041F] text-[12px] inline-block px-4 py-2 rounded-full">
            Campus Ambassador Program
          </p>
          <h1 className="text-2xl md:text-6xl font-bold mb-4">
            Become An OpenSource <br /> Campus Ambassador
          </h1>
          <p className="text-[10px] md:text-sm mb-8 text-[#A7ADBE]">
            Represent your campus and be a part of the largest open-source{" "}
            <br /> community in India! Join us as a Campus Ambassador and help
            spread <br /> the word about the GirlScript Summer of Code (GSSoC)
            program.
          </p>

          {!user ? (
            <form
              onSubmit={handleAuthSubmit}
              className="mb-8 bg-[#00041F] w-full md:w-[600px] px-4 py-2 rounded-full border border-[#0E122E] flex items-center justify-center shadow-2xl shadow-blue-500/20"
            >
              {step === "email" ? (
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  value={email}
                  onChange={handleInputChange}
                  className="bg-transparent outline-none border-none text-white mr-2 w-full placeholder:text-[#A7ADBE]"
                />
              ) : (
                <input
                  name="otp"
                  type="text"
                  placeholder="Enter OTP"
                  required
                  value={otp}
                  onChange={handleInputChange}
                  className="bg-transparent outline-none border-none text-white mr-2 w-full placeholder:text-[#A7ADBE]"
                />
              )}
              <button className="bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white px-5 py-3 rounded-full font-normal w-[140px]">
                {step === "email" ? "Send OTP" : "Verify OTP"}
              </button>
            </form>
          ) : applicationStatus == "under_review" ? (
            <div className="mb-8 bg-[#00041F] p-6 rounded-lg border border-[#0E122E] md:w-3/5 w-auto text-white flex flex-col items-center shadow-2xl shadow-blue-500/20">
              <h2 className="md:text-xl font-semibold mb-2">
                Application Status
              </h2>
              <p className="w-2/3 text-[10px] md:text-[14px] text-[#A7ADBE]">
                Your application is currently under review. Thank you for
                applying!
              </p>
            </div>
          ) : applicationStatus == "rejected" ? (
            <div className="mb-8 bg-[#00041F] p-6 rounded-lg border border-[#0E122E] md:w-3/5 w-auto text-white flex flex-col items-center shadow-2xl shadow-blue-500/20">
              <h2 className="md:text-xl font-semibold mb-2">
                Application Status
              </h2>
              <p className="w-2/3 text-[10px] md:text-[14px] text-[#A7ADBE]">
                Sorry! Your application was not accepted for this year. Thank you for applying!
                For any queries, please feel reach out to us at{" "}
                <a
                  className="text-[#4C75FF]"
                  href="mailto:gssoc@girlscript.tech"
                >
                  gssoc@girlscript.tech
                </a>
                .
              </p>
            </div>
          ) : applicationStatus == "approved" ? (
            <div className="mb-8 bg-[#00041F] p-6 rounded-lg border border-[#0E122E] md:w-3/5 w-auto text-white flex flex-col items-center shadow-2xl shadow-blue-500/20">
              <h2 className="md:text-xl font-semibold mb-2">
                Congratulations! You are accepted!
              </h2>
              <p className="w-2/3 text-[10px] md:text-[14px] text-[#A7ADBE]">
                Copy your referral code and join our Discord server to get
                started.
              </p>
              <div className="flex flex-row items-center gap-8">
                <a
                  href="https://discord.gg/jxkN3Ek8XQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white px-5 py-3 rounded-full font-normal mt-8"
                >
                  Join Discord For Next Steps
                </a>
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(user?.id || "N/A")
                  }
                  className="cursor-pointer bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white px-5 py-3 rounded-full font-normal mt-8"
                >
                  Copy Referral Code
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleProfileSubmit}
              className="mb-8 bg-[#00041F] w-full p-6 rounded-lg border border-[#0E122E] md:w-3/5 text-left shadow-2xl shadow-blue-500/20"
            >
              <h2 className="text-[14px] md:text-2xl font-semibold mb-4">
                Campus Ambassador Application Form
              </h2>
              {Object.entries(initialFormData).map(([key]) => (
                <div key={key} className="mb-3">
                  <label className="block text-[10px] md:text-sm mb-1 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </label>
                  {key === "about" ||
                  key === "promotionPlan" ||
                  key === "previousExperience" ? (
                    <textarea
                      name={key}
                      rows={key === "previousExperience" ? 3 : 4}
                      placeholder={
                        key === "about"
                          ? "Tell us about yourself"
                          : key === "promotionPlan"
                          ? "Describe your promotional plan"
                          : "Share any relevant experience"
                      }
                      value={formData[key]}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 rounded-md bg-[#1A1F2E] text-white outline-none border border-[#0E122E]"
                    />
                  ) : key === "gender" ? (
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 rounded-md bg-[#1A1F2E] text-white outline-none border border-[#0E122E]"
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  ) : (
                    <input
                      name={key}
                      type={
                        [
                          "linkedIn",
                          "github",
                          "twitterUrl",
                          "instagramUrl",
                          "portfolioUrl",
                          "referralCode",
                        ].includes(key)
                          ? "url"
                          : "text"
                      }
                      placeholder={
                        key === "portfolioUrl"
                          ? "https://yourdomain.com/portfolio"
                          : key.includes("Url")
                          ? `https://${key
                              .replace(/Url/, "")
                              .toLowerCase()}.com/yourprofile`
                          : key === "instagramUrl || twitterUrl || linkedIn || github"
                          ? "optional"
                          : key === "referralCode"
                          ? "Your referral code (if any)"
                          : ""
                      }
                      value={formData[key]}
                      onChange={handleInputChange}
                      {...(![
                        "twitterUrl",
                        "instagramUrl",
                        "portfolioUrl",
                        "referralCode",
                      ].includes(key)
                        ? { required: true }
                        : {})}
                      className="w-full px-3 py-2 rounded-md bg-[#1A1F2E] text-white outline-none border border-[#0E122E]"
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white px-5 py-3 rounded-full font-normal"
              >
                Submit Application
              </button>
              {submitStatus && (
                <p className="mt-3 text-sm text-[#A7ADBE]">{submitStatus}</p>
              )}
            </form>
          )}
          {!user && status && (
            <p className="text-[10px] text-white bg-[#00041F] px-4 py-2 rounded-full mt-4">
              {status}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
