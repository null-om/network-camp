/*
 * Session registry — the single source of truth for the camp sessions.
 * Classic script (no ES modules) so the site also works when opened from disk.
 *
 * To publish a session: put its standalone HTML in /sessions and set `href`
 * to its relative path, e.g. href: "sessions/session-01-intro.html".
 * href: null  => shown as "Coming soon", not clickable.
 */
window.CAMP_SESSIONS = [
  { id: "01", title: "Introduction to Networking",
    description: "Network fundamentals, components, and how devices communicate.", href: "sessions/index.html" },
  { id: "02", title: "IP Addressing & Subnetting",
    description: "IPv4, subnet masks, and practical network division.", href: null },
  { id: "03", title: "Switching & VLANs",
    description: "How switches work, and isolating devices with VLANs.", href: null },
  { id: "04", title: "Routing",
    description: "The role of the router and connecting different networks.", href: null },
  { id: "05", title: "Multilayer Switch & DHCP",
    description: "Inter-VLAN routing and automatic IP address assignment.", href: null },
  { id: "06", title: "Wireless Networking",
    description: "Wi-Fi basics, access points, and securing wireless networks.", href: null }
];
