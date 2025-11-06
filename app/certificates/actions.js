"use server";

const campusAmbassadors = require("./ca.json");
// const contributors = require("./contributors.json");
const contributors = require("../leaderboard/contributors-data.json");
const mentors = require("./mentors.json");
const projectAdmins = require("./pa.json");

export async function searchUsers(searchQuery, selectedRoles = []) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (!searchQuery || searchQuery.trim().length < 2) {
    return [];
  }

  const query = searchQuery.toLowerCase().trim();

  // Search in user names and filter by roles
  // The original filter includes all contributors, but if the same GitHub username/email appears multiple times
  // (e.g., user object appears more than once in contributors-data.json with the same github_username/email/full_name),
  // you'll get duplicate matches. To prevent this, deduplicate after filtering.

  let usersArray = [
    // ...campusAmbassadors, // Uncomment if needed
    ...contributors,
    ...mentors,
    ...projectAdmins
  ];

  // Filter to match the search query
  let results = usersArray.filter((user) => {
    const emailMatch = user.email && user.email.toLowerCase() === query;
    // for 'contributor', allow github_username/full_name match; for others, skip these checks
    const githubMatch = user.role === "contributor" && user.github_username && user.github_username.toLowerCase() === query;
    const nameMatch = user.role === "contributor" && user.full_name && user.full_name.toLowerCase() === query;
    return emailMatch || githubMatch || nameMatch;
  });

  // Deduplicate by primary unique keys (github_username or email)
  const seen = new Set();
  results = results.filter(user => {
    // prefer github_username as primary key if present, else use email
    const key = user.github_username
      ? `gh:${user.github_username.toLowerCase()}`
      : user.email
      ? `em:${user.email.toLowerCase()}`
      : "";
    if (!key || seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });

  // Apply role filtering if any roles are selected
  console.log("selectedRoles", selectedRoles);
  if (selectedRoles.length > 0) {
    results = results.filter((user) => selectedRoles.includes(user.role));
  }

  // Sort results by points (highest first) and then by name
  results.sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }
    return a.full_name.localeCompare(b.full_name);
  });

  return results;
}
