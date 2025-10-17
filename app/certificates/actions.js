"use server";

const campusAmbassadors = require("./ca.json");
const contributors = require("./contributors.json");
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
  let results = [/*...campusAmbassadors,*/ ...contributors, ...mentors, ...projectAdmins].filter((user) =>
    user.email.toLowerCase() === query
  );

  // Apply role filtering if any roles are selected
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
