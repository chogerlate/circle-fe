/**
 * Admin utility for identifying administrative users.
 * For testing purposes, we use a list of admin emails.
 * In production, this should be moved to a database-backed RBAC system.
 */

export const ADMIN_EMAILS = [
    'siwar@test.com', // Replace with your actual admin email
    'admin@circle.com',
];

/**
 * Checks if a user or email address is an admin.
 * @param email - The email address to check.
 * @returns boolean - True if the user is an admin.
 */
export function isAdmin(email: string | undefined | null): boolean {
    if (!email) return false;
    return ADMIN_EMAILS.includes(email.toLowerCase());
}
