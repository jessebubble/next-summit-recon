// Client-safe Tailwind motion fragments.

// Arrow that drifts up-right when its `group` link is hovered. Small travel and
// a symmetric curve keep it reading as a hop rather than a twitch.
export const ARROW_MOTION =
  "transition-[transform,color] duration-300 ease-in-out motion-reduce:transition-none group-hover:-translate-y-0.5 group-hover:translate-x-0.5";
