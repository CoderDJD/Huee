export const screens = {
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
};
export type Screen = keyof typeof screens;

export interface ScreenSize {
  screen: Screen;
  size: number;
}
export const screensAsArray = Object.keys(screens).map((x) => ({
  screen: x as Screen,
  size: screens[x as Screen],
}));
