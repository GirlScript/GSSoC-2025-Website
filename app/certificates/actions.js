"use server";

import certificatesData from "./certificates-data.js";

export async function searchUsers(searchQuery, selectedRoles = []) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  if (!searchQuery || searchQuery.trim().length < 2) {
    return [];
  }

  const query = searchQuery.toLowerCase().trim();
  
  // Search in user names and filter by roles
  let results = certificatesData.filter(user => 
    user.user.toLowerCase().includes(query)
  );

  // Apply role filtering if any roles are selected
  if (selectedRoles.length > 0) {
    results = results.filter(user => 
      selectedRoles.includes(user.role)
    );
  }

  // Sort results by points (highest first) and then by name
  results.sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }
    return a.user.localeCompare(b.user);
  });

  return results;
}
