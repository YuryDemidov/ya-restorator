declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  export default content;
}

declare module 'animated-number-react' {
  interface Props {
    value: number;
    duration: number;
    formatValue: (price: number) => string;
  }

  const calculatorComponent: React.FC<Props>;
  export default calculatorComponent;
}
