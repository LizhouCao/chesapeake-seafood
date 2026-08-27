import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Chesapeake Bay Seafood & Science Adventure",
        short_name: "Seafood Adventure",
        description:
            "Explore Chesapeake Bay seafood, science, and aquaculture through interactive questions.",
        start_url: "/",
        display: "standalone",
        background_color: "#EFF5FB",
        theme_color: "#0369a1",
        orientation: "any",
    };
}