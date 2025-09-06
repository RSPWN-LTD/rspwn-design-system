/**
 * Utility functions for filtering props to prevent styled-components from forwarding
 * custom props to DOM elements, which causes console warnings and React errors.
 */

// Common spacing props used across components
const commonSpacingProps = [
  'p', 'py', 'px', 'pt', 'pb', 'pl', 'pr',
  'm', 'my', 'mx', 'mt', 'mb', 'ml', 'mr',
  'padding', 'margin'
];

// Common layout and positioning props
const commonLayoutProps = [
  'display', 'width', 'height', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight',
  'position', 'top', 'right', 'bottom', 'left', 'zIndex'
];

// Common flexbox and grid props
const commonFlexProps = [
  'flex', 'alignItems', 'justifyContent', 'flexDirection', 'flexWrap', 'gap',
  'gridTemplateColumns', 'gridTemplateRows', 'gridGap', 'alignContent',
  'justifyItems', 'justifySelf', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis'
];

// Common styling props
const commonStyleProps = [
  'bg', 'background', 'backgroundColor', 'color', 'variant', 'size',
  'textAlign', 'borderRadius', 'border', 'borderTop', 'borderBottom', 'borderLeft', 'borderRight',
  'shadow', 'opacity', 'cursor', 'overflow', 'overflowX', 'overflowY'
];

// Common component-specific props
const commonComponentProps = [
  'hoverable', 'clickable', 'fullWidth', 'disabled', 'loading', 'active',
  'centerContent', 'wrap', 'reverse', 'columns', 'rows'
];

/**
 * Creates a shouldForwardProp function for styled-components that filters out
 * common design system props and any additional custom props.
 * 
 * @param additionalProps - Array of additional prop names to filter out
 * @returns shouldForwardProp function for styled-components
 * 
 * @example
 * const StyledBox = styled.div.withConfig({
 *   shouldForwardProp: createShouldForwardProp(['customProp', 'anotherProp'])
 * })`
 *   // styles here
 * `;
 */
export const createShouldForwardProp = (additionalProps: string[] = []) => {
  const allFilteredProps = [
    ...commonSpacingProps,
    ...commonLayoutProps,
    ...commonFlexProps,
    ...commonStyleProps,
    ...commonComponentProps,
    ...additionalProps
  ];

  return (prop: string) => !allFilteredProps.includes(prop);
};

/**
 * Pre-configured shouldForwardProp functions for common component types
 */
export const propFilters = {
  // For layout components (Box, Container, etc.)
  layout: createShouldForwardProp(),
  
  // For typography components
  typography: createShouldForwardProp(['align', 'truncate', 'lineHeight', 'letterSpacing']),
  
  // For button components
  button: createShouldForwardProp(['isLoading', 'leftIcon', 'rightIcon', 'iconSpacing']),
  
  // For card components
  card: createShouldForwardProp(['elevated', 'interactive']),
  
  // For input components
  input: createShouldForwardProp(['isInvalid', 'isRequired', 'isReadOnly', 'focusBorderColor', 'errorBorderColor']),
  
  // For navigation components
  navigation: createShouldForwardProp(['isActive', 'isCurrent'])
};

/**
 * List of all filtered props for reference and debugging
 */
export const allFilteredProps = [
  ...commonSpacingProps,
  ...commonLayoutProps,
  ...commonFlexProps,
  ...commonStyleProps,
  ...commonComponentProps
];