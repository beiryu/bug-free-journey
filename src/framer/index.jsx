export const defaultVariants = {
  base: 'Phone',
  md: 'Tablet',
  xl: 'Desktop',
};

export function withDefaults(Component, defaultClassName = '') {
  return function WrappedComponent(props) {
    return (
      <Component.Responsive
        variants={defaultVariants}
        className={defaultClassName}
        {...props}
      />
    );
  };
}
