export function elevation(e: number): string {
    return `box-shadow: 0 ${e * 4}px ${e * 10}px rgba(0, 0, 0, ${e * 0.04})`;
  }
  
  export function backgroundImage(e: string): string {
    return `
      background-image: url('${e}');
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat
    `;
  }
  
  /* cspell:disable */
  export function backgroundGradient(colors: { light: string; dark: string }): string {
    return `
      background-image: radial-gradient(
        farthest-side at 5% 5%,
        ${colors.light} 0%,
        ${colors.dark} 100%
      );
      background: ${colors.light};
      background: -moz-radial-gradient(
        farthest-side at 5% 5%,
        ${colors.light} 0%,
        ${colors.dark} 100%
      );
      background: -webkit-radial-gradient(
        farthest-side at 5% 5%,
        ${colors.light} 0%,
        ${colors.dark} 100%
      );
      background: radial-gradient(
        farthest-side at 5% 5%,
        ${colors.light} 0%,
        ${colors.dark} 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${colors.light}', endColorstr='${colors.dark}',GradientType=1 );
    `;
  }
  /* cspell:enable */
  
  export function blur(val: number): string {
    return `
      -webkit-filter: blur(${val}px);
      -moz-filter: blur(${val}px);
      -o-filter: blur(${val}px);
      -ms-filter: blur(${val}px);
      filter: blur(${val}px);
    `;
  }
  
  export function backgroundCover(e: string): string {
    return `
      background-image: url('${e}');
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat
    `;
  }
  
  export function loaderAnimation(): string {
    return `
      animation: loaderAnimation 2s linear infinite;
  
      @keyframes loaderAnimation {
        0% {
          background-color: var(--color-primary-dark);
        }
        50% {
          background-color: var(--color-primary);
        }
        100% {
          background-color: var(--color-primary-dark);;
        }
      }
    `;
  }
  
  /* cspell:disable */
  export function verticalGradient({ light, dark }: { light: string; dark: string }): string {
    return `
    backgroundGradient-image: linear-gradient(90deg, ${light} 0%, ${dark} 100%);
    background: ${light};
    background: -moz-linear-gradient(90deg, ${light} 0%, ${dark} 100%);
    background: linear-gradient(90, ${light} 0%, ${dark} 100%);
    background: -webkit-linear-gradient(90deg, ${light} 0%, ${dark} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${light}', endColorstr='${dark}',GradientType=1 );
    `;
  }
  /* cspell:enable */
  
  export function numberOfLines(lines: number | string | null): string {
    return `
      @supports (-webkit-line-clamp: ${lines}) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: initial;
        display: -webkit-box;
        -webkit-line-clamp: ${lines};
        -webkit-box-orient: vertical;
      }
    `;
  }
  
  export function getConfigs(): OwnerConfigs {
    if (typeof window === 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return {} as any;
    }
  // @ts-ignore
    return window?.__pkbg__ || {};
  }
  