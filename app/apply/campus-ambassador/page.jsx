"use client";
import Image from "next/image";
import bg from "@/assets/hero-bg-2.png";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const CA = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("email");
  const [status, setStatus] = useState("");
  const [user, setUser] = useState(null);
  const [applicationStatus, setApplicationStatus] = useState(null);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [github, setGithub] = useState("");
  const [twitterUrl, setTwitterUrl] = useState("");
  const [discordTag, setDiscordTag] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [promotionPlan, setPromotionPlan] = useState("");
  const [previousExperience, setPreviousExperience] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        const currentUser = data.session.user;
        setUser(currentUser);
        const { data: appData, error: appError } = await supabase
          .from("events")
          .select("application_id, status")
          .eq("participant_id", currentUser.id)
          .maybeSingle();
        if (appError) {
          console.error("Error checking application:", appError.message);
        } else if (appData) {
          setApplicationStatus(appData.status || "under_review");
        }
      }
    };
    checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          const currentUser = session.user;
          setUser(currentUser);
          setStep("email");
          setStatus("");
          const { data: appData, error: appError } = await supabase
            .from("events")
            .select("application_id, status")
            .eq("participant_id", currentUser.id)
            .maybeSingle();
          if (appError) {
            console.error("Error checking application:", appError.message);
          } else if (appData) {
            setApplicationStatus(appData.status || "under_review");
          }
        } else {
          setUser(null);
          setStep("email");
          setStatus("");
          setApplicationStatus(null);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleSubmitAuth = async (e) => {
    e.preventDefault();
    setStatus("Processing...");

    if (step === "email") {
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) {
        setStatus(`Error sending OTP: ${error.message}`);
      } else {
        setStatus(`OTP sent to ${email}. Please check your inbox.`);
        setStep("otp");
      }
    } else if (step === "otp") {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: "email",
      });
      if (error) {
        setStatus(`Error verifying OTP: ${error.message}`);
      } else {
        setStatus("Logged in successfully!");
        setUser(data.user);
      }
    }
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("Submitting...");

    try {
      const { error } = await supabase.from("events").insert({
        full_name: name,
        email,
        about,
        gender,
        phone,
        college,
        country,
        city,
        linkedin_url: linkedIn,
        github_url: github,
        twitter_url: twitterUrl,
        discord_tag: discordTag,
        resume_url: resumeUrl,
        promotion_plan: promotionPlan,
        previous_experience: previousExperience,
        status: "under_review",
        role: "campus_ambassador",
        event_name: "GirlScript Summer of Code 2025",
      });
      if (error) console.error("Error saving application:", error.message);
      if (error) throw error;
      else {
        console.log("Application saved successfully");
      }

      setSubmitStatus(
        "Application submitted! Your application is under review."
      );
      setApplicationStatus("under_review");
    } catch (err) {
      setSubmitStatus(`Error saving application: ${err.message}`);
    }
  };

  return (
    <div className="relative w-full min-h-screen font-sans text-[12px] md:text-[16px]">
      <header className="fixed top-0 left-0 w-full bg-transparent flex items-center justify-between p-8 z-80">
        <div className="text-white text-[16px] md:text-2xl">GSSoC &apos;25</div>
        <a
          href="/"
          className="text-white px-5 py-3 rounded-full bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] font-normal cursor-pointer"
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
              onSubmit={handleSubmitAuth}
              className="mb-8 bg-[#00041F] w-full md:w-[300px] px-4 py-2 rounded-full border border-[#0E122E] flex items-center justify-center shadow-2xl shadow-blue-500/20"
            >
              {step === "email" ? (
                <input
                  className="bg-transparent outline-none border-none text-white mr-2 w-full placeholder:text-[#A7ADBE]"
                  placeholder="Enter Your Email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <input
                  className="bg-transparent outline-none border-none text-white mr-2 w-full placeholder:text-[#A7ADBE]"
                  placeholder="Enter OTP"
                  type="text"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              )}
              <button className="bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white px-5 py-3 rounded-full font-normal cursor-pointer w-[140px]">
                {step === "email" ? "Send OTP" : "Verify OTP"}
              </button>
            </form>
          ) : applicationStatus === "under_review" ? (
            <div className="mb-8 bg-[#00041F] p-6 rounded-lg border border-[#0E122E] md:w-3/5 w-auto text-white flex flex-col items-center shadow-2xl shadow-blue-500/20">
              <h2 className="md:text-xl font-semibold mb-2">
                Application Status
              </h2>
              <p className="w-2/3 text-[10px] md:text-[14px] text-[#A7ADBE]">
                Your application is currently under review. Thank you for
                applying!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleProfileSubmit}
              className="mb-8 bg-[#00041F] w-full p-6 rounded-lg border border-[#0E122E] md:w-3/5 text-left shadow-2xl shadow-blue-500/20"
            >
              <h2 className="text-[14px] md:text-2xl font-semibold mb-4">
                Campus Ambassador Application Form
              </h2>

              <label className="block text-[10px] md:text-sm mb-1">Name</label>
              <input
                type="text"
                className="w-full mb-3 px-3 py-2 rounded-md bg-[#1A1F2E] text-white outline-none border border-[#0E122E]"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label className="block text-[10px] md:text-sm mb-1">
                Email (auto-detected)
              </label>
              <input
                type="email"
                className="w-full mb-3 px-3 py-2 rounded-md bg-[#1A1F2E] text-gray-400 outline-none border border-[#0E122E]"
                value={user ? user.email : email}
                readOnly
              />

              <label className="block text-[10px] md:text-sm mb-1">
                About You
              </label>
              <textarea
                className="w-full mb-3 px-3 py-2 rounded-md bg-[#1A1F2E] text-white outline-none border border-[#0E122E]"
                placeholder="Tell us about yourself"
                rows={4}
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                required
              />

              <label className="block text-[10px] md:text-sm mb-1">
                Gender
              </label>
              <select
                className="w-full mb-3 px-3 py-2 rounded-md bg-[#1A1F2E] text-white outline-none border border-[#0E122E]"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <label className="block text-[10px] md:text-sm mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full mb-3 px-3 py-2 rounded-md bg-[#1A1F2E] text-white outline-none border border-[#0E122E]"
                placeholder="+1234567890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <label className="block text-[10px] md:text-sm mb-1">
                College
              </label>
              <input
                type="text"
                className="w-full mb-3 px-3 py-2 rounded-md bg-[#1A1F2E] text-white outline-none border border-[#0E122E]"
                placeholder="Your college/university"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                required
              />

              <label className="block text-[10px] md:text-sm mb-1">
                Country
              </label>
              <input
                type="text"
                className="w-full mb-3 px-3 py-2 rounded-md bg-[#1A1F2E] text-white outline-none border border-[#0E122E]"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />

              <label className="block text-[10px] md:text-sm mb-1">City</label>
              <input
                type="text"
                className="w-full mb-3 px-3 py-2 rounded-md bg-[#1A1F2E] text-white outline-none border border-[#0E122E]"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />

              <label className="block text-[10px] md:text-sm mb-1">
                LinkedIn URL
              </label>
              <input
                type="url"
                className="w-full mb-3 px-3 py-2 rounded-md bg-[#1A1F2E] text-white outline-none border border-[#0E122E]"
                placeholder="https://linkedin.com/in/yourprofile"
                value={linkedIn}
                onChange={(e) => setLinkedIn(e.target.value)}
              />

              <label className="block text-[10px] md:text-sm mb-1">
                GitHub URL
              </label>
              <input
                type="url"
                className="w-full mb-3 px-3 py-2 rounded-md bg-[#1A1F2E] text-white outline-none border border-[#0E122E]"
                placeholder="https://github.com/yourusername"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />

              <label className="block text-[10px] md:text-sm mb-1">
                Twitter URL
              </label>
              <input
                type="url"
                className="w-full mb-3 px-3 py-2 rounded-md bg-[#1A1F2E] text-white outline-none border border-[#0E122E]"
                placeholder="https://twitter.com/yourhandle"
                value={twitterUrl}
                onChange={(e) => setTwitterUrl(e.target.value)}
              />

              <label className="block text-[10px] md:text-sm mb-1">
                Discord Tag
              </label>
              <input
                type="text"
                className="w-full mb-3 px-3 py-2 rounded-md bg-[#1A1F2E] text-white outline-none border border-[#0E122E]"
                placeholder="username#1234"
                value={discordTag}
                onChange={(e) => setDiscordTag(e.target.value)}
              />

              <label className="block text-[10px] md:text-sm mb-1">
                Resume/Portfolio URL
              </label>
              <input
                type="url"
                className="w-full mb-3 px-3 py-2 rounded-md bg-[#1A1F2E] text-white outline-none border border-[#0E122E]"
                placeholder="https://yourdomain.com/portfolio"
                value={resumeUrl}
                onChange={(e) => setResumeUrl(e.target.value)}
              />

              <label className="block text-[10px] md:text-sm mb-1">
                How will you promote GSSoC'25 and open-source literacy on
                campus?
              </label>
              <textarea
                className="w-full mb-3 px-3 py-2 rounded-md bg-[#1A1F2E] text-white outline-none border border-[#0E122E]"
                placeholder="Describe your promotional plan"
                rows={4}
                value={promotionPlan}
                onChange={(e) => setPromotionPlan(e.target.value)}
                required
              />

              <label className="block text-[10px] md:text-sm mb-1">
                Previous experience with GirlScript or other open-source
                programs
              </label>
              <textarea
                className="w-full mb-4 px-3 py-2 rounded-md bg-[#1A1F2E] text-white outline-none border border-[#0E122E]"
                placeholder="Share any relevant experience"
                rows={3}
                value={previousExperience}
                onChange={(e) => setPreviousExperience(e.target.value)}
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white px-5 py-3 rounded-full font-normal cursor-pointer"
              >
                Submit Application
              </button>

              {submitStatus && (
                <p className="mt-3 text-sm text-[#A7ADBE]">{submitStatus}</p>
              )}
            </form>
          )}

          {!user && status && (
            <p className="text-[10px] text-white bg-[#00041F] px-4 py-2 rounded-full">
              {status}
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default CA;
