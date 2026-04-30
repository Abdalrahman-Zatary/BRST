import { ScrollTrigger } from 'gsap/all';

export const replayTimelineOnEnter = (
  timeline,
  trigger,
  {
    start = "top 100%",
    end = "bottom top",
    markers = false,
  } = {},
) => {
  return ScrollTrigger.create({
    trigger,
    start,
    end,
    markers,
    onEnter: () => timeline.restart(true, false),
    onLeaveBack: () => timeline.reverse(0),
  });
};