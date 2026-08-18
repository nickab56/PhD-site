import React from 'react';

const classes = {
  wrapper: 'p-8 relative max-w-screen-xl xs:p-24',
  outerWrapper: 'relative',
  svg: 'hidden fixed transform right-0 top-5 z-0 xl:block',
};

const Layout = ({ children }) => {
  return (
    <div className={classes.outerWrapper}>
      <svg
        className={classes.svg}
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
      >
        <defs>
          {/* IU Crimson dot pattern */}
          <pattern
            id="dotPattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              fill="#990000"
              opacity="0.28"
            />
          </pattern>

          {/* Stronger left-to-right fade */}
          <linearGradient
            id="dotFade"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="18%" stopColor="white" stopOpacity="0.08" />
            <stop offset="35%" stopColor="white" stopOpacity="0.22" />
            <stop offset="55%" stopColor="white" stopOpacity="0.48" />
            <stop offset="75%" stopColor="white" stopOpacity="0.75" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>

          {/* Apply the fade to the dots */}
          <mask
            id="dotFadeMask"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="404"
            height="784"
          >
            <rect
              width="404"
              height="784"
              fill="url(#dotFade)"
            />
          </mask>
        </defs>

        <rect
          width="404"
          height="784"
          fill="url(#dotPattern)"
          mask="url(#dotFadeMask)"
        />
      </svg>

      <div className={classes.wrapper}>{children}</div>
    </div>
  );
};

export default Layout;