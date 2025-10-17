"use server";

const certificatesData = [
  {
    full_name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "Contributor", // Campus Ambassador, Mentor, Project Admin, Contributor
    points: 250,
    issueDate: "2025-01-15",
    projects: ["Open Source CLI Tool", "React Component Library"],
  },
  {
    full_name: "John Doe",
    email: "john.doe@example.com",
    role: "Mentor",
    points: 350,
    issueDate: "2025-02-14",
    projects: ["Flight Booking System", "Math Calculator"],
  },
  {
    full_name: "Steve Smithjohn",
    email: "steve.smith@example.com",
    role: "Project Admin",
    points: 150,
    issueDate: "2025-02-23",
    projects: ["React Component Library", "Next.js Project"],
  },
  {
    full_name: "Mister John",
    email: "mister.john@example.com",
    role: "Campus Ambassador",
    points: 170,
    issueDate: "2025-02-23",
    projects: ["Some Project", "Random Project"],
  },
];

export async function searchUsers(searchQuery, selectedRoles = []) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (!searchQuery || searchQuery.trim().length < 2) {
    return [];
  }

  const query = searchQuery.toLowerCase().trim();

  // Search in user names and filter by roles
  let results = certificatesData.filter((user) =>
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
