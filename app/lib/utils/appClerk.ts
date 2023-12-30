import { ActiveSessionResource } from "@clerk/types";

type Roles = "ADMIN" | "MEMBER";
export class AppClerk {
  static getUserRole(session: ActiveSessionResource): Roles {
    if (
      !session ||
      !session.user ||
      !session.user.organizationMemberships ||
      session.user.organizationMemberships.length === 0
    ) {
      return null; // Return null if the user is not a basic member
    }

    const organizationMemberships = session.user.organizationMemberships;

    // Loop through all organization memberships
    for (const membership of organizationMemberships) {
      if (membership.role) {
        switch (membership.role.toLowerCase()) {
          case "org:admin":
            return "ADMIN";
          case "org:member":
            return "MEMBER";
          default:
            return "MEMBER";
        }
      }
    }

    return null; // Return null if no role is found in the memberships
  }
}
